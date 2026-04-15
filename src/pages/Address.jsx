import { useContext } from "react"

import { EmployeeContext } from "../context/EmployeeProvider";

const Address = ()=>{

    const {emp} = useContext(EmployeeContext)
    
    return(
         <main>
            <div className="container-fluid px-4">
                <h1 className="mt-4">Employee Address</h1>
               <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item active">Employee Address</li>
                </ol>
                <div className="card mb-4">
                    <div className="card-header">
                        <i className="fas fa-table me-1"></i>
                        Employee Address
                    </div>
                    <div className="card-body">
                        <table className="table table-responsive table-stripped table-bordered">
                            <thead>
                                <tr>
                                    <th>EMP ID</th>
                                    <th>NAME</th>
                                    <th>CITY</th>
                                    <th>STATE</th>
                                    <th>PIN</th>
                                    <th>BRANCH</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    emp.map((item)=>{
                                        return(
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.address['city']}</td>
                                                <td>{item.address['state']}</td>
                                                <td>{item.address['pincode']}</td>
                                                <td>{item.branch}</td>
                                            </tr>
                                        )
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
export default Address