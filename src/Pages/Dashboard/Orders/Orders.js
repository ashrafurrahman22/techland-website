import React from 'react';
import usePurchase from '../../../Hooks/usePurchase';
import SingleOrder from './SingleOrder';

const Orders = () => {

    const [purchases] = usePurchase();

    return (
        <div style={{fontFamily:"inter"}}>
            <h2 className='uppercase text-3xl text-center font-bold my-5'>Orders</h2>
            <hr />

            <div class="overflow-x-auto my-4">
  <table class="table table-zebra text-black w-full">
    {/* <!-- head --> */}
    <thead className='text-center'>
      <tr>
        <th>Product</th>
        <th>Name</th>
        <th>Phone</th>
        <th>Order Quantity</th>
        <th>Payment</th>
        <th>Cencel</th>
      </tr>
    </thead>
    <tbody className='text-center'>
    {
                    purchases.map(purchase => 
                    <SingleOrder
                    key={purchase._id}
                    purchase = {purchase}
                    ></SingleOrder>
                        )
                }
    </tbody>
  </table>
</div>


            {/* <div className='grid lg:grid-cols-3 mt-6 gap-6'>
                {
                    purchases.map(purchase => 
                    <SingleOrder
                    key={purchase._id}
                    purchase = {purchase}
                    ></SingleOrder>
                        )
                }
            </div> */}
        </div>
    );
};

export default Orders;