import { createContext, useEffect, useState } from "react";
import { getEmployee } from "../service/userServices";

export const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {
  const [emp, setEmp] = useState([]);

  useEffect(() => {
    getEmployee()
      .then(res => setEmp(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <EmployeeContext.Provider value={{ emp }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeProvider;