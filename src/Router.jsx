import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./Components/Layout";
import Categorias from "./Pages/Categorias/Categorias";
import Autores from "./Pages/Autores/Autores";
import Noticias from "./Pages/Noticias/Noticias";
import CreateCategory from "./Pages/Categorias/CreateCategory";
import CreateAutor from "./Pages/Autores/CreateAuthor";
import CreateNotice from "./Pages/Noticias/CreateNotice";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Noticias />} />
                    <Route path="/noticias/create" element={<CreateNotice />} />
                    <Route path="/categorias" element={<Categorias />} />
                    <Route path="/categorias/create" element={<CreateCategory />} />
                    <Route path="/autores" element={<Autores />} />
                    <Route path="/autores/create" element={<CreateAutor />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
