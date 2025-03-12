import { useNavigate } from "react-router";
import Form from "../../Components/Form";
import Header from "../../Components/Header";
import api from "../../utils/api";

const CreateAutor = () => {
    const apiUrl = "http://127.0.0.1:8000/api/autores";
    const navigate = useNavigate();
    const handleCreate = async (formData) => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        };
        const response = await api(apiUrl, options);
        if (!response.error) navigate("/autores");
    };

    return (
        <>
            <Header seccion={"Crea un autor"} />
            <Form fields={[{ name: "nombre", label: "Nombre del Autor" }]} onSubmit={handleCreate} />
        </>
    );
};

export default CreateAutor;
