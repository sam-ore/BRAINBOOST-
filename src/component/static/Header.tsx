import img from "../../assets/images/brainboostlogo.png"
import { IoIosMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { NavLink } from "react-router-dom";
// import Enroll from "../../pages/enroll/Enroll";


const Header = () => {
  const [show, setShow] = useState(false);

  const dropDown = () => {
    setShow(show);
  };

    return (
      
        
          <div className=" bg-[#ededf7]   flex  text-center justify-between pt-3 text-yellow-500 px-15 h-15">
            <div>
        <img src={img} alt="" width={50}/>
      </div>
    <nav className="lg:flex gap-4.5  text-lg justify-between font-bold hidden">

      <ul className="" ><NavLink to="/Enroll">Home</NavLink></ul>
      <ul className="" ><NavLink to="/Enroll">About Us</NavLink></ul>
      <ul className="" ><NavLink to="/Enroll">Blog</NavLink></ul>
      <ul className="" ><NavLink to="/Enroll">Services</NavLink></ul>
      
    </nav>
      <div className="lg:flex space-x-7 text-lg hidden ">
      <div className=" animate-pulse ">
      <button className=" bg-yellow-500 px-4.5 py-1.5 rounded-md   gap-4.5   text-xl font-bold text-white"><a href="/enroll">Enroll</a></button>
      </div>
      </div>
      
      <div className="text-[30px] lg:hidden">
        {show ? (
          <div onClick={dropDown}>
             < MdClose />
          </div>
        ) : (
          <div onClick={dropDown}>
            <IoIosMenu />
          </div>
        )}

        {show ? (
          <div>
              <nav>
      <ul className="lg:flex gap-4.5  text-lg justify-between font-bold hidden">
        
        <li className="text-yellow-400"><a href="">Home</a></li>
        <li><a href="#">About us</a></li>
        <li><a href="#">Resources</a></li>
        <li><a href="../../pages/home/Blog">Blog</a></li>
      </ul>
    </nav>
      <div className="lg:flex space-x-7 text-lg hidden ">
      <div className=" animate-pulse ">
      {/* <button className=" bg-yellow-500 px-6.5 py-2.5 rounded-md   gap-4.5   text-xl font-bold text-white"><NavLink to="/enroll">Enroll</NavLink></button> */}
      </div>
          </div>
          </div>
        ) : null}
        
      </div>
      </div>
      
  
       
    )
}

export default Header;