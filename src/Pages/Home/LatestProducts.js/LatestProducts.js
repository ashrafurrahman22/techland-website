import React from 'react';

const LatestProducts = () => {
    return (
        <div className='my-10'>
            <h2 className='text-3xl my-5 font-bold text-center uppercase'>Latest Products</h2>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-8'>
                {/* product div */}
                <div>
                <div class="card card-compact bg-base-100 shadow-xl">
  <figure><img src="https://www.startech.com.bd/image/cache/catalog/hdd/toshiba/s300-pro/s300-pro-01-500x500.jpg" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Toshiba S300 Pro 6TB 7200rpm 3.5" Surveillance Hard Drive</h2>
    <p>The Toshiba S300 Pro 6TB 7200rpm 3.5" Surveillance Hard Drive has been designed to satisfy your special needs and is constructed for 24/7 reliability and performance. The S300 Pro has been designed and tested to support up to 64 excessive decision cameras, allowing bendy scalability for your protection camera structures.</p>
    <h4 class="card-title">Price : $300</h4>
  </div>
</div>
                </div>
                <div>
                <div class="card card-compact bg-base-100 shadow-xl">
  <figure><img src="https://www.startech.com.bd/image/cache/catalog/water-liquid-cooling/ekwb/ek-quantum/ek-quantum-torque-hdc-01-500x500.jpg" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">
EKWB EK-Quantum Torque HDC 12 Black</h2>
    <p>EKWB EK-Quantum Torque HDC 12 Black are EK's new minimalistic 12mm hard-tube compression fittings that's are designed for use with solid tubing such as Acrylic and PETG. It is featured with a non-intrusive, yet striking look, and with NO added branding at all. The locking ring prevents solid tube to be pulled out of the fitting by compressing the rubber gasket underneath the ring. </p>
    <h4 class="card-title">Price : $230</h4>
  </div>
</div>
                </div>
                <div>
                <div class="card card-compact  bg-base-100 shadow-xl">
  <figure><img src="https://www.startech.com.bd/image/cache/catalog/processor/AMD/ryzen-3-pro-4350g/-ryzen-3-pro-4350g-01-500x500.jpg" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">AMD Ryzen 3 PRO 4350G Processor (Tray)</h2>
    <p>The AMD Ryzen 3 PRO 4350G is a quad-core CPU based on Zen architecture. Whether for work, play, or enjoyment, this AMD Ryzen desktop CPU provides powerful multitasking and multimedia performance at an affordable price. The AMD Ryzen CPU with Radeon Vega integrated graphics is the ideal combo for everyday computing. </p>
    <h4 class="card-title">Price : $270</h4>
  </div>
</div>
                </div>
            </div>
        </div>
    );
};

export default LatestProducts;