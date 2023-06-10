import { FaCheckDouble, FaFileImport, FaHome, FaPeopleCarry, FaPlayCircle, FaUserCog, FaUserShield, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
  const isAdmin = true;
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

            {
              isAdmin ?
                <>
                  <li><NavLink to='manageclasses'><FaPlayCircle></FaPlayCircle> Manage Classes</NavLink></li>
                  <li><NavLink to='manageuser'><FaPeopleCarry></FaPeopleCarry>Manage Users</NavLink></li>
                </>
                : <>
                  <li><NavLink to='selectedClass'><FaFileImport></FaFileImport>Selected Classes</NavLink></li>
                  <li><NavLink to='enrollod'> <FaCheckDouble></FaCheckDouble>My Enrollod</NavLink></li>
                  <li><NavLink to='paymentHistory'> <FaWallet></FaWallet>Payment History</NavLink></li>

                </>
            }
            <div className="divider"></div>
            <li><NavLink to='/'> <FaHome></FaHome>Home</NavLink></li>
            <li><NavLink to='/instructors'> <FaUserCog></FaUserCog>Instructors</NavLink></li>

          </ul>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;