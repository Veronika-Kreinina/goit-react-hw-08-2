import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <div className="container">
      <NavLink to="/register" className="btn btn-outline btn-accent">
        Register
      </NavLink>
      <NavLink to="/login" className="btn btn-outline btn-accent">
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
