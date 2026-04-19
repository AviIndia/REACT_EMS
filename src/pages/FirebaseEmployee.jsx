import { useEffect, useState } from "react";
import { getFbEmployees } from "../service/firebaseEmployee";

const FirebaseEmployee = () => {
  const [data, setData] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await getFbEmployees();
      console.log("DATA:", res);

      if (Array.isArray(res)) {
        setData(res);
      } else {
        setData([]);
      }

    } catch (err) {
      console.error("ERROR:", err);
      setData([]);
    }
  };

  fetchData();
}, []);

  return (
    <div>
      <h2>Employee List</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Salary</th>
          </tr>
        </thead>

        <tbody>
{Array.isArray(data) && data.length > 0 ? (
  data.map(emp => (
    <tr key={emp.id}>
      <td>{emp.name}</td>
      <td>{emp.email}</td>
      <td>{emp.salary}</td>
    </tr>
  ))
) : (
  <tr>
    <td colSpan="3">No Data Found</td>
  </tr>
)}
        </tbody>
      </table>
    </div>
  );
};

export default FirebaseEmployee;