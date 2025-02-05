import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values, options) => {
    dispatch(registerUser(values)).unwrap().then(navigate("/"));
    options.resetForm();
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center ">
      <h3>Register</h3>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className=" bg-blue rounded-3xl shadow-xl  p-4 flex flex-col gap-4  w-2/6">
          <label className="flex flex-col gap-2">
            <span>Name:</span>
            <Field
              name="name"
              type="text"
              className="p-2 border-1 border-black roundet-mb shadow-md"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span>Email:</span>
            <Field
              name="email"
              type="email"
              b
              className="p-2 border-1 border-black roundet-mb shadow-md"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span>Password:</span>
            <Field
              name="password"
              type="password"
              className="p-2 border-1 border-black roundet-mb shadow-md"
            />
          </label>

          <button
            type="submit"
            className="px-4 py-2 shadow-2xl rounded-md bg-teal-400 text-white cursor-pointer hover:bg-teal-500"
          >
            Register
          </button>
          <p>
            You already have an account?
            <Link to="/login" className=" text-teal-600 cursor-pointer p-4 ">
              Login
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
