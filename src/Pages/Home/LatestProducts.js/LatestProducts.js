import React from 'react';

const LatestProducts = () => {
    return (
        <div style={{fontFamily:"aleo"}} className='my-10 text-black'>
            <h3 className='text-3xl my-5 text-white font-semibold text-center uppercase'>Latest Phones</h3>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-8'>
                {/* product div */}
                <div>
                <div class="card card-compact bg-base-100 shadow-xl">
  <figure><img src="https://www.online-sciences.com/wp-content/uploads/2021/09/Apple-iPhone-13-Pro-Max-45.webp" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Iphone 13 Pro Max</h2>
    <p>The iPhone 13 Pro and iPhone 13 Pro Max are smartphones designed, developed, and marketed by Apple Inc. They are the flagship smartphones in the fifteenth generation of the iPhone.</p>
    <h3 class="card-title font-semibold">Price : $420</h3>
    <button className='btn'>Buy Now</button>
  </div>
</div>
                </div>
                <div>
                <div class="card card-compact bg-base-100 shadow-xl">
  <figure><img src="https://i0.wp.com/gegumall.com/wp-content/uploads/2022/01/latest-samsung-phones-with-price-and-specifications.jpg?fit=1920%2C1080&ssl=1" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Samsung M321</h2>
    <p>Samsung Galaxy M13 is a mid-range Android smartphone manufactured by Samsung Electronics as a part of its Galaxy M series. This phone was announced on 27 May 2022.</p>
    <h4 class="card-title">Price : $390</h4>
    <button className='btn'>Buy Now</button>
  </div>
</div>
                </div>
                <div>
                <div class="card card-compact  bg-base-100 shadow-xl">
  <figure><img src="https://images.techadvisor.com/cmsdata/slideshow/3797756/oneplus_9_pro-06.jpg" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">OnePlus 32A 5G</h2>
    <p>The OnePlus Nord 25 is an Android-based smartphone manufactured by OnePlus, unveiled on 22 July 2021. It succeeds the original Nord, and is the sixth device in the Nord series.</p>
    <h4 class="card-title">Price : $270</h4>
    <button className='btn'>Buy Now</button>
  </div>
</div>
                </div>
            </div>
        </div>
    );
};

export default LatestProducts;