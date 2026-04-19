import { NavLink } from "react-router-dom";
const Sidebar = ()=>{

    return(
         <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Core</div>
                              <NavLink
                                to="/dashboard"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                                >
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Dashboard
                           </NavLink>
                            <div className="sb-sidenav-menu-heading">Employee Details</div>
                  
                           <NavLink
                                to="/employee"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                                > <div className="sb-nav-link-icon">
                                    <i className="fas  fa-list-alt"></i>
                                </div>
                                Employee List
                                </NavLink>
                                <NavLink
                                to="/address"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                                >
                                <div className="sb-nav-link-icon"><i className="fas fa-thumb-tack"></i></div>
                                Address
                            </NavLink>
                                        <NavLink
                                to="/Masteraddress"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                                >
                                <div className="sb-nav-link-icon"><i className="fas fa-thumb-tack"></i></div>
                                Mastert Address
                            </NavLink>
                                <NavLink
                                to="/salary"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                                >
                                <div className="sb-nav-link-icon"><i className="fas fa-inr"></i></div>
                                Salary
                            </NavLink>
                                <NavLink
                                to="/bankDetails"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                                >
                                <div className="sb-nav-link-icon"><i className="fas fa-university"></i></div>
                                Bank Details
                            </NavLink>
                                <NavLink
                                to="/qualification"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                                >
                                <div className="sb-nav-link-icon"><i className="fas fa-graduation-cap"></i></div>
                                Qualification
                            </NavLink>

                             <NavLink
                                to="/firebaseEmployee"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                                >
                                <div className="sb-nav-link-icon"><i className="fas fa-graduation-cap"></i></div>
                                Employee Firebese
                            </NavLink>
                           

                           {/*  <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                Employee
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link" >Employee Details</a>
                                    <a className="nav-link" >Address</a>
                                    <a className="nav-link" >Salary</a>
                                    <a className="nav-link" >Address</a>
                                    <a className="nav-link" >Bank Details</a>
                                    <a className="nav-link" >Qualification</a>
                                </nav>
                            </div> */}
                           {/*  <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                Pages
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                        Authentication
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </a>
                                    <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <a className="nav-link" href="login.html">Login</a>
                                            <a className="nav-link" href="register.html">Register</a>
                                            <a className="nav-link" href="password.html">Forgot Password</a>
                                        </nav>
                                    </div>
                                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                        Error
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </a>
                                    <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <a className="nav-link" href="401.html">401 Page</a>
                                            <a className="nav-link" href="404.html">404 Page</a>
                                            <a className="nav-link" href="500.html">500 Page</a>
                                        </nav>
                                    </div>
                                </nav>
                            </div> */}
                           {/*  <div className="sb-sidenav-menu-heading">Addons</div>
                            <a className="nav-link" href="charts.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                Charts
                            </a>
                            <a className="nav-link" href="tables.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                                Tables
                            </a> */}
                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Logged in as:</div>
                        Start Bootstrap
                    </div>
                </nav>
            </div>
    )

}

export default Sidebar