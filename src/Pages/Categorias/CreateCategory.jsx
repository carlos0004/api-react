import { useNavigate } from "react-router";
import Form from "../../Components/Form";
import Header from "../../Components/Header";
import api from "../../utils/api";
import { useEffect } from "react";

const CreateCategory = () => {

    const apiUrl = "http://127.0.0.1:8000/api/categorias";
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
        if (!response.error) navigate("/categorias");
    };
    return (
        <>
            <Header seccion={"Crea una categoria"} />
            <Form fields={[{ name: "nombre", label: "Nombre de la Categoría" }]} onSubmit={handleCreate} />
        </>
    );
};

export default CreateCategory;
