import React from 'react';
import usePurchase from '../../../Hooks/usePurchase';
import SingleOrder from './SingleOrder';

const Orders = () => {

    const [purchases] = usePurchase();

    return (
        <div style={{fontFamily:"inter"}}>
            <h2 className='uppercase text-3xl text-center font-bold my-5'>Orders</h2>
            <hr />
            <div className='grid lg:grid-cols-3 gap-6'>
                {
                    purchases.map(purchase => 
                    <SingleOrder
                    key={purchase._id}
                    purchase = {purchase}
                    ></SingleOrder>
                        )
                }
            </div>
        </div>
    );
};

export default Orders;