/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <span className="loading loading-ring loading-lg"></span>;
  }

  if (user) {
    return children;
  }
  return (
    <div>
      <Navigate to="/login"></Navigate>
    </div>
  );
};

export default PrivetRoute;