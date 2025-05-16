import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { MdDelete, MdEdit } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import { deleteUser } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';

const Users = () => {
    const initialUsers = useLoaderData();
    const [users, setUsers] = useState(initialUsers);
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

                fetch(`http://localhost:3000/users/${id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your user has been deleted.",
                            icon: "success"
                        });
                        const remainingUser = users.filter(usr => usr._id !== id);
                        setUsers(remainingUser);
                        const user = auth.currentUser;
                        if(user){
                            deleteUser(user)
                                .then(() => {
                                    console.log("User Deleted")
                                })
                                .catch((error) => {
                                    console.log(error.message)
                                })
                        }
                    }
                })
            }
        });
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Creation Time</th>
                        <th>Mobile Number</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                        {
                            users.map((user, index) =>
                            <tr key={index}>
                                <th>{index+1}</th>
                                <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                        <img
                                        src={user.photo}
                                        alt="Avatar Tailwind CSS Component" />
                                    </div>
                                    </div>
                                    <div>
                                    <div className="font-bold">{user.name}</div>
                                    <div className="text-sm opacity-50">{user.address}</div>
                                    </div>
                                </div>
                                </td>
                                <td>
                                {`  
                                    Created On: 
                                    ${user.creationTime.split(" ")[1]} 
                                    ${user.creationTime.split(" ")[2]} 
                                    ${user.creationTime.split(" ")[3]}
                                `}
                                <br />
                                {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                                </td>
                                <td>{user.phone}</td>
                                <th>
                                    <Link className="btn bg-[#D2B48C] text-white rounded-md">
                                        <FaEye size={20}/>
                                    </Link>
                                    <Link className="btn bg-black text-white rounded-md">
                                        <MdEdit size={20}/>
                                    </Link>
                                    <button onClick={() => {handleDelete(user._id)}} className="btn bg-red-500 text-white rounded-md">
                                        <MdDelete size={20}/>
                                    </button>
                                </th>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;