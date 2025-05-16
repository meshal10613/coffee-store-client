import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Providers/AuthProvider';

const SignIn = () => {
    const { signInUser } = use(AuthContext);
    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const {email, password} = Object.fromEntries(formData.entries());
        
        signInUser(email, password)
        .then((result) => {
            console.log(result.user)
            const signInInfo = {
                email,
                lastSignInTime: result.user?.metadata?.lastSignInTime
            }
            fetch("https://coffee-store-server-ten-peach.vercel.app/users", {
                method: "PATCH",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(signInInfo)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        })
        .catch((error) => {
            console.log(error.message)
        })
    }
    return (
        <div className="card bg-base-100 mx-auto max-w-sm shrink-0 shadow-2xl my-20">
            <div className="card-body">
                <h1 className="text-5xl font-bold text-center">SignIn</h1>
                <form onSubmit={handleSignIn} className='fieldset'>
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email"/>
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <p>Don't have an account? please <Link to="/signup" className='text-blue-600 link link-hover'>SignUp</Link></p>
                    <button type='submit' className="btn btn-neutral mt-4">SignIn</button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;