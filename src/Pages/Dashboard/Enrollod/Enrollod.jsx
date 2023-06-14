import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import UseTitle from "../../../useTitle";


const Enrollod = () => {
    const { user } = useContext(AuthContext)
    const { data: paymentuser = [], refetch } = useQuery(["paymentuser"], async () => {
        const res = await fetch(`https://mil-club-server.vercel.app/allpayments?email=${user?.email}`)
        return res.json();
    })
    console.log('selected data', paymentuser)

    UseTitle('Dashboard/Enrollod')
    return (
        <div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table ">
                        {/* head */}
                        <thead>
                            <tr className="bg-black text-white">
                                <th>

                                </th>
                                <th>Image</th>
                                <th>Class Name</th>
                                <th>Available Seats</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                paymentuser.map((singleUser, index) =>
                                    <tr key={singleUser._id}>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={singleUser?.image} alt="image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="badge badge-ghost badge-sm">{singleUser?.class_name}</span>
                                        </td>
                                        <td>Seats:{singleUser?.available_seats}</td>
                                        <td>Price:${singleUser?.price}</td>
                                        <th>

                                        </th>
                                    </tr>)
                            }




                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default Enrollod;