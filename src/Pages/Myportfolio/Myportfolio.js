import React from 'react';
import pic from '../../assets/img/passport.jpg';
import star from '../../assets/img/star-solid.svg';


const Myportfolio = () => {
    return (
        <div>
            <div className='my-10 lg:flex justify-center items-center gap-24'>
            <div>
                <img className='w-48 rounded-xl border-2' src={pic} alt="" />
            </div>
            <div>
                <h3 className="text-3xl mb-2 font-bold uppercase">
                    Ashrafur Rahman
                </h3>
                <p className='mb-2'>Email: ashrafurrahman22@gmail.com</p>
                <p className='mb-2'>Education: BBA Honours (Management)</p>
                <p className='mb-2'>Address: Mirsarai, Chittagong</p>
            </div>
            
        </div>
        <div className='mt-3'>
            <h3 className="text-2xl font-semibold">
                Skills:
            </h3>
            <div>
            <h4 className="text-2xl font-semibold ml-16">Front-End:</h4>
            <div className='ml-16'>
            <ul className='text-2xl list-disc'>
                        <li>html & html5</li>
                        <li>Css & Css3</li>
                        <li>Language: Javascript</li>
                        <li>Library: React</li>
                    </ul>
            </div>
            </div>
            <div className='my-3'>
            <h4 className="text-2xl font-semibold ml-16">Back-End:</h4>
            <div className='ml-16'>
            <ul className='text-2xl list-disc'>
                        <li>Authentication: Firebase</li>
                        <li>Runtime Env: NodeJs</li>
                        <li>FrameWork: ExprssJs</li>
                        <li>Database: MongoDB</li>
                    </ul>
            </div>
            </div>

            <div className='my-3'>
            <h4 className="text-2xl font-semibold">Technology: </h4>
            <div className='ml-16'>
                    <ul className='text-2xl list-disc'>
                        <li>Vs Code</li>
                        <li>Google Chrome</li>
                        <li>Github</li>
                    </ul>
            </div>
            </div>

            {/* projects */}
            <div className='my-3'>
            <h4 className="text-2xl font-semibold">Best Projects: </h4>
            <div className='ml-16'>
                    <ul className='text-2xl list-disc'>
                        <li> <a className='link text-blue-800' href=" https://al-haramain-perfumes-5bad9.web.app/" target="_blank">Al Haramain Perfumes</a></li>
                        <li> <a className='link text-blue-800' href="https://wild-movements.web.app/" target="_blank">Wild Movements</a></li>
                    </ul>
            </div>
            </div>
            
        </div>
        </div>
    );
};

export default Myportfolio;