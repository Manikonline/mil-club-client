import { useQuery } from "@tanstack/react-query";



const ManageUser = () => {
    const {data:users=[],refetch}=useQuery(["users"],async()=>{
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
         1
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Name</div>
            </div>
          </div>
        </td>
        <td>
          <span className="badge badge-ghost badge-sm">Email</span>
        </td>
        <td>Role</td>
        <td><button className=" btn btn-xs btn-bg-color">Make Instructor</button> <button className="btn btn-xs btn-bg-color">Make Admin</button></td>
      
      </tr>
    </tbody>
  
    
  </table>
</div>
        </div>
    );
};

export default ManageUser;