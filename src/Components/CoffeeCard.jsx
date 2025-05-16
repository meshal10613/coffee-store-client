import React from 'react';
import { FaEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee, coffees, setCoffees}) => {

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then((result) => {
            if (result.isConfirmed) {
                
                fetch(`http://localhost:3000/coffees/${id}`, {
                    method: "DELETE",
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.deletedCount){ 
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Coffee has been deleted.",
                            icon: "success"
                        });
                        const remainingCoffee = coffees.filter(cof => cof._id !== id);
                        setCoffees(remainingCoffee);
                    }
                })
            }
        });
    };

    return (
        <div className="flex gap-5 bg-[#F5F4F1] shadow-sm rounded-md">
            <figure className='py-3'>
                <img
                src={coffee.photo}
                alt="Movie" 
                className='w-fit h-fit'/>
            </figure>
            <div className="flex flex-col md:flex-row justify-center md:justify-around items-center flex-1">
                <div className='space-y-1 md:space-y-5'>
                    <h2 className="">Name: {coffee.name}</h2>
                    <p>Price: {coffee.price}</p>
                    <p>Quantity: {coffee.quantity}</p>
                </div>
                <div className="">
                    <div className="flex flex-row md:flex-col gap-3">
                        <Link to={`/coffeDetails/${coffee._id}`} className="btn bg-[#D2B48C] text-white rounded-md">
                            <FaEye size={20}/>
                        </Link>
                        <Link to={`/updateCoffee/${coffee._id}`} className="btn bg-black text-white rounded-md">
                            <MdEdit size={20}/>
                        </Link>
                        <button onClick={() => {handleDelete(coffee._id)}} className="btn bg-red-500 text-white rounded-md">
                            <MdDelete size={20}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;