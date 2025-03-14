import { useEffect, useState } from "react";
import AgGrid from "../../Components/AgGrid";
import CreateButton from "../../Components/CreateButton";
import Header from "../../Components/Header";
import api from "../../utils/api";
import Loader from "../../Components/Loader";

const Autores = () => {
    const apiUrl = "http://127.0.0.1:8000/api/autores";
    const colDefs = [{ field: "id" }, { field: "nombre" }];
    const defaultColDef = {
        flex: 1,
    };
    const [autores, setAutores] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await api(apiUrl, { method: "GET" });
            if (!response.error) {
                setAutores(response.result);
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
            <Header seccion={"Autores"} />
            <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex flex-col gap-4">
                {autores.length === 0 ? (
                    <Loader />
                ) : (
                    <>
                        <CreateButton route={"/autores/create"} />
                        <AgGrid rowData={autores} colDefs={colDefs} defaultColDef={defaultColDef} />
                    </>
                )}
            </main>
        </>
    );
};

export default Autores;
