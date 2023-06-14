import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import UseTitle from "../../../useTitle";


const MyClasses = () => {

    const { user } = useContext(AuthContext)
    const { data: myclasses = [], refetch } = useQuery(["myclasses"], async () => {
        const res = await fetch(`https://mil-club-server.vercel.app/myaddedclasses?email=${user?.email}`)
        return res.json();
    })
    console.log('my classseee', myclasses)

    UseTitle('Dashboard/MyClasses')
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="bg-black text-white">
      <tr>
        <th>

        </th>
        <th>Image &<br/>Class Name  </th>
        <th>seats</th>
        <th>Status</th>
        <th>Feedback</th>
        <th className="text-center">Action</th>
      </tr>
    </thead>
    <tbody>
      {
        myclasses.map((mysingleclass,index)=> <tr key={mysingleclass?._id}>
        <th>
         {index + 1}
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={mysingleclass?.image} alt="image" />
              </div>
            </div>
            <div>
              <div className="font-bold">{mysingleclass?.class_name}</div>

            </div>
          </div>
        </td>
        <td>
          <span className="badge badge-ghost badge-sm">{mysingleclass?.available_seats}</span>
        </td>
        <td>{mysingleclass?.role}</td>
        <td>{mysingleclass?.feedback || 'N/A'}</td>
        <th>
          <Link to={`/dashboard/myupdatedclass/${mysingleclass?._id}`}><button  className="btn btn-bg-color btn-xs">Update</button></Link>
        </th>
      </tr>)
      }
    
    </tbody>


    
  </table>
</div>
        </div>
    );
};

export default MyClasses;