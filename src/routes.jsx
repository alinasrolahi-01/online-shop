import { createBrowserRouter } from "react-router";

import RoutesLayout from "./layouts/RoutesLayout";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";



const router = createBrowserRouter([
  {
    path: "/",
    element: <RoutesLayout />,
    children: [
        {
            index : true,
            element: <Home/>
        } ,
        {
            path: "shop",
            element: <Shop/>
        },
        {
            path: "blog",
            element: <Blog/>
        },
        {
            path: "about-us",
            element: <About/>
        },
        {
            path: "contact-us",
            element: <Contact/>
        }
    ]
  },
]);


export default router