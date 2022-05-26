import { useEffect, useState } from "react";

const useProducts = () =>{
    const [products, setProducts] = useState([]);

    useEffect( ()=>{
        fetch('https://ancient-ocean-57727.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setProducts(data))
    } , [products])
    return [products, setProducts];
}

export default useProducts;