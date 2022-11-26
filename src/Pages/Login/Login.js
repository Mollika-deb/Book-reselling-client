import React, { useContext } from 'react';
import { GoogleAuthProvider } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo2 from '../../assets/logo2.png'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Login = () => {
    const { signIn, googleProviderLogIn } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'


    const googleProvider = new GoogleAuthProvider();;

    const handleGoogleSignIn = () => {
        googleProviderLogIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);

            })
            .catch(error => console.log(error));
    };

    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
       
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;


        signIn(email, password, name)

            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))

    }
    return (
        <div className="hero w-full my-20 ">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="card flex-shrink-0 text-center lg:text-left ml-32 mr-32  w-full max-w-sm  bg-slate-800 shadow-2xl">

                    <img className=' ' src={logo2} alt="" />
                    <button onClick={handleGoogleSignIn} className="btn bg-orange-600 w-full px-10 font-semibold text-white mt-5 ">Sign In With Google</button>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-800">
                    <h1 className="text-5xl text-pink-600 font-bold text-center pt-4">Sign In!</h1>
                    <form onSubmit={handleLogin} className="card-body">
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
                            <input className="btn bg-pink-600 w-full" type="submit" value="SignIn" />

                        </div>
                    </form>
                    <p className='text-center mb-6'>New to Book Re-Salling ? <Link className='font-bold text-pink-600 ' to='/signup'>Sign Up</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;