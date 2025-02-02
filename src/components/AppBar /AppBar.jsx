import { NavLink } from "react-router-dom";
import s from "./AppBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logoutUser } from "../../redux/auth/operations";

// tio123@gmail.com
const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleClick = () => dispatch(logoutUser());
  return (
    <div className={s.container}>
      {isLoggedIn && <h2 className={s.header}>Hello, {user.name}!</h2>}
      <nav className={s.link}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        {isLoggedIn ? (
          <button
            className="cursor-pointer border-2 border-white rounded-md px-2 py-1"
            onClick={handleClick}
          >
            Logout
          </button>
        ) : (
          <>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
      </nav>
    </div>
  );
};

export default AppBar;
