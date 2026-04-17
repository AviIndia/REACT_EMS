import api from "./api";

export const getEmployee = ()=> api.get(`employees`);
export const addEmployee = (data)=> api.post(`employee_master`, data);
export const getEmployeeById = (id)=> api.get(`employees/${id}`);
export const updateEmployee = (id, data) => api.put(`employees/${id}`, data);
export const removeEmployee = (id)=>api.delete(`employees/${id}`)

export const addEmpAddress = (data)=> api.post(`employee_address`,data);
export const updateEmpAddress = (id,data)=> api.put(`employee_address/${id}`,data);

export const addSalary = (data)=> api.post(`employee_salary_breakup`,data);
export const updateSalary = (id,data) => api.put(`employee_salary_breakup/${id}`,data);

export const addbankDetails = (data) => api.post(`emp_bank_details`,data);
export const updateBankDetails = (id,data) => api.put(`emp_bank_details/${id}`,data)