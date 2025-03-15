import { Link } from "react-router";

const UpdateButton = ({ route }) => {
    return (
        <Link to={route} className="rounded-md px-1 bg-green-500 hover:bg-green-800 text-white shadow-md">
            Actualizar
        </Link>
    );
};

export default UpdateButton;
