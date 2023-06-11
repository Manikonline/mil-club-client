import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { useForm } from 'react-hook-form';
import { useContext ,useState} from 'react';
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import {FaEye, FaEyeSlash, FaGoogle} from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const[open, setOpen]=useState(false)
    const {signIn,googleLogin}=useContext(AuthContext)
    const [error, setError]=useState('')
    const navigate=useNavigate()
    const location=useLocation()
    const from=location?.state?.from?.pathname ||'/'

    const onSubmit = data =>{
        console.log(data)
        signIn(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Successfully Login',
                showConfirmButton: false,
                timer: 1500
              })
            navigate(from,{replace:true})


        })
        .catch(error => {
            console.log(error);
            setError(error.message)

        })
    };
    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access Google APIs.
                const credential = GoogleAuthProvider.credentialFromResult(result);
    
                const user = result.user;
                console.log(user)
                const saveUser={name:user?.displayName, email:user?.email, photo:user?.photoURL,role:'Student'}
                fetch('http://localhost:5000/users',{
                  method:'POST',
                  headers:{
                    'content-type':'application/json'
                  },
                  body:JSON.stringify(saveUser)
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                    navigate(from,{replace:true})
                  
                })
                
                
    
    
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
                
    
            });
    
    }

    // show and hide password
    const toggle=()=>{
        setOpen(!open)
    }
   
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
                            <div className="form-control mt-2 relative">
                                
                              <div>
                              <input type={open===false?'password':'text'} {...register("password")} name='password' placeholder="password" className="text-black input input-bordered" required />
                              </div>
                              <div className='absolute top-4 right-5'>
                              
                              {
                                (open===false)?<FaEye onClick={toggle} ></FaEye> :   <FaEyeSlash onClick={toggle} ></FaEyeSlash>
                              }
                                
                             
                            
                                
                               
                              </div>

                            </div>
                            <div className='text-red-600'>
                               <p>{error}</p>
                            </div>
                            <div className="form-control mt-3">
                                <button className="btn btn-bg-color text-white">Login</button>
                            </div>

                            <label className="label">
                                <p>New User? <Link className=" text-green-600" to='/registration'> Registration</Link> here.</p>
                            </label>
                        </form>
                   
                    </div>

                    <div className='mt-3 text-center googleLogin '>
                            <p className=''>Or</p>
                            <div className='py-3 '>
                                <button  onClick={handleGoogleLogin} className="button mb-2 inline-flex " ><FaGoogle className='mt-1 me-1' /> Login with Google</button>
                            </div>
                        </div>
                </div>


            </div>
        </div>
    );
};

export default Login;