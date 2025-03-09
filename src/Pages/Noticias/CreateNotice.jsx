import Form from "../../Components/Form";
import Header from "../../Components/Header";

const CreateNotice = () => {
    const handleCreate = () => {};

    return (
        <>
            <Header seccion={"Crea una noticia"} />
            <Form fields={[{ name: "nombre", label: "Nombre de la Categoría" }]} onSubmit={handleCreate} />
        </>
    );
};

export default CreateNotice;
