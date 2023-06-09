import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOuts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/SignIn/Login";
import SignUp from "../Pages/Signup/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
         path:'login',
         element:<Login></Login>
        },
        {
         path:'signUp',
         element:<SignUp></SignUp>
        }
      ]
    },
  ]);

  export default router;