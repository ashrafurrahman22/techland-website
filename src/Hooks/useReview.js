import { useEffect, useState } from "react";

const useReview = () =>{
    const [reviews, setReviews] = useState([]);

    useEffect( ()=>{
        fetch('https://ancient-ocean-57727.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    } , [reviews])
    return [reviews, setReviews];
}

export default useReview;