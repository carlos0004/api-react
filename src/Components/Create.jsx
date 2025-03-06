import Form from "./Form";
import Header from "./Header";

const Crear = () => {
    return (
        <>
            <Header seccion={"Crear -> hay que globalizar"} />
            <main className="mx-auto max-w-xl px-4 py-6 sm:px-6 lg:px-8">
                <Form fields={[{ name: "nombre", label: "Nombre de la Categoría" }]} />
            </main>
        </>
    );
};

export default Crear;
