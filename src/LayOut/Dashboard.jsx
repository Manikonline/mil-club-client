import { FaCheckDouble, FaFileImport, FaHome, FaUserShield, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-black text-white">
      {/* Sidebar content here */}
      <li><NavLink to='dashboard/selectedClass'><FaFileImport></FaFileImport>Selected Classes</NavLink></li>
      <li><NavLink to='dashboard/enrollod'> <FaCheckDouble></FaCheckDouble>My Enrollod</NavLink></li>
      <li><NavLink to='dashboard/paymentHistory'> <FaWallet></FaWallet>Payment History</NavLink></li>
      <div className="divider"></div>
      <li><NavLink to='/'> <FaHome></FaHome>Home</NavLink></li>
      <li><NavLink to='/instructors'> <FaUserShield></FaUserShield>Instructors</NavLink></li>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;