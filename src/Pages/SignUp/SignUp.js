import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import icon from '../../assets/sign.webp'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();


    const handleSignUp = data => {
        console.log(data)

    }
    // const { createUser } = useContext(AuthContext);
    // const navigate = useNavigate()


    // const handleSignup = (event) => {
    //     event.preventDefault();

    //     const form = event.target;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     const name = form.name.value;


    //     createUser(email, password, name)

    //         .then(result => {
    //             const user = result.user;
    //             console.log(user);
    //             form.reset();
    //             navigate('/login')

    //         })
    //         .catch(error => console.log(error))
    // }
    return (
        <div className="hero w-full my-20 ">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left  w-full max-w-sm shadow-2xl">

                    <img src={icon} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-800">
                    <h1 className="text-3xl font-bold text-cyan-400 text-center pt-4">Sign Up!</h1>
                    <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name", { required: true })} type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: "Email Address is required" })} type="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", { required: "Email Address is required" })} type="password" placeholder="password" className="input input-bordered" />
                            {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-pink-600 w-full" type="submit" value="SignIn" />

                        </div>
                    </form>
                    <p className='text-center mb-6'>Already have an account ? <Link className='font-bold text-pink-600' to='/login'>Log In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;