import AgGrid from "../../Components/AgGrid";
import Header from "../../Components/Header";
import useFetchData from "../../hooks/useFetchData";

const Autores = () => {
    const apiUrl = "http://127.0.0.1:8000/api/autores";
    const { data: rowData, error } = useFetchData(apiUrl);
    const colDefs = [{ field: "id" }, { field: "nombre" }];

    const defaultColDef = {
        flex: 1,
    };

    if (error) return <div className="text-center p-4 text-red-500">{error}</div>;

    return (
        <>
            <Header seccion={"Autores"} />
            <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <AgGrid rowData={rowData} colDefs={colDefs} defaultColDef={defaultColDef} />
            </main>
        </>
    );
};

export default Autores;
