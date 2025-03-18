import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import Layout from "./Components/Layout";
import { AppContext } from "./Context/AppContext";
import { useContext, useEffect } from "react";
import Categorias from "./Pages/Categorias/Categorias";
import Autores from "./Pages/Autores/Autores";
import Noticias from "./Pages/Noticias/Noticias";
import CreateCategory from "./Pages/Categorias/CreateCategory";
import UpdateCategory from "./Pages/Categorias/UpdateCategory";
import CreateAutor from "./Pages/Autores/CreateAuthor";
import CreateNotice from "./Pages/Noticias/CreateNotice";
import UpdateNotice from "./Pages/Noticias/UpdateNotice";
import UpdateAuthor from "./Pages/Autores/UpdateAuthor";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AppContext);
    if (!user) {
        return <Login />;
    }
    return children;
};

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    <Route
                        path="/"
                        element={
                            <ProtectedRoute>
                                <Noticias />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/noticias/create"
                        element={
                            <ProtectedRoute>
                                <CreateNotice />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/noticias/update/:id"
                        element={
                            <ProtectedRoute>
                                <UpdateNotice />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/categorias"
                        element={
                            <ProtectedRoute>
                                <Categorias />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/categorias/create"
                        element={
                            <ProtectedRoute>
                                <CreateCategory />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/categorias/update/:id"
                        element={
                            <ProtectedRoute>
                                <UpdateCategory />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/autores"
                        element={
                            <ProtectedRoute>
                                <Autores />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/autores/create"
                        element={
                            <ProtectedRoute>
                                <CreateAutor />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/autores/update/:id"
                        element={
                            <ProtectedRoute>
                                <UpdateAuthor />
                            </ProtectedRoute>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
