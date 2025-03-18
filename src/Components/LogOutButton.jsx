import { useContext } from "react";
import { BiLogOut } from "react-icons/bi";
import { AppContext } from "../Context/AppContext";
import { useNavigate } from "react-router";
import api from "../utils/api";

const LogOutButton = ({ className }) => {
    const { token, setToken, setUser } = useContext(AppContext);
    const navigate = useNavigate();
    const handleLogout = async () => {
        const response = await api("/api/logout", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        if (!response.error) {
            localStorage.removeItem("token");
            setUser(null);
            setToken(null);
            navigate("/");
        }
    };
    return (
        <>
            <button onClick={handleLogout} className={`hover:text-gray-300 transition-colors ${className}`} title="Cerrar sesión">
                <BiLogOut className="size-6" />
            </button>
        </>
    );
};
export default LogOutButton;
