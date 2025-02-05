import { useId } from "react";
import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const contactId = useId();
  const dispatch = useDispatch();
  const value = useSelector((state) => state.filters.name);
  const handleSearch = (e) =>
    dispatch(changeFilter(e.target.value.trim().toLowerCase()));

  return (
    <div>
      <label htmlFor={contactId} className={s.label}>
        <input
          className={s.input}
          type="text"
          value={value}
          id={contactId}
          onChange={handleSearch}
          placeholder="Find contacts by name "
        />{" "}
      </label>
    </div>
  );
};

export default SearchBox;
