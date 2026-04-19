import { useEffect, useState } from "react";
import { Modal } from "bootstrap";

import {
  getEmployeeMasterAddress,
  getEmployeeMaster,
  updateEmpAddress
} from "../service/userServices";

const EmployeeMasterAddress = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const emptyAddress = {
    id: "",
    emp_id: "",
    emp_name: "",
    address: "",
    city: "",
    district: "",
    state: "",
    pin: ""
  };

  const [editData, setEditData] = useState(emptyAddress);

  // ✅ FETCH + MERGE DATA
  const fetchData = async () => {
    try {
      const [addrRes, empRes] = await Promise.all([
        getEmployeeMasterAddress(),
        getEmployeeMaster()
      ]);

      // 🔥 create map for fast lookup
      const empMap = empRes.data.reduce((acc, emp) => {
        acc[emp.emp_id] = emp;
        return acc;
      }, {});

      // 🔥 merge data
      const merged = addrRes.data.map(addr => ({
        ...addr,
        emp_name: empMap[addr.emp_id]?.emp_name || "N/A"
      }));

      setData(merged);

    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ✅ HANDLE EDIT CLICK
  const handleEdit = (item) => {
    setEditData({
      ...emptyAddress,
      ...item
    });
  };

  // ✅ HANDLE INPUT CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;

    setEditData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // ✅ CLOSE MODAL
  const closeModal = () => {
    const modalEl = document.getElementById("updateModal");

    if (modalEl) {
      const modal = Modal.getOrCreateInstance(modalEl);
      modal.hide();
    }

    document.body.classList.remove("modal-open");
    document.querySelectorAll(".modal-backdrop").forEach(el => el.remove());
  };

  // ✅ UPDATE DATA
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await updateEmpAddress(editData.id, editData);

      alert("Updated successfully ✅");

      await fetchData(); // refresh table

      closeModal();

    } catch (err) {
      console.error(err);
      alert("Update failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <div className="container-fluid px-4">
        <h1 className="mt-4">Employee Address</h1>

        <div className="card mb-4">
          <div className="card-header">
            Employee Address Table
          </div>

          <div className="card-body">

            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>EMP ID</th>
                  <th>EMP NAME</th>
                  <th>ADDRESS</th>
                  <th>CITY</th>
                  <th>DISTRICT</th>
                  <th>STATE</th>
                  <th>PIN</th>
                  <th>ACTION</th>
                </tr>
              </thead>

              <tbody>
                {
                  data.map(item => (
                    <tr key={item.id}>
                      <td>{item.emp_id}</td>
                      <td>{item.emp_name}</td>
                      <td>{item.address}</td>
                      <td>{item.city}</td>
                      <td>{item.district}</td>
                      <td>{item.state}</td>
                      <td>{item.pin}</td>

                      <td>
                        <button
                          className="btn btn-sm btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#updateModal"
                          onClick={() => handleEdit(item)}
                        >
                          Update
                        </button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>

          </div>
        </div>
      </div>

      {/* ✅ UPDATE MODAL */}
      <div className="modal fade" id="updateModal">
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h5>Update Address</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <form onSubmit={handleUpdate}>
              <div className="modal-body">

                <input
                  className="form-control mb-2"
                  value={editData.emp_id}
                  disabled
                />

                <input
                  className="form-control mb-2"
                  value={editData.emp_name}
                  disabled
                />

                <input
                  className="form-control mb-2"
                  name="address"
                  value={editData.address}
                  onChange={handleChange}
                  placeholder="Address"
                />

                <input
                  className="form-control mb-2"
                  name="city"
                  value={editData.city}
                  onChange={handleChange}
                  placeholder="City"
                />

                <input
                  className="form-control mb-2"
                  name="district"
                  value={editData.district}
                  onChange={handleChange}
                  placeholder="District"
                />

                <input
                  className="form-control mb-2"
                  name="state"
                  value={editData.state}
                  onChange={handleChange}
                  placeholder="State"
                />

                <input
                  className="form-control mb-2"
                  name="pin"
                  value={editData.pin}
                  onChange={handleChange}
                  placeholder="PIN"
                />

              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>

                <button
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading ? "Updating..." : "Update"}
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>

    </main>
  );
};

export default EmployeeMasterAddress;