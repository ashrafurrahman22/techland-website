import React from 'react';
import logo from '../../assets/img/techland-logo.png';

const Footer = () => {
    return (
        <footer className="p-10">
            <div className='footer'>
            <div>
            <img className='bg-slate-500 w-40 mx-auto p-5 rounded-lg' src={logo} alt="" />
            <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, minus.</small></p>
            </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className='my-6 text-center'>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;