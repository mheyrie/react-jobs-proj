import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  const location = useLocation();
  const noNavFooter =
    location.pathname === "/signup" ||
    location.pathname === "/login";
  return (
    <>
      {!noNavFooter && <Navbar />}
      <Outlet />
      <ToastContainer />
      {!noNavFooter && <Footer />}
    </>
  );
};

export default MainLayout;
