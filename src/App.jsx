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
import EmployeeMasterAddress from './pages/EmployeeMasterAddress'
import EmployeeProvider from "./context/EmployeeProvider";
import FirebaseEmployee from './pages/firebaseEmployee'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Authlayout/>}>
          <Route path="/" element={<Login/>} />
        </Route>

        <Route path="/" element={<MainLayout />}>

          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/employee' element={<Employee />} />
          <Route path='/address' element={<Address />} />
          <Route path='/Masteraddress' element={<EmployeeMasterAddress/>} />
          <Route path='/bankDetails' element={<Bankdetails />} />
          <Route path='/qualification' element={<Qualification />} />
          <Route path='/salary' element={<Salary/>} />
          <Route path='/firebaseEmployee' element={<FirebaseEmployee/>}/>

        </Route>

        {/* ✅ FIXED */}
        <Route path="*" element={<Notfound />} />

      </Routes>
    </BrowserRouter>
  )
}
export default App