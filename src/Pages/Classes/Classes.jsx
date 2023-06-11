import { useQuery } from "@tanstack/react-query";


const Classes = () => {
     

  const{data:classes=[]}=useQuery(["classes"],async()=>{
    const res = await fetch('http://localhost:5000/spacificclasses')
    return res.json()
  })
  console.log(classes)
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
          <button className="btn btn-xs btn-bg-color ">Select</button>
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