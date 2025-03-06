import { Outlet } from "react-router";
import Navbar from "./Navbar";

const Layout = () => {
    return (
        <div className="h-screen">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Layout;
