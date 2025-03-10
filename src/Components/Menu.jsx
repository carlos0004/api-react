import { Link, useLocation } from "react-router";

const Menu = ({ mobile = false }) => {
    const location = useLocation();

    const getLinkClass = (paths) => {
        const isActive = paths.includes(location.pathname);
        return mobile
            ? `block rounded-md px-3 py-2 text-base font-medium ${isActive ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
            }`
            : `rounded-md px-3 py-2 text-sm font-medium ${isActive ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"
            } active:scale-95`;
    };

    return (
        <div className={mobile ? "space-y-1 px-2 pt-2 pb-3 sm:px-3" : "ml-10 flex items-baseline space-x-4"}>
            <Link to="/" className={getLinkClass(["/", "/noticias/create"])}>
                Noticias
            </Link>
            <Link to="/categorias" className={getLinkClass(["/categorias", "/categorias/create"])}>
                Categorías
            </Link>
            <Link to="/autores" className={getLinkClass(["/autores", "/autores/create"])}>
                Autores
            </Link>
        </div>
    );
};

export default Menu;
