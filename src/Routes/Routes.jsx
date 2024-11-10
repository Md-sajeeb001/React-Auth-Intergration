import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../components/Home";
import Register from "../components/Register";
import Login from "../components/Login";
import Orders from "../components/Orders";
import PrivetRoute from "../route/PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/orders",
        element: 
          <PrivetRoute>
            <Orders></Orders>
          </PrivetRoute>
        
      },
    ],
  },
]);

export default router;
