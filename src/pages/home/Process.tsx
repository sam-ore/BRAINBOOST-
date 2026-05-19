import img1 from "../../assets/images/abinash-jothimani-P4KX6qSaBcY-unsplash.jpg"
import img2 from "../../assets/images/blaz-photo-zMRLZh40kms-unsplash.jpg"
import img3 from "../../assets/images/heroBg2-C-mjBBW2.jpg"

const Process = () => {
  return (
    <div className="bg-[#1B1F1E] text-white md:p-15">
      <div className="inner-container">
      <div className="text-center">
      <h2>Process</h2>
      <h1 className="text-4xl font-semibold">How we prepare you</h1>
      <p className="mt-1.5 text-sm">Follow our structured approach to exam success</p>
</div>
<div className=" gap-5 pt-3.5 md:gap-6  md:flex  ">

      <div className=" border-[#3D4040] bg-transparent rounded-3xl border-solid border-2 ">
      <img src={img3} alt="" width={400} className="rounded-t-3xl"/>
      <div className="m-4">
      <h2>Step</h2>
      <h1 className="text-2xl">Assess your level</h1>
      <p>We eveluate your current knowledge and identify weak areas</p>
      <button className="mt-16"><a href="/enroll">Next</a></button>
      </div>
      </div>


<div className="border-[#3D4040] bg-transparent rounded-3xl border-solid border-2  ">
      <img src={img2} alt="" width={400} className="rounded-t-3xl"/>
      <div className="m-4">
      <h2>Step</h2>
      <h1 className="text-2xl">Learn core concepts</h1>
      <p>Master the essential topic tested in your exams</p>
      <button className="mt-5">Next</button>
      </div>
      </div>


<div className=" border-[#3D4040] bg-transparent rounded-3xl border-solid border-2  ">
      <div className="flex gap-2.5">
      
      <img src={img1} width={130}   alt="" className="rounded-l-3xl"/>
      
      <div className="mt-20">
      <h2>step</h2>
      <h1 className="text-3xl">Practice with real exams questions</h1>
      <p className="mt-1.5">Build confidence through repeated practice and feedback</p>
      <button className="mt-5">Next</button>
      </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Process