import AgGrid from "../Components/AgGrid";
import Header from "../Components/Header";
import useFetchData from "../hooks/useFetchData";

const Noticias = () => {
  const apiUrl = 'http://127.0.0.1:8000/api/noticias';
  const { data: rowData, error } = useFetchData(apiUrl);
  const colDefs = [
    { field: "id" },
    { field: 'titulo' },
    { field: 'contenido' },
    { field: 'nombre_categoria', headerName: "Categoria" },
    { field: 'nombre_autor', headerName: "Autor" },
  ];

  const defaultColDef = {
    flex: 1,
  };

  if (error) return <div className="text-center p-4 text-red-500">{error}</div>;
  return (
    <>
      <Header seccion={"Noticias"} />
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <AgGrid rowData={rowData} colDefs={colDefs} defaultColDef={defaultColDef} />
      </main>
    </>
  )
};
export default Noticias;
