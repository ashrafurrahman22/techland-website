import { useEffect, useState } from "react";

const usePurchase = () =>{
    const [purchases, setPurchases] = useState([]);

    useEffect( ()=>{
        fetch('https://ancient-ocean-57727.herokuapp.com/purchase')
        .then(res => res.json())
        .then(data => setPurchases(data))
    } , [purchases])
    return [purchases, setPurchases];
}

export default usePurchase;