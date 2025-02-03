import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logoutUser } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(logoutUser());
  const user = useSelector(selectUser);
  return (
    <div>
      <p>Welcome, {user.name}!</p>
      <button
        type="submit"
        className="px-4 py-2 shadow-2xl rounded-md bg-teal-400 text-white cursor-pointer flex gap-2 hover:bg-teal-500"
        onClick={handleClick}
      >
        Logout
      </button>
      <button className="btn btn-outline btn-accent">Accent</button>
    </div>
  );
};

export default UserMenu;
