import { useState, useEffect } from "react"

const useFetchPizzas = (url) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((result) => setData(result))
    }, [url])


    return data
}

export default useFetchPizzas