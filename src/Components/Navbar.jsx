import { Link } from "react-router";
import { useContext, useState } from "react";
import UserMenu from "./UserMenu";
import Menu from "./Menu";
import { AppContext } from "../Context/AppContext";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { user } = useContext(AppContext);

    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <Link to="/" className="shrink-0">
                            <img className="size-8" src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Logo" />
                        </Link>
                        <div className="hidden md:block">
                            <Menu />
                        </div>
                    </div>

                    <div className="hidden md:block">{user && <div className="text-white">Hola, {user.name} 😊</div>}</div>

                    {/* Botón de menú móvil */}
                    <button type="button" className="md:hidden bg-gray-800 p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <span className="sr-only">Abrir menú</span>
                        {isMobileMenuOpen ? (
                            <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6h18M3 12h18m-18 6h18" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Menú móvil */}
            {isMobileMenuOpen && (
                <div className="md:hidden">
                    <Menu mobile />
                </div>
            )}
        </nav>
    );
};

export default Navbar;
