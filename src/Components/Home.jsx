import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';
import { RiCupLine } from 'react-icons/ri';

const Home = () => {
    const initailCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(initailCoffees)
    return (
        <div className='my-10'>
            <div>
                <div className='flex flex-col items-center justify-center gap-3'>
                    <p>--- Sip & Savor ---</p>
                    <h2 className='text-3xl font-rancho text-[#331A15] font-bold'>Our Popular Products</h2>
                    <Link to="/addCoffee" className='flex gap-1 btn w-fit bg-[#E3B577] border border-[#331A15]'>
                        <span className='text-white font-rancho'>Add Coffee</span><RiCupLine size={20}/>
                    </Link>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-10'>
                    {
                        coffees.map(coffee => <CoffeeCard 
                            key={coffee._id} 
                            coffee={coffee}
                            coffees={coffees}
                            setCoffees={setCoffees}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;