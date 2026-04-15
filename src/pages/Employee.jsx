import { useEffect, useState } from "react"
import { getEmployee } from "../service/userServices";


const Employee = ()=>{

    const [users, setUsers] = useState([]);
   useEffect(() => {
  getEmployee()
    .then(res => {setUsers(res.data), console.log(res.data);})
    .catch(err => console.error(err));
}, []);
    return(
         <main>
            <div className="container-fluid px-4">
                <h1 className="mt-4">Employee List</h1>
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
                              {
                                users.map((e)=>{
                                    return(<tr key={e.id}>
                                        <td>{e.id}</td>
                                        <td>{e.name}</td>
                                        <td>{e.email}</td>
                                        <td>{e.phone}</td>
                                        <td>{e.gender}</td>
                                        <td>{e.dob}</td>
                                        <td>{e.doj}</td>
                                        <td>{e.branch}</td>
                                    </tr>)
                                    
                                })
                              }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Employee