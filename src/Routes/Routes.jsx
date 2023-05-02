import React from 'react';
import {
    createBrowserRouter
  } from "react-router-dom";
import Main from '../Components/Layout/Main';
import Home from '../Components/Pages/Home/Home';
import Login from '../Components/Pages/Login/Login';
import Register from '../Components/Pages/Register/Register';
import ViewRecipes from '../Components/Pages/ViewRecipes/ViewRecipes';
import Blog from '../Components/Pages/Blog/Blog';


    
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Main/>,
          children:[
            {
                path:'/',
                element:<Home/>,
                children:[
                  /* {
                    path:'/recipes',
                    element:<ViewRecipes/>

                  }, */
                  {
                    path:'/recipes/:id',
                    element:<ViewRecipes/>
                  }
                ]
            },
            {
              path:'/login',
              element:<Login/>
            },
            {
              path:'/register',
              element:<Register/>
            },
            {
              path:'/blog',
              element:<Blog/>
            }

          ]
        },

    ]);

export default router;