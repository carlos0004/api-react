const create = async (url, data) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            console.log(response);
            throw new Error(`Error al guardar (Código: ${response.status})`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error en la petición:", error);
        throw error;
    }
};
export default create;
