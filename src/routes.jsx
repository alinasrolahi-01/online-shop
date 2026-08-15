import { createBrowserRouter } from "react-router";

import RoutesLayout from "./layouts/RoutesLayout";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Auth from "./pages/Auth/Auth";
import DashboardLayout from "./pages/Dashboard/DashboardLayout";
import PrivateRoute from "./components/common/PrivateRoute";

import HomeDashboard from "./pages/Dashboard/HomeDashboard/HomeDashboard";
import OrderDashboard from "./pages/Dashboard/OrderDashboard/OrderDashboard"
import ProductsDashboard from "./pages/Dashboard/ProductsDashboard/ProductsDashboard"
import CustomerDashboard from "./pages/Dashboard/CustomerDashboard/CustomerDashboard";
import AnalysisDashboard from "./pages/Dashboard/AnalysisDashboard/AnalysisDashboard";
import SettingDashboard from "./pages/Dashboard/SettingDashboard/SettingDashboard"
import NotFound from "./pages/NotFound/NotFound";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RoutesLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "shop",
                element: <Shop />
            },
            {
                path: "blog",
                element: <Blog />
            },
            {
                path: "about-us",
                element: <About />
            },
            {
                path: "contact-us",
                element: <Contact />
            },
            {
                path: "*",
                element: <NotFound />
            }

        ]
    },
    {
        path: "auth",
        element: <Auth />
    },
    {
        path: "dashboard",
        element: (
            <PrivateRoute>
                <DashboardLayout />
            </PrivateRoute>
        ),
        children: [
            {
                index: true,
                element: <HomeDashboard/>
            },
            {
                path: "order",
                element: <OrderDashboard/>
            },
            {
                path: "product",
                element: <ProductsDashboard/>
            },
            {
                path: "customer",
                element: <CustomerDashboard/>
            },
            {
                path: "analysis",
                element: <AnalysisDashboard/>
            },
            {
                path: "setting",
                element: <SettingDashboard/>
            }
        ]
    }
]);


export default router