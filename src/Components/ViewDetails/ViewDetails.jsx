import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const data = useLoaderData()  
    const {pictureUrl,name,sellerEmail,sellerName,subCategory,price,rating,quantity,description} = data 
    console.log(data );
    return (
        <div> 
            <div className=" mt-10 mx-auto bg-white rounded shadow-md">
      <img src={pictureUrl} alt={name} className=" mx-auto w-[300px] rounded-t" />
      <div className="p-4 ms-10">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <div className="text-gray-500 text-lg">Seller: {sellerName}</div>
        <div className="text-gray-500 text-lg">Seller Email: {sellerEmail}</div>
        <div className="text-gray-500 text-lg">Sub-category: {subCategory}</div>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-gray-800 font-bold">Price:${price}</div>
          <div className="flex items-center">
            <span className="text-yellow-500">Rating:{rating}</span>
            <svg className="w-4 h-4 fill-current text-yellow-500 ml-1" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 12l-4.09 2.547a1 1 0 01-1.456-1.054l.788-4.588-3.302-3.218a1 1 0 01.554-1.703l4.608-.67 2.062-4.175a1 1 0 011.794 0l2.062 4.175 4.608.67a1 1 0 01.554 1.703l-3.302 3.218.788 4.588a1 1 0 01-1.456 1.054L10 12z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="mt-4">
          <div className="text-gray-800"><span className='font-bold'>Available Quantity:</span> {quantity}</div>
          <div className="mt-2 text-gray-800"><span className='font-bold'>Description</span>{description}</div>
        </div>
        <div className="mt-4">
         <Link to='/'>
         <button className="px-4 py-2 bg-black text-white rounded hover:bg-blue-600">Back to Home</button>
         </Link>
        </div>
      </div>
    </div> 
        </div>
    );
};

export default ViewDetails;