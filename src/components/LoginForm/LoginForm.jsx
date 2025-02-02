import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/auth/operations";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(loginUser(values)).unwrap().then(navigate("/"));
    options.resetForm();
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center ">
      <h3>Login</h3>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className=" bg-blue rounded-3xl shadow-xl  p-4 flex flex-col gap-4  w-2/6">
          <label className="flex flex-col gap-2">
            <span>Email:</span>
            <Field
              name="email"
              className="p-2 border-1 border-black roundet-mb shadow-md"
            ></Field>
          </label>

          <label className="flex flex-col gap-2">
            <span>Password:</span>
            <Field
              name="password"
              type="password"
              className="p-2 border-1 border-black roundet-mb shadow-md"
            ></Field>
          </label>

          <button
            type="submit"
            className="px-4 py-2 shadow-2xl rounded-md bg-teal-400 text-white cursor-pointer hover:bg-teal-500"
          >
            Login
          </button>
          <p>
            You do not have an account?
            <Link to="/register" className=" text-teal-600 cursor-pointer p-4 ">
              Lets create one!
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
