// import Contact from "../../components/Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsLoading } from "../../redux/contacts/selectors";

const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const isLoading = useSelector(selectIsLoading);
  return (
    <div
      className=" min-h-screen   "
      style={{
        backgroundImage: `url(/src/assets/marissa-grootes-YwPNWDNZHkg-unsplash.jpg`,
        backgroundColor: "lightgray",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "lighten",
      }}
    >
      <ContactForm />
      <SearchBox />
      <ContactList />
      {isLoading && <p>Loading...</p>}
      {/* <Contact /> */}
    </div>
  );
};

export default ContactsPage;
