import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";


const Classes = () => {
     const {user}=useContext(AuthContext)

  const{data:classes=[]}=useQuery(["classes"],async()=>{
    const res = await fetch('http://localhost:5000/spacificclasses')
    return res.json()
  })
  console.log(classes)
    
   const addSelectedItemTodb=(data)=>{
    console.log(data)
    const saveServer={class_name:data?.class_name, image:data?.image, seats:data?.available_seats, price:data?.price, email:user?.email}
    fetch('http://localhost:5000/selectedClass',{
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
    {/* {"_id":{"$oid":"648580594602b5ab3839d1fb"},"class_name":"Violin Class","image":"https://i.ibb.co/kcZJHKv/HJmuDQD.jpg","instructor_name":"Michael Johnson","instructor_email":"michael@johnson.com","role":"approved","available_seats":"6","price":"4000","student":"20"} */}
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
          <button onClick={()=>addSelectedItemTodb(singleClass)} className="btn btn-xs btn-bg-color ">Select</button>
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