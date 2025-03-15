import { toast } from "react-toastify";
import api from "../utils/api";

const DeleteButton = (params) => {
    const { apiUrl, setData } = params;

    const deleteNoticia = async () => {
        const id = params.data.id;
        const url = apiUrl + "/" + id;

        const response = await api(url, { method: "DELETE" });

        if (!response.error) {
            setData((prevData) => prevData.filter((data) => data.id !== id));

            toast.success(response.message, {
                position: "top-center",
            });
        } else {
            toast.error(response.message, {
                position: "top-center",
            });
        }
    };

    return (
        <>
            <button className="rounded-md px-2 bg-red-700 hover:bg-red-800 text-white shadow-md" onClick={deleteNoticia}>
                Eliminar
            </button>
        </>
    );
};
export default DeleteButton;
