import img1 from "../../assets/images/FREE_Tiktok_App_Icon_Illustration-removebg-preview.png"
import img4 from "../../assets/images/Facebook_Logo_PNG-removebg-preview.png"
import img5 from "../../assets/images/627689266831789741-removebg-preview.png"
import img6 from "../../assets/images/Instagrams_Original_Logo_Creator_Likes_The_New_Logo-removebg-preview.png"
// import img7 from "../../assets/images/LinkedIn_New_2020_Logo_PNG_Vector__SVG__Free_Download-removebg-preview.png"
import img2 from "../../assets/images/YouTube_Logo_PNG-removebg-preview.png"
import img3 from "../../assets/images/Telegram_Logo_PNG-removebg-preview.png"
import logo from "../../assets/images/Punch_logo.svg.png"
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
<div>
  <div className="bg-black text-white flex gap-1.5 h-12 px-9">
      <h2>Advertise with us</h2>
   <h2>|Tuesday, June 02, 2026</h2>
    </div>
<div className="grid grid-cols-3 items-center px-9 h-16">

    <div className="flex  px-4">
        <div><img src={img1} alt="" width={80}/></div>
        <div><img src={img2} alt="" width={60}/></div>
        <div><img src={img6} alt="" width={50}/></div>
        <div><img src={img4} alt="" width={70}/></div>
        <div><img src={img5} alt="" width={45}/></div>
        <div><img src={img3} alt="" width={45}/></div>
</div>

  
  <div className=" justify-center items-center mx-auto">
    <img src={logo} alt="" width={150} className="" />
  <p className="items-center">Most Widely Read Newspaper</p>
  </div>
      
  

  <div className="flex justify-end">
    {/* <img src={} alt="" /> */}
  </div>
  
</div>
<hr  className=" w-full mt-3.5" />

<div className=" px-13 items-center">
  <ul className="flex gap-4 font-bold p-2 tex-xl text-[#666666]">
    <li><a href="/">Home</a></li>
   <NavLink to="/news">News</NavLink>
   <NavLink to="/features">Features</NavLink>
    <NavLink to="/metro">Metro Plus</NavLink>
       <NavLink to="/business">Business</NavLink>
       <NavLink to="/sport">Sport</NavLink>
       <NavLink to="/punch">PUNCH Lite</NavLink>
       <NavLink to="/editorial">Editorial</NavLink>
       <NavLink to="/column">Columns</NavLink>
       <NavLink to="/Video">Videos</NavLink>
       <NavLink to="/continuation">Continuation From Print</NavLink>

  </ul>
</div>
<hr />

</div>





  
  )
}

export default Header
