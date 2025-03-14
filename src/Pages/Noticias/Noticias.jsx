import { useEffect, useState } from "react";
import AgGrid from "../../Components/AgGrid";
import CreateButton from "../../Components/CreateButton";
import Header from "../../Components/Header";
import api from "../../utils/api";
import Loader from "../../Components/Loader";
import { set } from "react-hook-form";

const Noticias = () => {
    const apiUrl = "http://127.0.0.1:8000/api/noticias";
    const colDefs = [{ field: "id" }, { field: "titulo" }, { field: "contenido" }, { field: "nombre_categoria", headerName: "Categoria" }, { field: "nombre_autor", headerName: "Autor" }];

    const defaultColDef = {
        flex: 1,
    };
    const [noticias, setNoticias] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await api(apiUrl, { method: "GET" });
            if (!response.error) {
                setNoticias(response.result);
            } else {
                setError(response.error);
            }
        };
        setTimeout(() => {
            fetchData();
        }, 500);
    }, []);

    if (error) return <div className="text-center p-4 text-red-500">{error}</div>;
    return (
        <>
            <Header seccion={"Noticias"} />
            <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex flex-col gap-4">
                {noticias.length === 0 ? (
                    <Loader />
                ) : (
                    <>
                        <CreateButton route={"/noticias/create"} />
                        <AgGrid rowData={noticias} colDefs={colDefs} defaultColDef={defaultColDef} />
                    </>
                )}
            </main>
        </>
    );
};
export default Noticias;
