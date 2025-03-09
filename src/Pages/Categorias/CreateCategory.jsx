import { useNavigate } from "react-router";
import Form from "../../Components/Form";
import Header from "../../Components/Header";
import create from "../../utils/create";

const CreateCategory = () => {
    const apiUrl = "http://127.0.0.1:8000/api/categorias";
    const navigate = useNavigate();

    const handleCreate = async (formData) => {
        const response = await create(apiUrl, formData);
        console.log(response);
        if (response) navigate("/categorias");
    };
    return (
        <>
            <Header seccion={"Crea una categoria"} />
            <Form fields={[{ name: "nombre", label: "Nombre de la Categoría" }]} onSubmit={handleCreate} />
        </>
    );
};

export default CreateCategory;
