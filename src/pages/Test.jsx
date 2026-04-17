import { useState, useEffect } from "react";
import { Modal } from "bootstrap";
import { getEmployee,addEmployee,addEmpAddress,addSalary,addBankDetails} from "../service/user-service";

const Employee = () => {

  const initialState = {
    emp_id: "",
    emp_name: "",
    dob: "",
    doj: "",
    branch: "",
    email: "",
    blood_group: "",
    gen: "",
    phone: "",
    marital_status: "Single",
    active: true
  };

  const [users, setUsers] = useState([]);
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ Fetch Employees
  const fetchUsers = async () => {
    const res = await getEmployee();
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // ✅ Handle Input
  const handleFormdata = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // ✅ Close Modal
  const closeModal = () => {
    const modalEl = document.getElementById("exampleModal");
    const modal = Modal.getOrCreateInstance(modalEl);
    modal.hide();

    // cleanup
    document.body.classList.remove("modal-open");
    document.querySelectorAll(".modal-backdrop").forEach(el => el.remove());
  };

  // ✅ Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.emp_id || !form.emp_name) {
      setError("Employee ID and Name are required");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const empPayload = {
        ...form,
        active: true
      };

      // ✅ 1. Create employee
      await addEmployee(empPayload);

      // ✅ 2. Create empty related records
      await Promise.all([
        addEmpAddress({ emp_id: form.emp_id }),
        addSalary({ emp_id: form.emp_id }),
        addBankDetails({ emp_id: form.emp_id })
      ]);

      // ✅ 3. Refresh UI
      await fetchUsers();

      // ✅ 4. Reset form
      setForm(initialState);

      alert("Employee created successfully ✅");

      // ✅ 5. Close modal
      closeModal();

    } catch (err) {
      console.error(err);
      alert("Error occurred ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Button */}
      <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add Employee
      </button>

      {/* Modal */}
      <div className="modal fade" id="exampleModal">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">

            <div className="modal-header">
              <h5>Add Employee</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="modal-body">

                {error && <div className="alert alert-danger">{error}</div>}

                <div className="row mb-3">
                  <div className="col">
                    <input name="emp_id" value={form.emp_id} onChange={handleFormdata} className="form-control" placeholder="EMP ID" />
                  </div>
                  <div className="col">
                    <input name="emp_name" value={form.emp_name} onChange={handleFormdata} className="form-control" placeholder="Name" />
                  </div>
                  <div className="col">
                    <input type="date" name="dob" value={form.dob} onChange={handleFormdata} className="form-control" />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col">
                    <select name="branch" value={form.branch} onChange={handleFormdata} className="form-select">
                      <option value="">Branch</option>
                      <option value="Kolkata">Kolkata</option>
                      <option value="Patna">Patna</option>
                    </select>
                  </div>

                  <div className="col">
                    <select name="gen" value={form.gen} onChange={handleFormdata} className="form-select">
                      <option value="">Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>

                  <div className="col">
                    <input name="phone" value={form.phone} onChange={handleFormdata} className="form-control" placeholder="Phone" />
                  </div>
                </div>

              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? "Saving..." : "Save"}
                </button>
              </div>

            </form>

          </div>
        </div>
      </div>

      {/* Table */}
      <table className="table mt-3">
        <thead>
          <tr>
            <th>Emp ID</th>
            <th>Name</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.emp_id}</td>
              <td>{u.emp_name}</td>
              <td>{u.branch}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Employee;