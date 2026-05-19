import img1 from "../../assets/images/close.png"
import img2 from "../../assets/images/vol-C2H39NQB.png"
import img3 from "../../assets/images/DWC-Logo-ClaExIxJ.png"
import img4 from "../../assets/images/ekiti-logo-DOQxa11l.jpg"
import img5 from "../../assets/images/myhealthsureng-logo-icon-D1BKVVlz.png"
import img6 from "../../assets/images/menu (1).png"


const Features = () => {
  return (
    <div className="md:p-15 ">
      <div className="inner-container">
<h2 className="text-center pt-6">Features</h2>
<h1 className="text-center text-4xl font-semibold">What make us different</h1>
<p className="text-base max-w-4xl text-center md:pl-50 mt-3.5">Brainboost academy combines experienced instructors, detailed study materials and, flexible scheduling to fits your life. We focus on that works</p>
<div className="md:flex pt-7 gap-12 mt-2.5 p-15">

  <div className="">
<img src={img1} alt="" width={50} className="ml-30"/>
<div className="">
<h1 className="text-center max-w-sm text-2xl font-semibold">Expert tutors who know the exams</h1>
<p className="text-center">Our instrctros have years of experience teaching JAMB,WACE AND NECO</p>
</div>
</div>

<div className="  ">
<img src={img6} alt="" width={50} className="ml-30"/>
<div className="">
<h1 className="text-center max-w-89 text-xl font-semibold ">Complete study materials and resoures</h1>
<p className="text-center mt-1.5">Access everything you need in one place,from note practice test</p>
</div>
</div>


<div className=" ">
<img src={img1} alt=""  width={50}    className="ml-30"/>
 <div className="">
<h1 className="text-center text-xl font-semibold">Learn whenever and wherever you want</h1>
<p className="text-center mt-1.5">Study at your own place with our flexible online platform</p>
</div>


</div>
    </div>
    <div className=" text-center ">
<button className="  border-gray-600 bg-transparent px-3.5 rounded-md border-solid border-2">Explore</button>
</div>

<div className="mt-46">
<h2 className="text-center text-3xl">Ready to succeed?</h2>
<p className="text-center mt-3.5">Join thousands of student who pass their exam with Brainboost Academy</p>
<div className="text-center gap-10 mt-3.5 flex md:pl-125">
<button className="bg-[#1F6FEB] px-3 rounded-md text-white">Enroll</button>
<button className="px">Trial</button>
</div>
<div className="flex md:gap-30 mt-10">
<img src={img2} alt="" width={80}/>
<img src={img3} alt="" width={80}/>
<img src={img4} alt="" width={80}/>
<img src={img5} alt="" width={80}/>
<img src={img4} alt="" width={80}/>
<img src={img2} alt="" width={80}/>

<img src="" alt="" />
<img src="" alt="" />
</div>
</div>
</div>
    </div>
  )
}

export default Features;