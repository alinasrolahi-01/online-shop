import { createBrowserRouter } from "react-router";

import RoutesLayout from "./components/RoutesLayout";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Blog from "./components/Blog/Blog";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";



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