

const Classes = () => {
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Imge & Name</th>
        <th>Instructors Name</th>
        <th>Available Seats</th>
        <th>Price</th>
        <th>Optioh</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
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
          <span className="badge badge-ghost badge-sm">Instructor Name</span>
        </td>
        <td>Available seats</td>
        <th>
          <span className="">Price</span>
        </th>
        <th>
          <button className="btn btn-xs ">Price</button>
        </th>
      </tr>
    </tbody>

    
  </table>
</div>
        </div>
    );
};

export default Classes;