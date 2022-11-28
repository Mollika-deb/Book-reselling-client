import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link,  useNavigate } from 'react-router-dom';
import icon from '../../assets/sign.webp'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    useTitle("signup");
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [createUserEmail, setCreateUserEmail] = useState('');

    const [token] = useToken(createUserEmail)
    const navigate = useNavigate()

    if(token){
        navigate('/');
    }


    const handleSignUp = (data) => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            toast.success("signed up successfully");

           
            
            const userInfo = {
                displayName : data.name
            }
            
            updateUser(userInfo)
            .then(()=>{
                saveUser(data.name, data.email)
               
            })
            .catch(error => console.error(error))
            
        })
        .catch(error => console.error(error))
    
        
    }
   
    const saveUser = (name, email)=>{
        const user = {name, email};
        fetch('https://assignment-12-server-blush.vercel.app/users',{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreateUserEmail(email);
               
            })
    }
    
    


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
                            <input {...register("name", { required: "name is required" })} type="text" placeholder="email" className="input input-bordered" />
                            {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}
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