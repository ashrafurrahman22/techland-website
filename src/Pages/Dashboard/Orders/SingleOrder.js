import React from 'react';
import usePurchase from '../../../Hooks/usePurchase';

const SingleOrder = ({purchase}) => {

    const [purchases, setPurchases] = usePurchase();

    const {productName, name, phone,  order} = purchase;
    // console.log(purchase)

    const handleDelete = id =>{
        const procede = window.confirm('Are You Sure?');
        if(procede){
          const url = `https://ancient-ocean-57727.herokuapp.com/purchase/${id}`
          fetch(url, {
            method : "DELETE"
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            const remaining = purchases.filter(purchase => purchase._id !== id);
            setPurchases(remaining);
            console.log(remaining);
          })
        }
      }

    return (

    <tr>
        <td>{productName}</td>
        <td>{name}</td>
        <td>{phone}</td>
        <td>{order}</td>
        <td><button className='btn'>Payment</button></td>
        <td><button onClick={()=>handleDelete(purchase._id)} className='btn'>Cencel</button></td>
      </tr>
    );
};

export default SingleOrder;