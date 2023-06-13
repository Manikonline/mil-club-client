import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import UseTitle from "../../../useTitle";


const Instructors = () => {

    const[instructors, setInstructors]=useState([])
   

    const { data: users = [], refetch } = useQuery(["users"], async () => {
      // const res = await fetch(`http://localhost:5000/users/${user.email}`)
      const res = await fetch(`http://localhost:5000/getinstructor`)
      return res.json();
  })
  console.log('instructor ',users)

    useEffect(()=>{
        fetch('http://localhost:5000/instructors')
        .then(res=>res.json())
        .then(data=>{
            setInstructors(data)
        })
        
    },[])

    UseTitle('instructors')

  

    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Email</th>
        <th>Classes</th>
      </tr>
    </thead>
    <tbody>
      {
        instructors.map(instructor=><tr key={instructor._id}>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={instructor?.image} alt="instructor image" />
                  </div>
                </div>
             
              </div>
            </td>
            <td>
              <br/>
              <span className="">{instructor?.name}</span>
            </td>
            <td>
              <br/>
              <span className="">{instructor?.email}</span>
            </td>
           
            <th>
              <button className="btn  btn-bg-color text-white btn-xs">See Classes</button>
            </th>
          </tr>)
      }
      {
        users.map(user=><tr key={user._id}>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={user?.image} alt="instructor image" />
                </div>
              </div>
           
            </div>
          </td>
          <td>
            <br/>
            <span className="">{user?.name}</span>
          </td>
          <td>
            <br/>
            <span className="">{user?.email}</span>
          </td>
         
          <th>
            <button className="btn  btn-bg-color text-white btn-xs">See Classes</button>
          </th>
        </tr>)
      }

    </tbody>
  </table>
</div>
        </div>
    );
};

export default Instructors;



