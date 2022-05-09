import {useEffect, useState} from "react";

function useFetchData(url, opts) {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        console.log('I do request');
        try {
            const response = await fetch(url, opts);
            if (response.ok) {
                const data = await response.json();
                setData(data)
            } else {
                setData([]);
            }
        } catch (e) {
            console.log(e.message);
            setData([]);
        }
    }

    useEffect(() => {
        fetchData();
    }, [url, opts]);

    return [{data}]
}

export default useFetchData;
