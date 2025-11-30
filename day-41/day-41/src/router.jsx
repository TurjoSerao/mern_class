import { createBrowserRouter } from "react-router";
import MainLayouts from "./Layouts/MainLayouts";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/single-user/:id"
      }
    ],
  },
]);

export default router;