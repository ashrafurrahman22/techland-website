import React from 'react';
import usePurchase from '../../../Hooks/usePurchase';

const SingleOrder = ({purchase}) => {

    const [purchases, setPurchases] = usePurchase();

    const {productName, name, email, phone, order} = purchase;
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
        <div>
            <div class="card bg-neutral text-neutral-content">
  <div class="card-body items-center text-center">
    <h2 class="card-title">{productName}</h2>
    <h2 class="card-title">Order Quantity:{order}</h2>
    <p>Name: {name}</p>
    <p>email: {email}</p>
    <p>Phone: {phone}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Payment</button>
      <button onClick={()=>handleDelete(purchase._id)} class="btn btn-primary">Cencel</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleOrder;