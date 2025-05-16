import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();

    const handleUpdateCoffee = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const updatedCoffee = Object.fromEntries(formData.entries());
        console.log(updatedCoffee)
        
        fetch(`https://coffee-store-server-ten-peach.vercel.app/coffees/${coffee._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Coffee Updated Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
    }
    return (
        <div className='main-bg'>        
            <div>
                <div>
                    <Link to="/" className='flex gap-3 items-center my-5 w-fit'>
                        <FaArrowLeftLong />
                        <span className='font-rancho text-xl'>Back to Home</span>
                    </Link>
                </div>
            </div>
            <div className='p-5 md:p-24 my-10 bg-[#F4F3F0] rounded-md'>
                <div className='p-2 md:p-12 text-center space-y-4'>
                    <h2 className='text-4xl font-rancho text-[#374151] font-bold'>Update Existing Coffee Details</h2>
                    <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <form onSubmit={handleUpdateCoffee}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                        {/* Name */}
                        <fieldset className="fieldset p-4">
                            <label className="label font-semibold text-base">Name</label>
                            <input type="text" name='name' defaultValue={coffee.name} className="input w-full" placeholder="Enter Coffee Name" />
                        </fieldset>
                        {/* Chef */}
                        <fieldset className="fieldset p-4">
                            <label className="label font-semibold text-base">Quantity</label>
                            <input type="text" name='quantity' defaultValue={coffee.quantity} className="input w-full" placeholder="Enter Coffee Quantity" />
                        </fieldset>
                        {/* Supplier */}
                        <fieldset className="fieldset p-4">
                            <label className="label font-semibold text-base">Supplier</label>
                            <input type="text" name='supplier' defaultValue={coffee.supplier} className="input w-full" placeholder="Enter Coffee Supplier" />
                        </fieldset>
                        {/* Taste */}
                        <fieldset className="fieldset p-4">
                            <label className="label font-semibold text-base">Taste</label>
                            <input type="text" name='taste' defaultValue={coffee.taste} className="input w-full" placeholder="Enter Coffee Taste" />
                        </fieldset>
                        {/* Price */}
                        <fieldset className="fieldset p-4">
                            <label className="label font-semibold text-base">Price</label>
                            <input type="number" name='price' defaultValue={coffee.price} className="input w-full" placeholder="Enter Coffee Price" />
                        </fieldset>
                        {/* Chef */}
                        <fieldset className="fieldset p-4">
                            <label className="label font-semibold text-base">Details</label>
                            <input type="text" name='details' defaultValue={coffee.details} className="input w-full" placeholder="Enter Coffee Details" />
                        </fieldset>
                    </div>
                    {/* Photo */}
                    <fieldset className="fieldset p-4">
                        <label className="label font-semibold text-base">Photo</label>
                        <input type="text" name='photo' defaultValue={coffee.photo} className="input w-full" placeholder="Enter Photo URL" />
                    </fieldset>
                    <div className='p-4'>
                        <button 
                            type='submit'
                            className='btn btn-block bg-[#D2B48C] border border-[#331A15] text-[#331A15] font-rancho'>
                                Update Coffee
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;