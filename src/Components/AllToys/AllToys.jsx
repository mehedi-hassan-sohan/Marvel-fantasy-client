import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const AllToys = () => { 
    const [categories,setCategories] =useState([])  
    useTitle('All Toys')

    useEffect(()=>{
      fetch('http://localhost:5000/addToys')
      .then(res=>res.json())
      .then(data=>{
        setCategories(data)
       
      })
   
    },[]) 
    return (  
 
        <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center"> Here is All Toys</h1>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Seller</th>
            <th className="p-2">Toy Name</th>
            <th className="p-2">Sub-category</th>
            <th className="p-2">Price</th>
            <th className="p-2">Available Quantity</th>
            <th className="p-2"></th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td className="p-2 pl-10">{category.sellerName}</td>
              <td className="p-2 pl-10">{category.name}</td>
              <td className="p-2 pl-10">{category.subCategory}</td>
              <td className="p-2 pl-10">{category.price}</td>
              <td className="p-2 pl-10">{category.quantity}</td>
              <td className="p-2 pl-10">
               <Link to={`/viewDetails/${category._id}`}>
               <button className="bg-black hover:bg-purple-800 text-white font-bold py-2 px-4 rounded">
                  View Details
                </button>
               </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        
    )}

export default AllToys;