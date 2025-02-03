import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <NavLink to="/register"> Register </NavLink>
      <NavLink to="/login"> Login </NavLink>
    </div>
  );
};

export default AuthNav;
