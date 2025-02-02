import { Field, Form, Formik } from "formik";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className=" bg-blue rounded-3xl shadow-xl  p-4 flex flex-col gap-4">
          <label className="flex flex-col gap 2">
            <span>Email:</span>
            <Field
              name="email"
              className="p-2 border-1 border-black roundet-mb shadow-md"
            ></Field>
          </label>

          <label className="flex flex-col gap 2">
            <span>Password:</span>
            <Field name="password" type="password"></Field>
          </label>

          <button
            type="submit"
            className="px-2 py-2 shadow-md bg-green text-white roundet-mb"
          >
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
