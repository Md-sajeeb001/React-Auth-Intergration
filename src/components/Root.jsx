import { Outlet } from "react-router-dom";
import Header from "./Header";

const Root = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Header></Header>
      <div className="my-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
