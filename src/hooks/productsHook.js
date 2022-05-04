import { useEffect, useState } from "react"

const productsHook = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch('')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return [products, setProducts]
};

export default productsHook;