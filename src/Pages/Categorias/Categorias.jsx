import AgGrid from "../../Components/AgGrid";
import Header from "../../Components/Header";
import useFetchData from "../../utils/useFetchData";
import CreateButton from "../../Components/CreateButton";

const Categorias = () => {
    const apiUrl = "http://127.0.0.1:8000/api/categorias";
    const { data: rowData, error } = useFetchData(apiUrl);

    const colDefs = [{ field: "id" }, { field: "nombre" }];

    const defaultColDef = {
        flex: 1,
    };
    if (error) return <div className="text-center p-4 text-red-500">{error}</div>;

    return (
        <>
            <Header seccion={"Categorias"} />
            <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex flex-col gap-4">
                <CreateButton route={"/categorias/create"} />
                <AgGrid rowData={rowData} colDefs={colDefs} defaultColDef={defaultColDef} />
            </main>
        </>
    );
};
export default Categorias;
