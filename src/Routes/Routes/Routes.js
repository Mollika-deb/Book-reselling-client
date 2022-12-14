import { createBrowserRouter } from "react-router-dom";
import Error from "../../Error/Error";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AllCategory from "../../Pages/AllCategory/AllCategory";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import AllUsers from "../../Pages/NewDashboard/AllUsers/AllUsers";
import MyOrders from "../../Pages/NewDashboard/MyOrders/MyOrders";
import NewDashboard from "../../Pages/NewDashboard/NewDashboard/NewDashboard";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import AdminRouts from "../AdminRouts/AdminRouts";



 const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {

                path:'/*',
                element: <Error></Error>

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/categories/:id',
                element: <PrivateRoute><AllCategory></AllCategory></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-12-server-blush.vercel.app/Books?id=${params.id}`)
            },
          
            
           

        ],

    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path: '/dashboard',
               element:<NewDashboard></NewDashboard>
            },
            {
                path: '/dashboard/myorder',
               element:<MyOrders></MyOrders>
            },
            {
                path: '/dashboard/allusers',
                element:<AllUsers></AllUsers>
            }
        ]
    }
     
    //  {
    //      path: '/dashboard',
    //      element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    //      childre:[
           
    //      ]
    //  },
])
export default router