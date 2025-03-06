import { BrowserRouter, Route, Routes } from "react-router";
import Autores from "./Pages/Autores";
import Noticias from "./Pages/Noticias";
import Layout from "./Components/Layout";
import Categorias from "./Pages/Categorias";
import Create from "./Components/Create";

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