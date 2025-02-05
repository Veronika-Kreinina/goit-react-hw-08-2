import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import s from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <>
      <div className={s.container}>
        <div>
          <p className={s.text}>{contact.name}</p>
          <p className={s.text}>{contact.number}</p>
        </div>
        <button className={s.btn} onClick={() => handleDelete()}>
          Delete
        </button>
      </div>
    </>
  );
};

export default Contact;
