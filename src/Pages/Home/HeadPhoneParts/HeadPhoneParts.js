import React from 'react';

const HeadPhoneParts = () => {
    return (
        <div className='my-8'>
            <h2 className='text-3xl my-5 font-bold text-center uppercase'>HeadPhone Parts</h2>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-8'>
                {/* product div */}
                <div>
                <div class="card card-compact bg-base-100 shadow-xl p-3">
  <figure><img src="https://www.techlandbd.com/image/cache/catalog/Headphone-Headset/Fantech/Ear%20Cup/fantech-ear-cup-replacement-kits-1.jpg-550x550.jpg" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">FANTECH Ear Cup Replacement Kits</h2>
    <h4 class="text-center text-2xl font-semibold">Price : $24</h4>
  </div>
</div>
                </div>
                <div>
                <div class="card card-compact bg-base-100 shadow-xl p-3">
  <figure><img src="https://www.techlandbd.com/image/cache/catalog/Headphone-Headset/Fantech/AC5001/AC5001.jpg-550x550.jpg" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">
    Fantech AC5001 MEOW Kitty Ears Fot Headset</h2>
<h4 class="text-center text-2xl font-semibold">Price : $30</h4>
  </div>
</div>
                </div>
                <div>
                <div class="card card-compact  bg-base-100 shadow-xl">
  <figure><img src="https://ae01.alicdn.com/kf/HTB103sPavLsK1Rjy0Fbq6xSEXXay/Professional-Headband-Headphone-Hook-Parts-Head-Beam-Replacement-Headphone-Parts-for-Audio-Technica-for-Shure.jpg_Q90.jpg_.webp" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">DD-4.5-300 toshiba Headphone Headband</h2>
    <h4 class="card-title">Price : $73</h4>
  </div>
</div>
                </div>
            </div>
        </div>
    );
};

export default HeadPhoneParts;