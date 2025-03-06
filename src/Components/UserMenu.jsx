import { useState } from "react";

const UserMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="relative">

			{/* Botón del perfil */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="ml-4 flex items-center max-w-xs rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
			>
				<img className="size-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Perfil" />
			</button>

			{/* Menú desplegable */}
			{isOpen && (
				<div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
					<a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
						Perfil
					</a>
					<a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
						Configuración
					</a>
					<a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
						Cerrar sesión
					</a>
				</div>
			)}
		</div>
	);
};

export default UserMenu;
