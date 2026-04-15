import './assets/css/styles.css'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './Layouts/Mainlayout'
import Dashboard from './pages/Dashboard'
import Employee from './pages/Employee'
import Address from './pages/Address'
import Bankdetails from './pages/Bankdetails'
import Qualification from './pages/Qualification'
import Notfound from './pages/Notfound'
import Authlayout from './Layouts/Authlayout'
import Login from './pages/Login'
import Salary from './pages/Salary'
import EmployeeProvider from "./context/EmployeeProvider";

function App() {
  return (
     <EmployeeProvider>
    <BrowserRouter>
      <Routes>

         <Route path="/" element={<Authlayout/>}>
            <Route path="/" element={<Login/>} />
        </Route>
        {/* -------- layout Router-------- */}
        <Route path="/" element={<MainLayout />}>

          {/* ------- child route-------- */}
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/employee' element={<Employee />} />
          <Route path='/address' element={<Address />} />
          <Route path='/bankDetails' element={<Bankdetails />} />
          <Route path='/qualification' element={<Qualification />} />
          <Route path='/salary' element={<Salary/>} />

        </Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </BrowserRouter>
    </EmployeeProvider>
  )
}

export default App