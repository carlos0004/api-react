import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import Header from "../../Components/Header";
import api from "../../utils/api";
import { toast } from "react-toastify";

const CreateCategory = () => {
    const apiUrl = "/api/categorias";
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };
        const response = await api(apiUrl, options);
        if (!response.error) {
            navigate("/categorias");
            toast.success("Categoria creada con exito", {
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
            <Header seccion={"Crea una categoria"} />
            <div className="max-w-2xl mx-auto p-6">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                            Nombre de la Categoría
                        </label>
                        <input
                            {...register("nombre", {
                                required: "Nombre de la categoría es requerido",
                                maxLength: {
                                    value: 50,
                                    message: "El nombre de la categoria no puede ser mayor a 50 caracteres",
                                },
                            })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Nombre de la Categoría"
                        />
                        {errors.nombre && <p className="text-red-500 text-xs italic mt-2">{errors.nombre.message}</p>}
                    </div>

                    <div className="flex items-center justify-end">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Create Category
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default CreateCategory;
