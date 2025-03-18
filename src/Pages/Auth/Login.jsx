import { set, useForm } from "react-hook-form";
import Header from "../../Components/Header";
import api from "../../utils/api";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

const Login = () => {
    const navigate = useNavigate();
    const { setToken } = useContext(AppContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const response = await api("api/login", {
            method: "POST",
            body: JSON.stringify(data),
        });
        if (!response.error) {
            localStorage.setItem("token", response.token);
            setToken(response.token);
            navigate("/");
        } else {
            toast.error(response.error, {
                position: "top-center",
            });
        }
    };
    return (
        <>
            <Header seccion={"Iniciar sesión"} />
            <div className="max-w-2xl mx-auto p-6">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                            Dirección de correo
                        </label>
                        <input
                            {...register("email", {
                                required: "Introduce una dirección de correo",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Introduce una dirección de correo válida",
                                },
                            })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="nombre"
                            type="text"
                            placeholder="example@example.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs italic mt-2">{errors.email.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Contraseña
                        </label>
                        <input {...register("password", { required: "Introduce la contraseña" })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nombre" type="password" placeholder="12345Ab_" />
                        {errors.password && <p className="text-red-500 text-xs italic mt-2">{errors.password.message}</p>}
                    </div>
                    <button type="submit" className=" w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Iniciar sesión
                    </button>
                </form>
            </div>
        </>
    );
};
export default Login;
