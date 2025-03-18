import { useNavigate, useParams } from "react-router";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Header from "../../Components/Header";
import api from "../../utils/api";
import { toast } from "react-toastify";

const UpdateAuthor = () => {
    const { id } = useParams();
    const apiUrl = `/api/autores/${id}`;
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();

    useEffect(() => {
        const fetchAuthor = async () => {
            const response = await api(apiUrl, { method: "GET" });
            if (!response.error) {
                setValue("nombre", response.result.nombre);
            } else {
                toast.error(response.error, {
                    position: "top-center",
                });
                navigate("/autores");
            }
        };
        fetchAuthor();
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
            navigate("/autores");
            toast.success("Autor actualizado con éxito", {
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
            <Header seccion={"Actualizar autor"} />
            <div className="max-w-2xl mx-auto p-6">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                            Nombre del Autor
                        </label>
                        <input {...register("nombre", { required: "El nombre del autor es obligatorio" })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Nombre del Autor" />
                        {errors.nombre && <p className="text-red-500 text-xs italic mt-2">{errors.nombre.message}</p>}
                    </div>
                    <div className="flex items-center justify-end">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Update Author
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default UpdateAuthor;
