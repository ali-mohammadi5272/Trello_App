import { Outlet } from "react-router-dom";
import Navbar from "../../modules/Navbar/Navbar";

const IndexPage = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default IndexPage;
