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
import Error from "../src/Components/ErrorPage/Erorr";
import MyToys from "../src/Components/MyToys/MyToys";
import UpdatedToys from "../src/Components/UpdateToys/UpdatedToys";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>, 
      errorElement:<Error></Error>,
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
          loader:({params})=>fetch(`http://localhost:5000/addToys/${params.id}`)
         
         },
         {
          path:'/myToys',
          element:<MyToys></MyToys>
         },
         {
          path:'/updated/:id',
          element:<UpdatedToys></UpdatedToys>,
          loader:({params})=>fetch(`http://localhost:5000/addToys/${params.id}`)
         }
      ]
    },
  ]); 

  export default router 