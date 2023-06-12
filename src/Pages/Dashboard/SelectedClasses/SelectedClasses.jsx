

import { useContext, useState } from "react";

import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const SelectedClasses = () => {

  const { user } = useContext(AuthContext)
  // const [classes, setClasses]=useState([])
  // const [itemPrice, setItemPrice] = useState(null)
  const { data: myclasses = [], refetch } = useQuery(["myclasses"], async () => {
    const res = await fetch(`http://localhost:5000/userclasses?email=${user?.email}`)
    return res.json();
  })
  console.log('selected data', myclasses)

  // useEffect(() => {
  //     fetch(`http://localhost:5000/userclasses?email=${user?.email}`)
  //       .then(res => res.json())
  //       .then(data => {
  //         console.log('heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',data)
  //  setClasses(data)

  //       })
  //   }, [user])

  const deleteItem = (data) => {
    console.log(data)
    fetch(`http://localhost:5000/userclasses/${data._id}`, {
      method: "DELETE",

    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          refetch()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Item has been deleted Successfull',
            showConfirmButton: false,
            timer: 1500
          })

        }

      })
  }

  // const getItemPrice = (itemprice) => {
  //   console.log('check', itemprice)
  //   setItemPrice(itemprice)
  // }
  // console.log('adfdfdfdfdf', itemPrice)


  // let priceData = {
  //   price: itemPrice
  // }
  // console.log(itemPrice);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-black text-white">
              <th>

              </th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              myclasses.map((myclass, index) => <tr key={myclass._id}>
                <th>
                  {index + 1}
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={myclass?.image} alt="image" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-ghost badge-sm">{myclass?.class_name}</span>
                </td>
                <td>Seats:{myclass?.seats}</td>
                <td>Price:${myclass?.price}</td>
                <th>
                  <button onClick={() => deleteItem(myclass)} className="btn btn-xs  btn-bg-color"> Delete</button><Link to='/dashboard/payment' state={myclass} ><button  className="btn  btn-bg-color btn-xs" >Payment</button></Link>
                </th>
              </tr>)
            }


          </tbody>

        </table>
      </div>
    </div>
  );
};

export default SelectedClasses;