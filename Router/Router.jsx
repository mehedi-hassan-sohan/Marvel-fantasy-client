import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom"; 
import Main from "../src/Layout/Main";
import Home from "../src/Components/Home/Home";
import Blog from "../src/Components/Blog/Blog";
import Login from "../src/Components/Login/Login";
import Register from "../src/Components/Register/Register";

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
         }
      ]
    },
  ]); 

  export default router 