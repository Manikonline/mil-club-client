import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { FaUserCog, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";



const ManageUser = () => {
    const{user,}=useContext(AuthContext)
    const { data: users = [], refetch } = useQuery(["users"], async () => {
        // const res = await fetch(`http://localhost:5000/users/${user.email}`)
        const res = await fetch(`http://localhost:5000/allusers`)
        return res.json();
    })
    console.log(users)

    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user?._id}`, {
            method:"PATCH"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an admin now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    // make an instructor
    const handleMakeInstructor =(user)=>{
        fetch(`http://localhost:5000/users/instructor/${user?._id}`, {
            method:"PATCH"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an instructor now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }



    return (
        <div className="w-full">
            <div className="overflow-x-auto">

                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-black text-white">
                            <th>

                            </th>
                            <th>Image & Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th >Make Instructor / admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user?.photo} alt="image" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user?.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-sm">{user?.email}</span>
                                </td>
                                <td>{user?.role}</td>
                                <td ><span className="ms-5"><button onClick={() => handleMakeInstructor(user)} title="Make Instructor" className=" btn btn-xs btn-bg-color"><FaUserCog></FaUserCog></button> <button onClick={() => handleMakeAdmin(user)} title="Make Admin" className="btn btn-xs ms-4 btn-bg-color"><FaUserShield></FaUserShield></button></span></td>

                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageUser;