import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";



const ManageClasses = () => {

    const { data: getclasses = [], refetch } = useQuery(["getclasses"], async () => {
        // const res = await fetch(`http://localhost:5000/classes/${user.email}`)
        const res = await fetch(`http://localhost:5000/getclasses`)
        return res.json();
    })
    console.log(getclasses)


    const handleApproved = (singleClass) => {
        fetch(`http://localhost:5000/classes/approved/${singleClass?._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${singleClass.class_name} is Approved!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handledenied = (singleClass) => {
        fetch(`http://localhost:5000/classes/denied/${singleClass?._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${singleClass.class_name} is Denied!`,
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
                        <tr className="bg-black text-white">
                            <th>
                            </th>
                            <th>Image<br></br>& Name</th>
                            <th>Instructor<br></br>name & email</th>
                            <th>Available<br></br>seats & price</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getclasses.map((singleClass, index) => <tr key={singleClass._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={singleClass?.image} alt="image" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{singleClass?.class_name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {singleClass?.instructor_name}
                                    <br />
                                    <span className="">{singleClass?.instructor_email}</span>
                                </td>
                                <td>Seats:{singleClass?.available_seats}<br />
                                    <span>Price:${singleClass?.price}</span>
                                </td>
                                <td>
                                    <span className="">{singleClass?.role}</span>
                                </td>
                                <td>
                                    {
                                        singleClass?.role == 'approved'? <button onClick={() => handleApproved(singleClass)} className="btn btn-bg-color btn-xs" disabled>Approved</button>: <button onClick={() => handleApproved(singleClass)} className="btn btn-bg-color btn-xs">Approved</button>
                                    }

                                    {
                                        singleClass?.role == 'denied'? <button onClick={() => handledenied(singleClass)} className="btn btn-bg-color btn-xs px-5" disabled>Denied</button> :<button onClick={() => handledenied(singleClass)} className="btn btn-bg-color btn-xs px-5">Denied</button>
                                    }
                                    
                                    
                                    <button  className="btn btn-bg-color btn-xs px-5">Feedback</button>
                                     
                                </td>
                            </tr>)
                        }


                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default ManageClasses;