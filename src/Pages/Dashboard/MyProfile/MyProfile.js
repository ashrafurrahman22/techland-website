import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyProfile = () => {

    const [user] = useAuthState(auth);
    console.log(user);

    return (
        <div style={{fontFamily:"inter"}}>
            <h2 className="text-3xl font-bold uppercase text-center mt-10">Profile</h2> <hr />
            <div className='mt-7'>
                <img className='rounded-xl border-0 w-36' src={user?.photoURL} alt="" />
                <h3 className="text-xl font-bold uppercase">
                   Name: {user?.displayName}
                </h3>
                <h3 className="text-xl ">
                  Email: {user?.email}
                </h3>
                <h3 className="text-xl ">
                  Phone: {user?.phoneNumber}
                </h3>
                <Link className='btn' to='/dashboard/editProfile'>Edit Profile</Link>
            </div>
        </div>
    );
};

export default MyProfile;