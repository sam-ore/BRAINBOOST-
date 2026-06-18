import advert from "../../assets/images/sceenshot.png"
import adver from "../../assets/images/Screenshot_2-6-2026_115322_www.youtube.com_.webp"
import n01 from "../../assets/images/no2.webp"
import no4 from "../../assets/images/n07.webp"
import no2 from "../../assets/images/no5.webp"
import no3 from "../../assets/images/no4.webp"
import no1 from "../../assets/images/no3.webp"


const Process = () => {
  return (
    <div className="px-17 ">
    <div className="">
      <img src={advert} alt="" />
    </div>


<div className="bg-gray-200 mt-9 p-7 rounded-lg">
  <div className="flex items-center gap-2">
    <div className="w-6 h-6 bg-red-600"></div>
  <span className="font-serif">Top Video</span>
  <div className="h-px w-235 bg-[#00000061] "></div>
</div>
    <div className="flex gap-4 overflow-x-auto pt-5 ">
  <div className="min-w-[230px] h-40 rounded-lg relative w-64"><img src={adver} alt="" />
  <div className="relative bottom-23 left-2 text-white font-bold">
    So This Happened (EP 401) reviews: U.S. commits ₦5bn to document religious freedom abuses
  </div>
  </div>
  <div className="min-w-[280px]  h-0 rounded-lg"><img src={n01} alt="" />
  <div className="relative bottom-20 left-2 text-white font-bold">So This Happened (EP 401) reviews: Families still await return of abducted Oyo pupils</div>
  </div>
  <div className="min-w-[280px]   h-60 rounded-lg"><img src={no1} alt="" /></div>
  <div className="min-w-[280px]  h-40 rounded-lg"><img src={no3} alt="" /></div>
  <div className="min-w-[280px]  h-40 rounded-lg"><img src={no2} alt="" /></div>
  <div className="min-w-[280px]  h-40 rounded-lg"><img src={no4} alt="" /> </div>
</div>

<div className="text-center">
  <button className="bg-red-500 text-white px-9 py-3 rounded-2xl mt-3"><a href="">View More</a></button>
</div>
</div>
</div>
  )
}

export default Process
