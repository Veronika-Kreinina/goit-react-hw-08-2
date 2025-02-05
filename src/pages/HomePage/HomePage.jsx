import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(/src/assets/dose-media-bU6JyhSI6zo-unsplash.jpg)`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there!</h1>
            <p className="mb-5 text-lg pb-4">It’s your personal phone book</p>

            <NavLink to="/contacts" className="btn btn-accent">
              Let’s create contacts
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
