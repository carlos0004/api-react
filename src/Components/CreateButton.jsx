import { Link } from "react-router";

const CreateButton = ({ route }) => {
    return (
        <>
            <div className="w-full flex justify-end">
                <Link to={route} className="rounded-md px-4 py-2 bg-blue-500 hover:bg-blue-800 text-white shadow-md">
                    Crear
                </Link>
            </div>
        </>
    );
};

export default CreateButton;
