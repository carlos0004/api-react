const api = async (apiUrl, options) => {
    try {
        const response = await fetch(apiUrl, options);
        const result = await response.json();

        if (!response.ok) {
            return { error: result.message };
        }
        console.log(result);

        return result;
    } catch (err) {
        console.error(err.message);
    }
};

export default api;
