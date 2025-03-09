import { useState } from "react";

const Form = ({ fields, onSubmit }) => {
    const [formData, setFormData] = useState({});
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        onSubmit(formData);
    };
    return (
        <main className="mx-auto max-w-xl px-4 py-6 sm:px-6 lg:px-8">
            <form className="bg-white p-6 rounded-lg shadow-md w-full" onSubmit={handleSubmit}>
                {fields.map((field) => (
                    <div key={field.name} className="mb-4">
                        <label className="block text-gray-700">{field.label}</label>
                        <input type={field.type || "text"} name={field.name} className="w-full p-2 border rounded" onChange={handleChange} required />
                    </div>
                ))}
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Guardar
                </button>
            </form>
        </main>
    );
};

export default Form;
