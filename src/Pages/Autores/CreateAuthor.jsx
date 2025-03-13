import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import Header from "../../Components/Header";
import api from "../../utils/api";

const CreateAutor = () => {
    const apiUrl = "http://127.0.0.1:8000/api/autores";
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };
        const response = await api(apiUrl, options);
        if (!response.error) navigate("/autores");
    };

    return (
        <>
            <Header seccion={"Crea un autor"} />
            <div className="max-w-2xl mx-auto p-6">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                            Nombre del Autor
                        </label>
                        <input
                            {...register("nombre", { required: "El nombre del autor es obligatorio" })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="nombre"
                            type="text"
                            placeholder="Nombre del Autor"
                        />
                        {errors.nombre && (
                            <p className="text-red-500 text-xs italic mt-2">{errors.nombre.message}</p>
                        )}
                    </div>
                    <div className="flex items-center justify-end">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Crear autor
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default CreateAutor;