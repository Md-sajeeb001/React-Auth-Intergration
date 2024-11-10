import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Link } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [success, setSuccess] = useState(false);
  const [showError, setShowError] = useState("");

  const handelRegisterSubmit = (e) => {
    e.preventDefault();

    setShowError('')
    setSuccess(false)

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((res) => {
        console.log(res);
        setSuccess(true)
      })
      .catch((error) => {
        console.log("ERROR", error.message);
        setShowError(error.message)
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 max-w-xl mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse w-full mx-auto">
          <div className="card bg-base-100 w-full shadow-2xl">
            <h1 className="text-2xl text-center font-bold">Register now!</h1>
            <form onSubmit={handelRegisterSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="name"
                  type="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="text-center">
              already have an account <Link to="/login">Log in</Link>
            </p>
            {success && <p className="text-green-500">sucessfully log in</p>}
            {showError && <p className="text-red-500">{showError}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
