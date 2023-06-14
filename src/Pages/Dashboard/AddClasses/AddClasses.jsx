import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import UseTitle from "../../../useTitle";


const AddClasses = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = data => {
        console.log(data)
        const saveServer={class_name:data.class_name,instructor_email:data.instructor_email,image:data.image, instructor_name:data.instructor_name,available_seats:data.available_seats,price:data.price,student:"0",role:"panding"}
        fetch('https://mil-club-server.vercel.app/classes',{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(saveServer)
          })
          .then(res=>res.json())
          .then(data=>{
            if(data.insertedId){
              
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Class has been added Successfull',
                showConfirmButton: false,
                timer: 1500
              })
             
            }

          })
        .catch(error => {
          console.log(error)
  
        })
     console.log("from save server",saveServer)
    }
    UseTitle('Dashboard/addClass')
    return (
        <div>
            <div>
                <div className="hero min-h-screen ">
                    <div className="">
                        <div className="text-center ">
                            <h1 className="text-2xl mt-1 font-bold text-color">Add Your class</h1>
                        </div>
                        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">

                                    <input type="text"  {...register("class_name", { required: true })} name="class_name" placeholder="Enter class name" className="text-black input input-bordered" />
                                    {errors.class_name && <span className='text-red-600'>Class Name is required</span>}
                                </div>
                                <div className="form-control">

                                    <input type="text"  {...register("image", { required: true })} name="image" placeholder="Enter your class photo URL" className=" text-black input input-bordered" />
                                    {errors.image && <span className='text-red-600'>Class photo is required</span>}
                                </div>
                                <div className="form-control">

                                    <input type="text"  {...register("instructor_name", { required: true })} name="instructor_name" placeholder="" className="text-black input input-bordered" defaultValue={user?.displayName} readOnly />


                                </div>

                                <div className="form-control">

                                    <input type="email"  {...register("instructor_email", { required: true })} name="instructor_email" placeholder="email" className="text-black input input-bordered" defaultValue={user?.email} readOnly />

                                </div>


                                <div className="form-control">

                                    <input type="number"  {...register("available_seats", { required: true })} name="available_seats" placeholder="Enter Available seats" className="text-black input input-bordered" />
                                    {errors.available_seats && <span className='text-red-600'>available seats is required</span>}
                                </div>

                                <div className="form-control">

                                    <input type="number"  {...register("price", { required: true })} name="price" placeholder="Input class price" className="text-black input input-bordered" />
                                    {errors.price && <span className='text-red-600'>Price is required</span>}


                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-bg-color text-white ">Add Class</button>
                                </div>
                               
                            </form>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddClasses;
