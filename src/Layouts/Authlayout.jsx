import { Outlet } from "react-router-dom";

const Authlayout = () => {
  return (
    <div className="auth-bg">
      <Outlet />
    </div>
  );
};

export default Authlayout;