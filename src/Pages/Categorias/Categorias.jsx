import AgGrid from "../../Components/AgGrid";
import Header from "../../Components/Header";
import CreateButton from "../../Components/CreateButton";
import api from "../../utils/api";
import { useEffect, useState } from "react";
import Loader from "../../Components/Loader";
import DeleteButton from "../../Components/DeleteButton";
import UpdateButton from "../../Components/UpdateButton";

const Categorias = () => {
    const apiUrl = "http://127.0.0.1:8000/api/categorias";
    const [categorias, setCategorias] = useState([]);
    const [error, setError] = useState(null);
    const colDefs = [
        { field: "id" },
        { field: "nombre" },
        {
            field: "Acciones",
            cellRenderer: (params) => (
                <div className="flex gap-2">
                    <UpdateButton route={`/categorias/update/${params.data.id}`} />
                    <DeleteButton {...params} apiUrl={apiUrl} setData={setCategorias} />
                </div>
            ),
        },
    ];
    const defaultColDef = {
        flex: 1,
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await api(apiUrl, { method: "GET" });
            if (!response.error) {
                setCategorias(response.result);
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
            <Header seccion={"Categorias"} />
            <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex flex-col gap-4">
                {categorias.length === 0 ? (
                    <Loader />
                ) : (
                    <>
                        <CreateButton route={"/categorias/create"} />
                        <AgGrid rowData={categorias} colDefs={colDefs} defaultColDef={defaultColDef} />
                    </>
                )}
            </main>
        </>
    );
};
export default Categorias;
class Result {
    success;
    data;
    error;

    constructor(success, data, error) {
        this.success = success;
        this.data = data;
        this.error = error;
    }
}
