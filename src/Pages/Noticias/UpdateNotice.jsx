import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import Header from "../../Components/Header";
import api from "../../utils/api";
import { toast } from "react-toastify";

const UpdateNotice = () => {
    const { id } = useParams();
    const navigator = useNavigate();
    const apiUrl = `/api/noticias/${id}`;
    const apiUrlAutores = "/api/autores";
    const apiUrlCategorias = "/api/categorias";
    const [autores, setAutores] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch authors
                const autoresResponse = await fetch(apiUrlAutores);
                if (autoresResponse.ok) {
                    const result = await autoresResponse.json();
                    setAutores(result.result);
                }

                // Fetch categories
                const categoriasResponse = await fetch(apiUrlCategorias);
                if (categoriasResponse.ok) {
                    const result = await categoriasResponse.json();
                    setCategorias(result.result);
                }
                // Fetch notice data
                const noticeResponse = await api(apiUrl, { method: "GET" });
                if (!noticeResponse.error) {
                    setValue("titulo", noticeResponse.result.titulo);
                    setValue("contenido", noticeResponse.result.contenido);
                    setValue("id_autor", noticeResponse.result.id_autor);
                    setValue("id_categoria", noticeResponse.result.id_categoria);
                } else {
                    toast.error(noticeResponse.error, {
                        position: "top-center",
                    });
                    navigator("/");
                    return;
                }
            } catch (error) {
                console.log(error);
                toast.error("Error al cargar los datos", {
                    position: "top-center",
                });
            }
        };
        fetchData();
    }, [id]);

    const onSubmit = async (data) => {
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };
        const response = await api(apiUrl, options);
        if (!response.error) {
            navigator("/");
            toast.success("Noticia actualizada con éxito", {
                position: "top-center",
            });
        } else {
            toast.error(response.error, {
                position: "top-center",
            });
        }
    };

    return (
        <>
            <Header seccion={"Actualizar noticia"} />
            <div className="max-w-2xl mx-auto p-6">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="titulo">
                            Título de la noticia
                        </label>
                        <input
                            {...register("titulo", {
                                required: "Titulo es obligatorio",
                            })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Título de la noticia"
                        />
                        {errors.titulo && <p className="text-red-500 text-xs italic mt-2">{errors.titulo.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id_autor">
                            Selecciona un autor
                        </label>
                        <select {...register("id_autor", { required: "Autor es obligatorio" })} className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <option value="">Selecciona</option>
                            {autores.map((autor) => (
                                <option key={autor.id} value={autor.id}>
                                    {autor.nombre}
                                </option>
                            ))}
                        </select>
                        {errors.id_autor && <p className="text-red-500 text-xs italic mt-2">{errors.id_autor.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id_categoria">
                            Selecciona una categoria
                        </label>
                        <select {...register("id_categoria", { required: "Categoria es obligatorio" })} className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <option value="">Selecciona</option>
                            {categorias.map((categoria) => (
                                <option key={categoria.id} value={categoria.id}>
                                    {categoria.nombre}
                                </option>
                            ))}
                        </select>
                        {errors.id_categoria && <p className="text-red-500 text-xs italic mt-2">{errors.id_categoria.message}</p>}
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contenido">
                            Contenido de la noticia
                        </label>
                        <textarea {...register("contenido", { required: "Contenido es obligatorio" })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32" placeholder="Contenido de la noticia" />
                        {errors.contenido && <p className="text-red-500 text-xs italic mt-2">{errors.contenido.message}</p>}
                    </div>

                    <div className="flex items-center justify-end">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Update Notice
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default UpdateNotice;
