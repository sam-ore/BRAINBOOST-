import img from "../../assets/images/close_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"


const Footer = () => {
  return (
    <div className="md:p-15 bg-[#1B1F1E] text-white ">
      <div className="inner-container">
              <div className="bg-transparent rounded-xl border-solid border-[#3D4040] border-2 ">
                <div className="text-center mt-3.5">
                  <p className="text-4xl">Contact</p>
                  <h1 className="text-5xl">Visit Office</h1>
                  </div>
                  <div className="md:flex gap-40 p-15 ">
                    <div className="pl-10">
                      <h1 className="text-3xl m-2.5">Opening hours</h1>
                      <p className="text-2xl m-2.5">Monday to Friday - 9am to 9pm</p>
                      <p className="text-2xl m-2.5">Monday to Frid - 9am to 9pm</p>
                    </div>
                     <div className="">
                  <h1 className="text-3xl m-2.5">Where to find us</h1>
                  <p className="text-2xl m-2.5">Bojuri Enuadake</p>
                  <p className="text-2xl m-2.5">Independence Road</p>
                  <p className="text-2xl m-2.5">Adebayo Road</p>
                  <p className="text-2xl m-2.5">Through Our Social Media Page</p>
                
                     </div>
                  </div>

                  <div className="">
                      <div className=" flex  pl-110 ">
                    <img src={img} alt="" className=" w-10 "/>
                    <img src={img} alt="" className=" w-10 "/>
                    <img src={img} alt="" className=" w-10 "/>
                    <img src={img} alt="" className=" w-10 "/>
                    <img src={img} alt="" className=" w-10 "/>
                  </div>
                    <p className="text-center  text-2xl">Copyright|Brainboost academy</p>
                    </div>
              </div>
              </div>
</div>  
                  

             
  )
}

export default Footer;
