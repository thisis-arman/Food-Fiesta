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
import ErrorPage from "../Components/Utils/ErrorPage";
import Contact from '../Components/Pages/Contact';
import About from '../Components/Pages/About';



    
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Main/>,
          errorElement:<ErrorPage/>,
          children:[
            {
                path:'/',
                element:<Home/>,
                children:[
                  /* {
                    path:'/recipes',
                    element:<ViewRecipes/>

                  }, */
                  
                ]
            },
            {
              path:'/recipes/:id',
              element:<ViewRecipes/>,
              loader:({params}) =>fetch(`https://foodfiesta-server-thisis-arman.vercel.app/chefrecipes/${params.id}`)
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
            },
            {
              path:'/contact',
              element:<Contact/>
            },
            {
              path:'/about',
              element:<About/>
            }

          ]
        },

    ]);

export default router;