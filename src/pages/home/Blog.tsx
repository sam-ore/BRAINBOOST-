import img from "../../assets/images/vitaly-gariev-NGLWZV4xOPg-unsplash.jpg"
import img2 from "../../assets/images/kimberly-farmer-lUaaKCUANVI-unsplash.jpg"
import img3 from "../../assets/images/heroBG1-cjKk_QmE.jpg"

const Blog = () => {
  return (
    <div className="bg-[#D9D9D9] md:pl-28">
      <div className="inner-container">
<h2 className="text-center pt-6">Blog</h2>
<h1 className="text-center text-4xl font-semibold">Latest exam tip</h1>
<p className="text-center">Read Strategies and insight from our community</p>
<div className="md:flex pt-7 gap-6">

  <div className=" border-gray-600 bg-transparent rounded-3xl border-solid border-2 md:w-80 h-96    pb-30">
<img src={img} alt="" className="rounded-t-3xl"/>
<div className="p-5">
<div className="flex gap-2.5 ">
<span className="bg-gray-400  px-3.5 rounded-md">Tips</span>
<h2>8 min read</h2>
</div>
<h1 className="pt-1.5 text-xl font-semibold">How to tackle JAMB mathematics</h1>
<p>Discover proven techniques for solving complex problems quickly</p>
<button className="mt-4"><a href="">Read more</a></button>
</div>
</div>

<div className=" border-gray-600 bg-transparent rounded-3xl border-solid border-2 gap-80 md:w-80 h-96">
<img src={img2} alt="" className="rounded-t-3xl"/>
<div className="p-5 pt-2.5">
<div className="flex gap-2.5">
<span className="bg-gray-400  px-3.5 rounded-md">Stories</span>
<h2>6 min read</h2>
</div>
<h1 className="pb text-xl font-semibold ">From struggling to scoring distinctions in WAEC</h1>
<p className="">Discover proven techniques for solving complex problems quickly</p>
<button className="mt-1.5"><a href="">Read more</a></button>
</div>
</div>


<div className=" border-gray-600 bg-transparent rounded-3xl border-solid border-2 gap-9 md:w-85 h-96 ">
<img src={img3} alt="" className="rounded-t-3xl"/>
 <div className="p-5">
<div className="flex gap-2.5 ">
 
<span className="bg-gray-400  px-3.5 rounded-md">Guides</span>
<h2>7 min read</h2>
</div>
<h1 className="pt-1.5 text-xl font-semibold">NECO preparation timeline and study plan</h1>
<p>Create a realistic schedule that cover all subject</p>
<button className="mt-5"><a href="/enroll">Read more</a></button>
</div>


</div>
    </div>
    <div className="text-center animate-pulse">
<button className="m-24  border-gray-600 bg-transparent px-3.5 rounded-md border-solid border-2">All posts</button>
</div>
</div>
    </div>
  )
}

export default Blog