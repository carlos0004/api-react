import { useEffect, useState } from "react";

const useFetchData = (apiUrl) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl);
                const result = await response.json();

                setData(result.result);
            } catch (err) {
                console.error(err.message);
                setError(err.message);
            }
        };

        fetchData();
    }, [apiUrl]);

    return { data, error };
};

export default useFetchData;
