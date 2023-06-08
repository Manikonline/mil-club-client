import { Link } from "react-router-dom";
import './Login.css'
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data =>{
        console.log(data)
    };
   
    return (
        <div>
               <div className="hero min-h-screen bg-base-200">
                <div className="my-9 ">
                    <div className="text-center ">
                        <h1 className="text-2xl mt-1 font-bold text-color">Login Now!</h1>
                    </div>
                    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                        <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                               
                                <input type="email" {...register("email")} name='email' placeholder="email" className="text-black input  input-bordered" required />
                            </div>
                            <div className="form-control mt-2">
                                
                                <input type="password" {...register("password")} name='password' placeholder="password" className="text-black input input-bordered" required />

                            </div>
                            <div className='text-red-600'>
                               error:message
                            </div>
                            <div className="form-control mt-3">
                                <button className="btn btn-bg-color text-white">Login</button>
                            </div>

                            <label className="label">
                                <p>New User? <Link className=" text-green-600" to='/registration'> Registration</Link> here.</p>
                            </label>
                        </form>
                   
                    </div>

                    {/* <div className='mt-3 text-center googleLogin text-white'>
                            <p className=''>Or</p>
                            <h5 >Login With</h5>
                            <div className='py-5 '>
                                <button onClick={handleGoogleLogin} className="button mb-2 inline-flex " ><FaGoogle className='mt-1 me-1' /> Login with Google</button>
                            </div>
                        </div> */}
                </div>


            </div>
        </div>
    );
};

export default Login;