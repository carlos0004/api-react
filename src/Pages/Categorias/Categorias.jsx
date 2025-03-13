import AgGrid from "../../Components/AgGrid";
import Header from "../../Components/Header";
import CreateButton from "../../Components/CreateButton";
import api from "../../utils/api";
import { useEffect, useState } from "react";

const Categorias = () => {

    const apiUrl = "http://127.0.0.1:8000/api/categorias";
    const colDefs = [{ field: "id" }, { field: "nombre" }];
    const defaultColDef = {
        flex: 1,
    };
    const [categorias, setCategorias] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {

            const response = await api(apiUrl, { method: "GET" });
            if (!response.error) {
                setCategorias(response.result);
            } else {
                setError(response.error)
            }
        }
        fetchData();
    }, []);

    if (error) return <div className="text-center p-4 text-red-500">{error}</div>;

    return (
        <>
            <Header seccion={"Categorias"} />
            <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex flex-col gap-4">
                <CreateButton route={"/categorias/create"} />
                <AgGrid rowData={categorias} colDefs={colDefs} defaultColDef={defaultColDef} />
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