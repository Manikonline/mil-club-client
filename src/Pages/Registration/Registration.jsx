import { useForm } from 'react-hook-form';
import './Registration.css'
import { Link,useNavigate,useLocation } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import {FaGoogle} from "react-icons/fa";

const Registration = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { createUser, updateUserData ,googleLogin} = useContext(AuthContext)
  const navigate=useNavigate()
  const location=useLocation()
  const from=location?.state?.from?.pathname ||'/'


  const onSubmit = data => {
    console.log(data)
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user
        console.log(loggedUser)
        updateUserData(result.user, data?.name, data?.photo)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Registration has been Successfull',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch(error => {
        console.log(error)

      })
  };

  const handleGoogleLogin = () => {
    googleLogin()
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access Google APIs.
            const credential = GoogleAuthProvider.credentialFromResult(result);

            const user = result.user;
            console.log(user)
            navigate(from, {replace:true})


        }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
            

        });

}
 
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="">
          <div className="text-center ">
            <h1 className="text-2xl mt-1 font-bold text-color">Registration Now!</h1>
          </div>
          <div className="card w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">

                <input type="text"  {...register("name", { required: true })} name="name" placeholder="name" className="text-black input input-bordered" />
                {errors.name && <span className='text-red-600'>Name is required</span>}
              </div>
              <div className="form-control">

                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="text-black input input-bordered" />
                {errors.email && <span className='text-red-600'>Email is required</span>}
              </div>
              <div className="form-control">

                <input type="password"  {...register("password", {
                  required: true, minLength: 6, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/
                })} name="password" placeholder="password" className="text-black input input-bordered" />
                {errors.password?.type === 'required' && <p className='text-red-600'>Password is required</p>}
                {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be 6 characters</p>}
                {errors.password?.type === 'pattern' && <p className='text-red-600'>Password must be one capital letter , one number and one special character</p>}


              </div>
              <div className="form-control">

                <input type="password"  {...register("confirm_password", { required: true, minLength: 6 })} name="confirm_password" placeholder="Confirm password" className="text-black input input-bordered" />
                {errors.confirm_password?.type === 'required' && <p className='text-red-600'>Confirm Password is required</p>}


              </div>
              <div className="form-control">

                <input type="text"  {...register("photo", { required: true })} name="photo" placeholder="Photo URL" className=" text-black input input-bordered" />
              </div>
              <div className='text-red-600'>

              </div>
              <div className="form-control mt-6">
                <button className="btn btn-bg-color text-white ">Registration</button>
              </div>
              <div>
                <p>Already have an account?<Link className='text-green-600' to='/login'>Login</Link></p>
              </div>
            </form>
          </div>

          <div className='mt-3 text-center googleLogin '>
            <p className=''>Or</p>
            <div className='py-3 mb-2 '>
              <button onClick={handleGoogleLogin} className="button mb-2 inline-flex " ><FaGoogle className='mt-1 me-1' /> Login with Google</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Registration;