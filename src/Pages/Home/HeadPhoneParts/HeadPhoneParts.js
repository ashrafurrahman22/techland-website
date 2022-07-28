import React from 'react';

const HeadPhoneParts = () => {
    return (
        <div style={{fontFamily:"aleo", letterSpacing:"2px"}} className='my-8 text-black'>
            <h2 className='text-3xl my-5 font-semibold text-white text-center uppercase'>Popular HeadPhones</h2>
            <div className='lg:grid lg:grid-cols-4 sm:grid-cols-1 gap-8'>
                {/* product div */}
                <div>
                <div class="card card-compact bg-base-100 shadow-xl">
  <figure><img src="https://i.pinimg.com/originals/54/bf/46/54bf46388f9aa8f01b105d35824bba45.jpg" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Hyper X Cloud</h2>
    <p class="card-title font-medium">Price : $56</p>
    <button className='btn'>Buy Now</button>
  </div>
</div>
                </div>
                <div>
                <div class="card card-compact bg-base-100 shadow-xl">
  <figure><img src="https://assets3.razerzone.com/5jCMOYhZ07MPW5mMGeufAB709H8=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhc9%2Fh02%2F9081231179806%2Frazer-kraken-x-gallery-4.jpg" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Razer Kraken X</h2>
    <p class="card-title font-medium">Price : $42</p>
    <button className='btn'>Buy Now</button>
  </div>
</div>
                </div>
                <div>
                <div class="card card-compact bg-base-100 shadow-xl">
  <figure><img src="https://images.unsplash.com/photo-1599669454699-248893623440?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhlYWRwaG9uZXN8ZW58MHx8MHx8&w=1000&q=80" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Corsair Hs50 Pro</h2>
    <p class="card-title font-medium">Price : $73</p>
    <button className='btn'>Buy Now</button>
  </div>
</div>
                </div>
                <div>
                <div class="card card-compact bg-base-100 shadow-xl">
  <figure><img src="https://improb.com/wp-content/uploads/2018/11/best-headphones-under-150.jpg" /></figure>
  <div class="card-body">
    <h2 class="card-title">Sennheiser Pro</h2>
    <p class="card-title font-medium">Price : $123</p>
    <button className='btn'>Buy Now</button>
  </div>
</div>
                </div>
            </div>
        </div>
    );
};

export default HeadPhoneParts;