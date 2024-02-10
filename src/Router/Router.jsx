import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main ";
import Home from "../pages/Home/Home/Home";
import Dashboard from "../Layout/Dashboard";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
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
            }, 
            /* admin root */
            {
                path: 'adminhome',
                element: <adminHome></adminHome>

            }
        ]
    }
  ]);