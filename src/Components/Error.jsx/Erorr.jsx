import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    
    return (
        <div>
            
               <img className='img'  src='https://i.ibb.co/QCzjqKN/error-404-concept-illustration-114360-1811.jpg' alt="" />
               <Link className='text-xl font-medium  bg-slate-800 hover:text-teal-300 duration-1000' to='/'> <button  className=' button-container btn mt-40 mx-50%  bg-emerald-700-800 '>Back To home</button></Link>
            




        </div>
    );
};

export default Error;