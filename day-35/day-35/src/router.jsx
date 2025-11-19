import { createBrowserRouter } from "react-router";
import Mainlayout from "./layouts/Mainlayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout/>,
    children: [
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/shop",
            element:<Shop/>
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
            path:"/signup",
            element:<SignUp/>
        }
    ]
  },
]);

export default router;