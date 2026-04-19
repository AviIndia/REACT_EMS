import { Outlet } from "react-router-dom"
import Topbar from "../components/Topbar"
import Sidebar from "../components/Sidebar"
import { useState } from "react"

const Mainlayout = ()=>{
    const [toggle, setToggle] = useState(true)
    return(
      <div className={toggle ? "sidebarToggle"  : "sb-sidenav-toggled"}>
      <Topbar setToggle={setToggle} toggle={toggle} />
        <div id="layoutSidenav">
            <Sidebar/>
            <div id="layoutSidenav_content">
                <Outlet></Outlet>
            </div>
        </div>
       </div>
    )
}

export default Mainlayout