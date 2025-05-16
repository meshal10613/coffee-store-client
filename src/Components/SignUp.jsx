import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
    const {createUser} = use(AuthContext);
    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const {email, password, ...rest} = Object.fromEntries(formData.entries());
        console.log(email, password, rest)

        createUser(email, password)
        .then((result) => {
            console.log(result.user);
            const userProfile = {
                email,
                ...rest,
                creationTime: result.user?.metadata?.creationTime,
                lastSignInTime: result.user?.metadata?.lastSignInTime,
            };

            //save profile info in the database
            fetch("https://coffee-store-server-ten-peach.vercel.app/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userProfile)
                })
                .then(res => res.json())
                .then(data => {
                    if(data.insertedId){
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Your account has created successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        form.reset();
                    }
                })
        })
        .catch((error) => {
            console.log(error.message)
        })
    }
    return (
        <div className="card bg-base-100 mx-auto max-w-sm shrink-0 shadow-2xl my-20">
            <div className="card-body">
                <h1 className="text-5xl font-bold text-center">SignUp</h1>
                <form onSubmit={handleSignUp} className='fieldset'>
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Enter Your Name" />
                    <label className="label">Address</label>
                    <input type="text" name='address' className="input" placeholder="Enter Your Address" />
                    <label className="label">Phone</label>
                    <input type="number" name='phone' className="input" placeholder="Enter Your Phone" />
                    <label className="label">Photo URL</label>
                    <input type="text" name='photo' className="input" placeholder="Enter Your Photo URL" />
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Enter Your Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Enter Your Password" />
                    {/* <div><a className="link link-hover">Forgot password?</a></div> */}
                    <p>Already have an account? <Link to="/signin" className='text-blue-600 link link-hover'>SignIn</Link></p>
                    <button type='submit' className="btn btn-neutral mt-4">SignUp</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;