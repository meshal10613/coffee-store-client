import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <div className='px-[5%] md:px-[15%] mx-auto'>
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;
{/* w-11/12 md:w-8/12 */}