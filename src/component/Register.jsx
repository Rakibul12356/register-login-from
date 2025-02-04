
import React, { useState } from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
const Register = () => {
    const {registerUser} = useContext(AuthContext);
    const [error,setError] = useState('');
    const[emailError,setEmailError]=useState('')
    
    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo= e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value
        console.log(email, password, name,photo,confirmPassword);
        //register user
        if(!/@gmail\.com$/.test(email))
        if(password.length <6){
            console.log("pass")
            setError("Password must  be 6 characters")
            return
        }

        if(password !== confirmPassword){
            setError('password did');
            return

        }

       
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>   
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name"
                                    name='name'
                                    className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Photo Url"
                                    name='photo'
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email"
                                    name='email'
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password"
                                    name='password' className="input input-bordered" required />
                                 
                                
                            </div>
                               <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="confirm password"
                                    name='confirmPassword' className="input input-bordered" required />
                                    {error && <small className='text-red-800'>{error}</small>}

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>

                        <div className='p-4 ml-4'>
                            <p>Already Have an account? <Link to='/login' className='text-blue-700 font-semibold underline'>Login Here</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
