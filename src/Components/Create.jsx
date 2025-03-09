import Form from "./Form";
import Header from "./Header";

const Crear = () => {
    return (
        <>
            <Header seccion={"Crear -> hay que globalizar"} />
            <Form fields={[{ name: "nombre", label: "Nombre de la Categoría" }]} />
        </>
    );
};

export default Crear;
