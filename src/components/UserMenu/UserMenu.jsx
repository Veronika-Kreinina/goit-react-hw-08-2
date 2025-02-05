import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logoutUser } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(logoutUser());
  const user = useSelector(selectUser);
  return (
    <div className="container">
      <p>Welcome, {user.name}!</p>
      <button type="submit" className="btn btn-outline " onClick={handleClick}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
