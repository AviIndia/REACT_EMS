import { useEffect, useState } from "react"
import { getEmployee } from "../service/userServices";

const Qualification = ()=>{
         const [emp, setEmp] = useState([]);
                useEffect(()=>{
                    getEmployee()
                        .then((res)=>setEmp(res.data))
                        .catch((err)=>console.log(err))
                },[])

    return(
         <main>
            <div className="container-fluid px-4">
                <h1 className="mt-4">Employee Qualification</h1>
               <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item active">Qualification</li>
                </ol>
                <div className="card mb-4">
                    <div className="card-header">
                        <i className="fas fa-table me-1"></i>
                        Qualification Details
                    </div>
                    <div className="card-body">
                        <table className="table table-responsive table-stripped table-bordered">
                            <thead>
                                <tr>
                                    <th>EMP ID</th>
                                    <th>NAME</th>
                                    <th>HIGHEST QUALIFICATION</th>
                                    <th>PASSOUT YEAR</th>
                                   <th>BRANCH</th>
                                </tr>
                            </thead>
                            <tbody>
                              {
                                emp.map((e)=>{
                                    return(<tr key={e.id}>
                                        <td>{e.id}</td>
                                        <td>{e.name}</td>
                                        
                                      <td>{e.qualification?.[0]?.degree}</td>
                                        <td>{e.qualification?.[0]?.year}</td>
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
export default Qualification