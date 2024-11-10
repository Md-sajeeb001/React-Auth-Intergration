import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>
        if you are new to this website please{" "}
        <Link className="btn" to="/register">
          Register
        </Link>
      </h2>
      <h2>
        alredy have an account ? please{" "}
        <Link to="/login" className="btn">
          Login
        </Link>
      </h2>
    </div>
  );
};

export default Home;
