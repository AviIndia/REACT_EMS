import login from "../assets/images/admin-panel.png";
const Login = ()=>{
    return(
        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5" style={{width:"35%"}}>
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header text-center"><img src={login} style={{ maxWidth: "80%" }} /></div>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="inputEmail" type="email" placeholder="name@example.com" />
                                                <label for="inputEmail">Email address</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="inputPassword" type="password" placeholder="Password" />
                                                <label for="inputPassword">Password</label>
                                            </div>
                                            <div className="form-check mb-3">
                                                <input className="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
                                                <label className="form-check-label" for="inputRememberPassword">Remember Password</label>
                                            </div>
                                            <div className="form-floating mb-0">
                                                <button className="btn btn-primary" style={{width:"100%"}}>LOGIN</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-footer text-center py-3">
                                        <div className="small"><a href="">Forgot Password</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            
        </div>
    )
}
export default Login