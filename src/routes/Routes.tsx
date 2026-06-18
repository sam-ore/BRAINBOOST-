import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import { lazy } from "react";
import Newscomp from "../pages/news/Newscomp";
import Metrocomp from "../pages/metroplus/Metrocomp";
import FeaturesComp from "../pages/features/FeaturesComp";
// import BusinessComp from "../pages/Business/BusinessComp";
import SportComp from "../pages/sport/SportComp";
import PunchComp from "../pages/punchlite/PunchComp";
import Editcomp from "../pages/editorial/Editcomp";
import VideoComp from "../pages/video/VideoComp";
import ColomComp from "../pages/columns/ColomComp";
import ConComp from "../pages/continuation/ConComp";
// import AboutUs from "../pages/enroll/AboutUs";
// import AboutUsComp from "../pages/enroll/AbouttUsComp";


const Homecomp = lazy (() => import("../pages/home/Homecomp"))
export const element = createBrowserRouter([
    {
        path: "/",
          element: <MainLayout />,
        children: [
            { path: '/',  element: <Homecomp /> },
            { path: 'news',  element: <Newscomp/> },
            { path: 'metro',  element: <Metrocomp /> },
            { path: 'features',  element: <FeaturesComp /> },
            { path: 'sport',  element: <SportComp /> },
            { path: 'punch',  element: <PunchComp /> },
            { path: 'Editorial',  element: <Editcomp /> },
            { path: 'column',  element: <ColomComp /> },
            { path: 'video',  element: <VideoComp /> },
            { path: 'continuation',  element: <ConComp /> },
        ]
        

    }


    
])

