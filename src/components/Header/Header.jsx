import { useContext } from 'react';
import './Header.css'
import { Link } from "react-router-dom";
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';



const Header = () => {
  const { user, logOut } = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
  }
  return (
    <div>
      <div className="navbar bg-color">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box text-black w-52 z-10">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/instructors'>Instructors</Link></li>
              <li><Link to='/classes'>Classes</Link></li>
              <li><Link to='/dashboard'>Dashboard</Link></li>
              {
                user ? <><img title={user?.displayName} className='rounded-full ms-3 user-img' src={user?.photoURL} alt="" /><Link onClick={handleLogOut} className="ms-2 text-black">LogOut</Link></> : <><li><Link to='/login'>Login</Link></li></>
              }
            </ul>
          </div>
          <a className="btn btn-ghost text-white text-xl"> <img src="https://i.ibb.co/Wk4wRqH/rsz-1download.png" alt="" />School</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-white px-1">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/instructors'>Instructors</Link></li>
            <li><Link to='/classes'>Classes</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            {
              user ? <><img title={user?.displayName} className='rounded-full ms-3 user-img' src={user?.photoURL} alt="" /><Link onClick={handleLogOut} className="ms-2 mt-2 text-white">LogOut</Link></> : <><li><Link to='/login'>Login</Link></li></>
            }
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Header;
