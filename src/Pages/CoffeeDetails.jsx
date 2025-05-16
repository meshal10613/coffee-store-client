import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    const coffee = useLoaderData();
    return (
        <div className='main-bg'>
            <div>
                <Link to="/" className='flex gap-3 items-center my-5 w-fit'>
                    <FaArrowLeftLong />
                    <span className='font-rancho text-xl'>Back to Home</span>
                </Link>
            </div>
            <div className='p-5 md:p-24 my-10 bg-[#F4F3F0] rounded-md flex flex-col md:flex-row items-center gap-5 md:gap-40'>
                <div>
                    <img src={coffee.photo} alt="" className='w-fit md:w-72'/>
                </div>
                <div className='flex flex-col items-start space-y-3'>
                    <h2 className='font-rancho text-2xl font-bold'>Niceties</h2>
                    <h3><span className='font-semibold'>Name:</span> {coffee.name}</h3>
                    <h3><span className='font-semibold'>Supplier:</span> {coffee.supplier}</h3>
                    <h3><span className='font-semibold'>Quantity:</span> {coffee.quantity}</h3>
                    <h3><span className='font-semibold'>Price:</span> {coffee.price}</h3>
                    <h3><span className='font-semibold'>Taste:</span> {coffee.taste}</h3>
                    <h3><span className='font-semibold'>Details:</span> {coffee.details}</h3>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;