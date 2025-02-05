import { Toaster } from "react-hot-toast";

const NotFound = () => {
  return (
    <p>
      <Toaster position="top-center" reverseOrder={false}>
        Ooops, something went wrong
      </Toaster>
    </p>
  );
};

export default NotFound;
