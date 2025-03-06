import { useState } from "react";

const Form = ({ fields }) => {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <form className="bg-white p-6 rounded-lg shadow-md w-full">
            {fields.map((field) => (
                <div key={field.name} className="mb-4">
                    <label className="block text-gray-700">{field.label}</label>
                    <input type={field.type || "text"} name={field.name} onChange={handleChange} className="w-full p-2 border rounded" required />
                </div>
            ))}
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Guardar
            </button>
        </form>
    );
};

export default Form;
