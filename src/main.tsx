import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Isloading from './isloading/Isloading'
import { RouterProvider } from 'react-router-dom'
import { element } from './routes/Routes'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<Isloading/>}>
    <RouterProvider router={element} />
    </Suspense>
  </StrictMode>,
)
