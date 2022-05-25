import { useEffect, useState } from "react";

const usePurchase = () =>{
    const [purchases, setPurchases] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/purchase')
        .then(res => res.json())
        .then(data => setPurchases(data))
    } , [purchases])
    return [purchases, setPurchases];
}

export default usePurchase;