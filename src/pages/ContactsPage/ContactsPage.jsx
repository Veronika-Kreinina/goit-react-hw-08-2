// import Contact from "../../components/Contact/Contact";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";

const ContactsPage = () => {
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
      {/* <Contact /> */}
    </div>
  );
};

export default ContactsPage;
