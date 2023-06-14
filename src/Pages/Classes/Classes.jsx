import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import UseTitle from "../../useTitle";


const Classes = () => {
     const {user}=useContext(AuthContext)
     const navigate=useNavigate()
     

  const{data:classes=[]}=useQuery(["classes"],async()=>{
    const res = await fetch('https://mil-club-server.vercel.app/spacificclasses')
    return res.json()
  })
  console.log(classes)
  // console.log(disable)
   const addSelectedItemTodb=(data)=>{
    console.log(data)
   
    const saveServer={class_name:data?.class_name, image:data?.image, seats:data?.available_seats, price:data?.price, email:user?.email}
    fetch('https://mil-club-server.vercel.app/selectedClass',{
      method:"POST",
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
          title: 'Item added Successfully',
          showConfirmButton: false,
          timer: 1500
          
       
        })
 
        
      }
    })
    
  

   }

   UseTitle('classes')


    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Imge & Name</th>
        <th>Instructors Name</th>
        <th>Available Seats</th>
        <th>Price</th>
        <th>Optioh</th>
      </tr>
    </thead>
    <tbody>
      {
        classes.map((singleClass,index)=> <tr key={singleClass._id}>
          <td>
            {index + 1}
          </td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={singleClass?.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{singleClass?.class_name}</div>
            </div>
          </div>
        </td>
        <td>
          <span className="badge badge-ghost badge-sm">{singleClass?.instructor_name}</span>
        </td>
        <td>Seats:{singleClass?.available_seats}</td>
        <th>
          <span className="">Price:${singleClass?.price}</span>
        </th>
        <th>
          {
            user ?<button  onClick={()=>addSelectedItemTodb(singleClass)}  className="btn btn-xs btn-bg-color disabled">Select</button>:<Link to='/login'><button  className="btn btn-xs btn-bg-color disabled">Select</button></Link> 
          }
          
        </th>
      </tr>)
      }
     
    </tbody>

    
  </table>
</div>
        </div>
    );
};

export default Classes;