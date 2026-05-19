import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import { lazy } from "react";
import EnrollComp from "../pages/enroll/EnrollComp";


const Homecomp = lazy (() => import("../pages/home/Homecomp"))
export const element = createBrowserRouter([
    {
        path: "/",
          element: <MainLayout />,
        children: [
            { path: '/',  element: <Homecomp /> },
            { path: 'enroll',  element: <EnrollComp /> }
        ]
        

    }


    
])
