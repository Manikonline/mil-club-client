import { Link } from "react-router-dom";
import './Footer.css'
import {FaMapMarkerAlt} from "react-icons/fa";


const Footer = () => {
    return (
        <div className="">
            <footer className="footer p-10  text-white">
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Online</a> 
    <a className="link link-hover">Offline</a> 
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer> 
<footer className="footer px-10 py-4 border-t  text-white border-base-300">
  <div className="items-center grid-flow-col">
    <p><Link to='/' className="font-bold text-center flex text-white"><img src="https://i.ibb.co/Wk4wRqH/rsz-1download.png" alt="" /><span className="mt-2">School</span> </Link><br/><p className="flex"><span className="mt-1"><FaMapMarkerAlt></FaMapMarkerAlt></span><span className="ms-1"> Dhaka, Bangladesh</span></p> <p className="text-muted mt-5 flex"> Copyright &copy;<a className="text-decoration-none text-info " ><b> <Link className="flex ms-1 mb-2"><img src="https://i.ibb.co/Wk4wRqH/rsz-1download.png" alt="" /><span className="ms-1">School</span> </Link></b></a>.<span className="ms-1">All Rights Reserved </span> </p> </p>
  </div> 
 
</footer>
        </div>
    );
};

export default Footer;