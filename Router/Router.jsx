import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom"; 
import Main from "../src/Layout/Main";
import Home from "../src/Components/Home/Home";
import Blog from "../src/Components/Blog/Blog";
import Login from "../src/Components/Login/Login";
import Register from "../src/Components/Register/Register";
import AddToys from "../src/Components/AddToys/AddToys";
import AllToys from "../src/Components/AllToys/AllToys";
import ViewDetails from "../src/Components/ViewDetails/ViewDetails";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>, 
      children:[ 
         { 
            path:'/' ,
            element:<Home></Home>
         },
         {
          path:'/blog',
          element:<Blog></Blog>
         },
         {
          path:'/login',
          element:<Login></Login>
         },
         {
          path:'/register',
          element:<Register></Register>
         },
          {
             path:'/addToys',
             element:<AddToys></AddToys> 

         },
          {
             path:'/allToys',
             element:<AllToys></AllToys>

         },
         {
          path:'/viewDetails/:id',
          element:<ViewDetails></ViewDetails>,
         
         }
      ]
    },
  ]); 

  export default router 