import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOuts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/SignIn/Login";
import SignUp from "../Pages/Signup/SignUp";
import OurClasses from "../Pages/OurClasses/OurClasses";
import Instructor from "../Pages/Instructors/Instructor";
import Dashboard from "../LayOuts/Dashboard";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import AddCart from "../Pages/Dashboard/AddCart/AddCart";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";
import AllClasses from "../Pages/Dashboard/AllClasses/AllClasses";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PayForm from "../Pages/Dashboard/Payment/PayForm";
import ErrorPage from "../Pages/ErrorPag/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
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
        },
        {
         path:'classes',
         element: <OurClasses></OurClasses>
        },
        {
         path:'instructors',
         element: <Instructor></Instructor>
        }
      ]
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'addClass',
          element:<AddClass></AddClass>
        },
        {
          path:'allClass',
          element:<AllClasses></AllClasses>
        },
        {
          path:'addCart',
          element:<AddCart></AddCart>
        },
        {
          path:'pay',
          element:<PayForm></PayForm>
        },
        {
          path:'payment',
          element:<Payment/>
        },
        {
          path:'allUsers',
          element:<AllUser></AllUser>
        }
      ]
    }
  ]);

  export default router;