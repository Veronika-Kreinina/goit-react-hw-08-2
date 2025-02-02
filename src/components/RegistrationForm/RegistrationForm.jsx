import { Field, Form, Formik } from "formik";

const RegistrationForm = () => {
  return (
    <div>
      return (
      <div>
        <Formik>
          <Form>
            <label>
              <span>Name:</span>
              <Field name="name"></Field>
            </label>

            <label>
              <span>Email:</span>
              <Field name="email"></Field>
            </label>

            <label>
              <span>Password:</span>
              <Field name="password" type="password"></Field>
            </label>

            <button type="submit">Login</button>
          </Form>
        </Formik>
      </div>
      );
    </div>
  );
};

export default RegistrationForm;
