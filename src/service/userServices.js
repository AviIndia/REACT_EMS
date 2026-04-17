import api from "./api";

export const getEmployee = ()=> api.get(`employees`);
export const addEmployee = (data)=> api.post(`employee_master`, data);
export const getEmployeeById = (id)=> api.get(`employees/${id}`);
export const updateEmployee = (id, data) => api.put(`employees/${id}`, data);
export const removeEmployee = (id)=>api.delete(`employees/${id}`)