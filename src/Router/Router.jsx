import {
    createBrowserRouter,
  } from "react-router-dom";
  
import Main from "../Layout/Main ";
import Home from "../pages/Home/Home/Home";
import Dashboard from "../Layout/Dashboard";
import CategoryProduct from "../pages/Home/Share/CategoryProduct/CategoryProduct";
import Login from "../pages/Home/Share/Login/Login";
import SignUp from "../pages/Home/Share/SignUp/SignUp";
import ProdutCard from "../pages/Home/Share/ProdutCard/ProdutCard";
import PrivateRoute from "./PrivateRoute";
import OutSeen from "../pages/Home/Share/OutSeen/OutSeen";
import MyCab from "../pages/User/MyCab/MyCab";
import AllUsers from "../pages/User/AllUsers/AllUsers";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/product',
            element: <PrivateRoute><ProdutCard></ProdutCard></PrivateRoute>
        },
        {
            path: '/productCategory',
            element: <CategoryProduct></CategoryProduct>
        },
        
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: '/outseen',
          element: <PrivateRoute><OutSeen></OutSeen></PrivateRoute>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        {
          path: 'login',
          element: <Login></Login>
        }
      ]
    },

    {
      element:  <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        path: 'dashboard',
        children: [
            /* user root */
            {
                path: 'userhome',
                element: <userHome></userHome>
            },
            {
                path: 'mycab',
                element: <MyCab></MyCab>
            },

            /* admin root */
            {
                path: 'allusers',
                element: <AllUsers></AllUsers>

            }
        ]
    }
  ]);