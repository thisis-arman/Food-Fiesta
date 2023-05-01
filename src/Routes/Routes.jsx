import React from 'react';
import {
    createBrowserRouter
  } from "react-router-dom";
import Main from '../Components/Layout/Main';
import Home from '../Components/Pages/Home/Home';


    
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Main/>,
          children:[
            {
                path:'/',
                element:<Home/>
            }
          ]
        },

    ]);

export default router;