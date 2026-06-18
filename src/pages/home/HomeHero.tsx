import img from "../../assets/images\/The-Reps-Green-Chamber.webp"
import advert from "../../assets/images/ginger.png"

const HomeHero = () => {
  return (
    <div className='px-9  '>
      <h1 className='text-center text-4xl px-5 p-3.5'><img src={advert} alt="" /></h1>

      <div className='flex p-4 text-black'>
           <div className="p-4 ">
        <div className="flex items-center gap-2">
   
            <div className="w-6 h-6 bg-red-600"></div>
        <h1>LATEST NEWS</h1>
        <div className="h-px w-40 bg-[#00000061] mt-4"></div>  

        </div>
        <p className="italic text-red-500">2 minutes ago</p>
        <h2 className="max-w-2xl">Benfica in talks to appoint Fulham’s Silva as head coach</h2>
        <hr />

         <p className="italic text-red-500">2 minutes ago</p>
        <h2>Work resumes as NUPRC workers suspend strike</h2>
        <hr />

         <p className="italic text-red-500">2 minutes ago</p>
        <h2>Army Rescue Two Kidnap Victims, Kill Four Bandits In Benue, Taraba</h2>
        <hr />

         <p className="italic text-red-500">2 minutes ago</p>
        <h2>Liverpool legend Dalglish announces cancer diagnosis</h2>
        <hr  className="text-grey-400"/>

         <p className="italic text-red-500">2 minutes ago</p>
        <h2>Cholera: Borno records 274 new cases in 24 hours as toll hits 4,204</h2>
      </div>
      <div >
      <img src={img} alt=""width={800}/>
      <h1 className="bg-[#E2E2E2] h-30 text-2xl">Terrorists den: 360 freed Borno captives recount starvation, deaths</h1>
      </div>

      <div className="p-4 w-120">
        <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-red-600"></div>
        <h1 className="">Top News</h1>
        <div className="h-px w-40 bg-[#00000061] mt-4"></div>  
</div>
        <div className="flex">
        <h2 className="font-black pt-1.5 font-serif">INEC data leak: Actor Emeka Ike threatens action against Wike's aide</h2>
                <div className="mt-4"><img src={img} alt="" width={250}/></div>

        </div>
        <p className=" pt-1.5 text-red-500">News</p>
        <hr />
          <div className="flex">
        <h2 className="font-black pt-1.5 font-serif">RCCG clarifies Adeboye's political stance, denies endorsing any party</h2>
                <div className="mt-4"><img src={img} alt="" width={250}/></div>

        </div>
        <p className="pt-1.5 text-red-500">News</p>
        <hr />
        <div className="flex">
        <h2 className="font-black pt-1.5 font-serif">2027 polls: CBN targets N2.83tn cash in private hands</h2>
               <div className="mt-4"><img src={img} alt="" width={250}/></div>

        </div>
        <p className="pt-1.5 text-red-500">Business & Economy</p>
        <hr />

<div className="flex">
        <h2 className="font-black pt-1.5 font-serif">FG scraps three-month terminal leave for civil servants</h2>
                <div className="mt-4"><img src={img} alt="" width={250}/></div>

        </div>
        <p className="pt-1.5 text-red-500">News</p>
        <hr />

       <div className="flex">
        <h2 className="font-black pt-1.5 font-serif">School abductions: Protest in Oyo, Ogun as NUT begins nationwide rally today</h2>
        <div className="mt-4"><img src={img} alt="" width={250}/></div>
        
        </div>
        <p className="pt-1.5 text-red-500 ">protest</p>
      </div>
      
      </div>
    </div>
  )
}

export default HomeHero
