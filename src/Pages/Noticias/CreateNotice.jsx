import { useEffect, useState } from "react";
import Form from "../../Components/Form";
import Header from "../../Components/Header";
import create from "../../utils/api";
import { useNavigate } from "react-router";
import api from "../../utils/api";

const CreateNotice = () => {
    const navigator = useNavigate();
    const apiUrl = "http://127.0.0.1:8000/api/noticias";
    const apiUrlAutores = "http://127.0.0.1:8000/api/autores";
    const apiUrlCategorias = "http://127.0.0.1:8000/api/categorias";
    const [autores, setAutores] = useState([]);
    const [categorias, setCategorias] = useState([]);
    useEffect(() => {
        const fetchAutores = async () => {
            try {
                const response = await fetch(apiUrlAutores);
                if (response.ok) {
                    const result = await response.json();
                    setAutores(result.result);
                }
            } catch (error) {
                console.log(error)

            }
        }
        const fetchCategorias = async () => {
            try {
                const response = await fetch(apiUrlCategorias);
                if (response.ok) {
                    const result = await response.json();
                    setCategorias(result.result);
                }
            } catch (error) {
                console.log(error)

            }
        }
        fetchAutores();
        fetchCategorias();
    }, [])

    const handleCreate = async (formData) => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        };
        const response = await api(apiUrl, options);
        if (!response.error) navigator("/");

    };

    return (
        <>
            <Header seccion={"Crea una noticia"} />
            <Form
                fields={[
                    { name: "titulo", label: "Título de la noticia" },
                    { name: "id_autor", label: "Selecciona un autor", type: "select", options: autores },
                    { name: "id_categoria", label: "Selecciona una categoria", type: "select", options: categorias },
                    { name: "contenido", label: "Contenido de la noticia", type: "textarea" },
                ]}
                onSubmit={handleCreate} />
        </>
    );
};

export default CreateNotice;
