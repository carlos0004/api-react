import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./Components/Layout";
import Create from "./Components/Create";
import Categorias from "./Pages/Categorias/Categorias";
import Autores from "./Pages/Autores/Autores";
import Noticias from "./Pages/Noticias/Noticias";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Noticias />} />
                    <Route path="/categorias" element={<Categorias />} />
                    <Route path="/autores" element={<Autores />} />
                    <Route path="/create" element={<Create />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
