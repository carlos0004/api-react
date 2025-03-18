import { createContext, useEffect, useState } from "react";
import api from "../utils/api";

export const AppContext = createContext();

export default function AppProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState(null);
    c;
    async function getUser() {
        const response = await api("/api/user", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        if (!response.error) {
            setUser(response);
        }
    }

    useEffect(() => {
        if (token) {
            getUser();
        }
    }, [token]);

    return <AppContext.Provider value={{ token, setToken, user, setUser }}>{children}</AppContext.Provider>;
}
