import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import icon from '../../assets/sign.webp'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate()


    const handleSignup = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;


        createUser(email, password, name)

            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/login')

            })
            .catch(error => console.log(error))
    }
    return (
        <div className="hero w-full my-20 ">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left  w-full max-w-sm shadow-2xl">

                    <img src={icon} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-800">
                    <h1 className="text-3xl font-bold text-cyan-400 text-center pt-4">Sign Up!</h1>
                    <form onSubmit={handleSignup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-pink-600" type="submit" value="Sign Up" />

                        </div>
                    </form>
                    <p className='text-center mb-6'>Already have an account ? <Link className='font-bold text-pink-600' to='/login'>Log In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;