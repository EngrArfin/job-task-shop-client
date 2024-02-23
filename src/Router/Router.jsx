import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main ";
import Home from "../pages/Home/Home/Home";
import Dashboard from "../Layout/Dashboard";
import ProdutCard from "../pages/Home/Share/ProdutCard/ProdutCard";
import CategoryProduct from "../pages/Home/Share/CategoryProduct/CategoryProduct";
import Login from "../pages/Home/Share/Login/Login";

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
            element: <ProdutCard></ProdutCard>
        },
        {
            path: '/productCategory',
            element: <CategoryProduct></CategoryProduct>
        },
        {
          path: 'signup',
          element: <Login></Login>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'admin',
          element: <Login></Login>
        }
      ]
    },

    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            /* user root */
            {
                path: 'userhome',
                element: <userHome></userHome>
            }
            /* admin root */
            /* {
                path: 'adminhome',
                element: <adminHome></adminHome>

            } */
        ]
    }
  ]);