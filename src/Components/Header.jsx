import React from 'react';
import logo from '../assets//more/logo1.png'
import { Link } from 'react-router';

const Header = () => {
    return (
        <div className='header-bg'>
            <Link className='flex flex-row items-center justify-center gap-3 py-5 cursor-pointer mx-auto w-fit'>
                <img src={logo} alt="" className='w-10 md:w-12 transition-all'/>
                <h2 className='text-white text-3xl md:text-4xl font-rancho font-semibold transition-all '>Espresso Emporium</h2>
            </Link>
        </div>
    );
};

export default Header;