import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";



const ManageClasses = () => {
 
    const { data: classes = [], refetch } = useQuery(["classes"], async () => {
        // const res = await fetch(`http://localhost:5000/classes/${user.email}`)
        const res = await fetch(`http://localhost:5000/classes`)
        return res.json();
    })
    console.log(classes)


    const handleApproved = (singleClass) => {
        fetch(`http://localhost:5000/users/admin/${singleClass?._id}`, {
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
                            classes.map((singleClass, index) => <tr key={singleClass._id}>
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
                                    <button onClick={() => handleApproved(singleClass)} className="btn btn-bg-color btn-xs">Approved</button>
                                    <button className="btn btn-bg-color btn-xs">Denied</button>
                                    <button className="btn btn-bg-color btn-xs">Feedback</button>
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