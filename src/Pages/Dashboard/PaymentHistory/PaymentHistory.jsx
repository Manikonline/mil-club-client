import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import { useContext } from "react";
import UseTitle from "../../../useTitle";


const PaymentHistory = () => {

    const { user } = useContext(AuthContext)
    const { data: paymenthistory = [], refetch } = useQuery(["paymenthistory"], async () => {
        const res = await fetch(`http://localhost:5000/allpayments?email=${user?.email}`)
        return res.json();
    })
    console.log('selected dataaaaaaaaaaaa', paymenthistory)

    UseTitle('Dashboard/PaymentHistory')

    return (
        <div>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="bg-black text-white">
      <tr>
        <th>
    
        </th>
        <th>Class image<br></br>& Name</th>
        <th>Transaction ID</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {
        paymenthistory.map((singlehistory,index)=><tr key={singlehistory?._id}>
        <th>
       {index + 1}
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={singlehistory?.image} alt="image" />
              </div>
            </div>
            <div>
              <div className="font-bold">{singlehistory?.class_name}</div>
            </div>
          </div>
        </td>
        <td>
          <span className="badge badge-ghost badge-sm">{singlehistory?.transactionId}</span>
        </td>
        <td>{singlehistory?.date}</td>

      </tr>)
      }
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;