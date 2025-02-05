import { useId } from "react";
import { useDispatch } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { addContact } from "../../redux/contacts/operations";
import s from "./ContactForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = () => {
  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    values.id = nanoid();
    dispatch(
      addContact({ id: values.id, name: values.name, number: values.number })
    );
    actions.resetForm();
  };

  const initialValues = {
    name: "",
    number: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={s.form}>
        <div>
          <label htmlFor={nameId}></label>
          <Field
            className={s.input}
            type="text"
            name="name"
            id={nameId}
            placeholder="Name"
          />
          <ErrorMessage className={s.error} name="name" component="span" />
        </div>
        <div>
          <label htmlFor={numberId}></label>
          <Field
            className={s.input}
            type="text"
            name="number"
            id={numberId}
            placeholder="Number"
          />
          <ErrorMessage className={s.error} name="number" component="span" />
        </div>
        <button className={s.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
