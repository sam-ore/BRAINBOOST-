import React from '../../assets/images/alagbada.jpg'
import death from '../../assets/images/death.jpg'
import oyo from '../../assets/images/oyo.webp'
import screen from "../../assets/images/Screenshot 2026-06-04 110046.png"

const Features = () => {
  return (
    <div className='px-17 font-bold'>
      <div className=" mt-5 ">
        <img src={screen} alt="" />
      </div>

         <div className='flex  gap-3.5 mt-5'>
          <div>
      <div className="flex gap-2 ">
       <div className="w-6 h-6 bg-red-600"></div>
       <h1> METRO PLUS</h1>
        <div className="h-px w-180 bg-[#00000061] mt-4"></div>  
           </div>
           <div>
             <div className='flex mt-3 '>
              <div>
      <img src={React} alt="" />
      <h2>Ogun school hit by fresh gas leak, scores hospitalised</h2>
      <p className="text-[15px]  ">Scores of students and staff at an Ijebu-Ode school were hospitalised after a fresh Ogun gas leak, the third in two months. Learn about the ongoing in...</p>
     </div>
     <div>
   

     <div className="flex items-center gap-2 ">
      <div className="w-px h-100 bg-gray-400"></div>
      <div className="grid gap-2 w-full">

       <div className="flex gap-1">
             <div><img src={death} alt="" width={300}/></div>

      <h2>Final-year female varsity student found dead on Kogi highway</h2>
      </div>
        <div className="h-px w-60 bg-gray-400"></div>
        <div className="flex gap-1">
             <div><img src={death} alt="" width={300}/></div>

      <h2>Bauchi teenager in police custody over teen’s drowning</h2>
      </div>

 <div className="h-px w-60 bg-gray-400"></div>
 <div className="flex gap-1">
            <div><img src={death} alt="" width={300}/></div>

      <h2>17 nabbed for cultism in Abia</h2>
      </div>

        <div className="h-px w-60 bg-gray-400"></div>
 <div className="flex gap-1">
              <div><img src={death} alt="" width={300}/></div>

      <h2>144 arrested in Lagos street-begging raids</h2>
      </div>
      </div>

  
              <div className="w-px h-100 bg-gray-400"></div>


     <div className="grid gap-2 w-full">
       <div className="flex gap-1">
              <div><img src={death} alt="" width={300}/></div>

      <h2>Soldiers foil kidnap attempts, rescue 10 victims in Plateau, Kaduna </h2>
      </div>

        <div className="h-px w-60 bg-gray-400"></div>
       <div className="flex gap-1">
           <div><img src={death} alt="" width={300}/></div>

      <h2>NDLEA intercepts over 320,000 tramadol capsules in Taraba </h2>
      </div>

        <div className="h-px w-60 bg-gray-400"></div>
       <div className="flex gap-1">
              <div><img src={death} alt="" width={300}/></div>

      <h2>One killed, 13 injured in Lagos-Abeokuta Expressway crash </h2>
      </div>

        <div className="h-px w-60 bg-gray-400"></div>
       <div className="flex gap-1">
        <div><img src={death} alt="" width={300}/></div>
      <h2>Troops repel bandit attacks in Sokoto, rescue abducted farmers </h2>
      </div>

        
</div>
     </div>
     </div>


     </div>
     <div className='text-center mt-5'>
<button className='bg-[#FFEDED] text-red-400 px-25 py-3 rounded-xl'><a href="">More</a></button>
</div>
     </div>

</div>


           <div className="max-w-[100%]  text-center bg-[#f0f0f0] pt-12 p- rounded-[8px] ">
   <div className="w-[160px] h-[250px] mx-auto mb-4 [perspective:900px] ">
   <div className="relative w-[100%] h-[100%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d] origin-center animate-[a_14s_linear_infinite]">

<div className="absolute [transform:translateZ(80px)]">
  <img src={oyo} alt="" />
</div>

<div className=" absolute [transform:rotateY(90deg)_translateZ(80px)]">
  <img src={oyo} alt="" />
</div>

<div className=" absolute [transform:rotateY(180deg)_translateZ(80px)]">
  <img src={oyo} alt="" />
</div>

<div className="absolute [transform:rotateY(-90deg)_translateZ(80px)]">
  <img src={oyo} alt="" />
</div>
   </div>
   </div>
   <div>
    <h1>Read PUNCH Anywhere</h1>
    <p>Unlock the full print replica on any device - every page, every day. Subscribe now for instant e-edition access.</p>
    <button className="bg-red-500 px-3 py-2.5 rounded-3xl">Subscribe</button>
   </div>
     </div>
    </div>

    </div>
  )
}

export default Features
