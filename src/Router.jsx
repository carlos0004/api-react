import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./Components/Layout";
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

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={<Noticias />} />
                    <Route path="/noticias/create" element={<CreateNotice />} />
                    <Route path="/noticias/update/:id" element={<UpdateNotice />} />
                    <Route path="/categorias" element={<Categorias />} />
                    <Route path="/categorias/create" element={<CreateCategory />} />
                    <Route path="/categorias/update/:id" element={<UpdateCategory />} />
                    <Route path="/autores" element={<Autores />} />
                    <Route path="/autores/create" element={<CreateAutor />} />
                    <Route path="/autores/update/:id" element={<UpdateAuthor />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
