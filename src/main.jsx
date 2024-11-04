import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Launch from './pages/launch/launch.jsx'
import Error from './pages/error/error.jsx'
import AboutUs from './pages/aboutUs/aboutUs.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Launch />} ,
      { path: '/about-us', element: <AboutUs />}
      // { path: 'pathname', element: componentName (don't forget to import first)>},
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
