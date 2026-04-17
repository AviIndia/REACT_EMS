import { useEffect, useState } from "react";
import { getEmployee, addEmployee } from "../service/userServices";
import { Modal } from "bootstrap";

const Employee = () => {
    const [users, setUsers] = useState([]);
    const closeModal = () => {
  const modalEl = document.getElementById("exampleModal");

  if (modalEl) {
    const modal = Modal.getOrCreateInstance(modalEl);
    modal.hide();
  }

  // ✅ Force cleanup (important)
  document.body.classList.remove("modal-open");
  document.body.style = "";
  document.querySelectorAll(".modal-backdrop").forEach(el => el.remove());
};
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
        marital_status:"Single",
        active:"True"
    };

    const [form, setForm] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleFormdata = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // ✅ validation
        if (!form.emp_id || !form.emp_name) {
            setError("Employee ID and Name are required");
            return;
        }

        try {
            setLoading(true);
            setError("");

            const res = await addEmployee(form);
            console.log(form);
            // ✅ update UI
            //setUsers((prev) => [...prev, res.data]);
            console.log(res.data)

            // ✅ reset form
            setForm(initialState);

            alert("Employee added successfully ✅");

            // ✅ CLOSE MODAL
           closeModal()

            // ✅ close modal (optional)
            // modal.hide()

        }
        catch (err) {
            alert(err.response?.data?.message || "Error occurred ❌");
            setError("Failed to save employee");
        } finally {
            setLoading(false);
        }
    };



    useEffect(() => {
        getEmployee()
            .then((res) => {
                (setUsers(res.data), console.log(res.data));
            })
            .catch((err) => console.error(err));
    }, []);
    return (
        <main>
            <div className="container-fluid px-4">
                <div className="d-flex justify-content-between">
                    <h1 className="mt-4">Employee List</h1>
                    <button
                        className="btn btn-primary btn-sm mt-4"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                    >
                        ADD EMPLOYEE
                    </button>
                </div>

                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item active">Employee Details</li>
                </ol>
                <div className="card mb-4">
                    <div className="card-header">
                        <i className="fas fa-table me-1"></i>
                        Employee Details
                    </div>
                    <div className="card-body">
                        <table className="table table-responsive table-stripped table-bordered">
                            <thead>
                                <tr>
                                    <th>EMP ID</th>
                                    <th>NAME</th>
                                    <th>EMAIL</th>
                                    <th>PHONE</th>
                                    <th>GEN</th>
                                    <th>DOB</th>
                                    <th>DOJ</th>
                                    <th>BRANCH</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((e) => {
                                    return (
                                        <tr key={e.id}>
                                            <td>{e.id}</td>
                                            <td>{e.name}</td>
                                            <td>{e.email}</td>
                                            <td>{e.phone}</td>
                                            <td>{e.gender}</td>
                                            <td>{e.dob}</td>
                                            <td>{e.doj}</td>
                                            <td>{e.branch}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                ADD NEW EMPLOYEE
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                            ></button>
                        </div>
                        {error && <div className="alert alert-danger">{error}</div>}
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">


                                <div className="row mb-3">
                                    <div className="col">
                                        <label htmlFor="empId">Employee ID</label>
                                        <input type="text" name="emp_id" value={form.emp_id} onChange={handleFormdata} className="form-control" placeholder="EMP ID" />
                                    </div>

                                    <div className="col">
                                        <label htmlFor="empName">Employee Name</label>
                                        <input type="text" name="emp_name" value={form.emp_name} onChange={handleFormdata} className="form-control" placeholder="Full Name" />
                                    </div>

                                    <div className="col">
                                        <label htmlFor="dob">Date of Birth</label>
                                        <input type="date" name="dob" value={form.dob} onChange={handleFormdata} className="form-control" />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col">
                                        <label htmlFor="doj">Date of Joining</label>
                                        <input type="date" name="doj" value={form.doj} onChange={handleFormdata} className="form-control" />
                                    </div>

                                    <div className="col">
                                        <label>Branch</label>
                                        <select className="form-select" name="branch" onChange={handleFormdata} value={form.branch}>
                                            <option defaultValue>Choose One</option>
                                            <option>Kolkata</option>
                                            <option>Patna</option>
                                            <option>Assam</option>
                                        </select>
                                    </div>

                                    <div className="col">
                                        <label>Email Id</label>
                                        <input type="email" name="email" value={form.email} onChange={handleFormdata} className="form-control" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label htmlFor="doj">Blood Group</label>
                                        <select className="form-select" name="blood_group" onChange={handleFormdata} value={form.blood_group}>
                                            <option defaultValue>Choose One</option>
                                            <option value={"A+"}>A+</option>
                                            <option value={"O+"}>O+</option>
                                            <option value={"AB+"}>AB+</option>
                                        </select>
                                    </div>

                                    <div className="col">
                                        <label>Gender</label>
                                       <select
                                            className="form-select"
                                            name="gen"
                                            onChange={handleFormdata}
                                            value={form.gen}
                                            >
                                            <option value="">Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Others">Transgender</option>
                                            </select>
                                    </div>

                                    <div className="col">
                                        <label>Contact No.</label>
                                        <input type="text" name="phone" value={form.phone} onChange={handleFormdata} className="form-control" placeholder="Email" />
                                    </div>
                                </div>

                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                    Close
                                </button>
                                <button disabled={loading} className="btn btn-primary">
                                    {loading ? "Saving..." : "Save changes"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default Employee;
