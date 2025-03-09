import { useNavigate } from "react-router";
import Form from "../../Components/Form";
import Header from "../../Components/Header";
import create from "../../utils/create";

const CreateAutor = () => {
    const apiUrl = "http://127.0.0.1:8000/api/autores";
    const navigate = useNavigate();
    const handleCreate = async (formData) => {
        console.log(formData);
        const response = await create(apiUrl, formData);
        console.log(response);
        if (response) navigate("/autores");
    };

    return (
        <>
            <Header seccion={"Crea un autor"} />
            <Form fields={[{ name: "nombre", label: "Nombre del Autor" }]} onSubmit={handleCreate} />
        </>
    );
};

export default CreateAutor;
