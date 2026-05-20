import { useEffect, useState } from "react";

import { Header } from "../../component";
import img1 from "../../assets/images/headway-5QgIuuBxKwM-unsplash.jpg"
import img2 from "../../assets/images/sunday work.webp"
import img3 from "../../assets/images/vitaly-gariev-NGLWZV4xOPg-unsplash.jpg"


const slides = [
  
  {
    header: <Header/>, 
    image: img2,
    title: "Exel in JAMB, WAEC AND NECO",
    desc: "These exam decide your path forward  Brainboost Academy teaches you what matters, shows you how to think like the test makers, and build you the confidence you need to perform when it counts",
  },
  {
    header: <Header />,
    image: img3,
    title: "Practice Questions",
    desc: "Get real exam experience",
  },
  {
    header: <Header />,
    image: img1,
    title: "Track Your Progress",
    desc: "Improve every day",
  },
  

];
       

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

  
    return () =>  clearInterval(interval);
   

  }, []);

  return (

    <div className="relative w-full h-150 overflow-hidden">
      {slides.map((slide, index) => (
      
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1600 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
        
          <img
            src={slide.image}
            className="w-full h-full object-cover"
            alt=""
          />
         
        
          <div className="absolute inset-0 bg-black/80">
   
<header className="bg-amber-200">
              {/* {slide.header } */}
            </header>
      
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
           
            <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-lg mt-26">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl  max-w-3xl mb-4 justify-center ">
              {slide.desc}
            </p>
            <div className="flex gap-8 mt-8 ">
     <button className="bg-yellow-500 px-6 py-2 hover:w-0.5 md:hover">Find Out</button>
     <button className="bg-[#CACCFD]  px-6 py-2 text-black">Read More</button>
    </div>
    <div className="flex  gap-220">
    <div className="mt-35 gap-3 flex">
    <span className="bg-[#CACCFD] text-[#CACCFD] animate-spin ">bba</span>
    <span className="bg-[#CACCFD] text-[#CACCFD] animate-spin">bba</span>
    <span className="bg-[#CACCFD] text-[#CACCFD] animate-spin">BBA</span>
   </div>

   <div className="mt-35 gap-3 flex">
    <span className="bg-yellow-500 text-yellow-500 animate-spin ">bba</span>
    <span className="bg-yellow-500 text-yellow-500 animate-spin">bba</span>
    <span className="bg-yellow-500 text-yellow-500 animate-spin">bba</span>
   </div>
   </div>
          </div>
           
        </div>
        </div>
      ))}
    </div>
  );
}