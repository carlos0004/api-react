import { Outlet } from "react-router";
import Navbar from "./Navbar";
import { ToastContainer } from "react-toastify";

const Layout = () => {
    return (
        <div className="h-screen">
            <ToastContainer />
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Layout;
