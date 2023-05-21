import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdatedToys = () => { 
    const {userInfo} = useContext(AuthContext) 
    const toysInfo =useLoaderData() 
    const  { _id,pictureUrl,name,sellerEmail,sellerName,subCategory,price,rating,quantity,description} =toysInfo
    const handleUpdate=event=>{
        event.preventDefault()
        const form = event.target 
        const  pictureUrl = form.pictureUrl.value
        const name  = form.name.value 
        const  sellerName = form.sellerName.value 
        const  sellerEmail = form.sellerEmail.value 
        const  subCategory =form.subCategory.value 
        const  price      = form.price.value 
        const rating = form.rating.value
        const quantity = form.quantity.value
        const description = form.description.value 
        form.reset() 
    
       console.log(pictureUrl,name,sellerEmail,sellerName,subCategory,price,rating,quantity,description);  
       const updatedToys = {pictureUrl,name,sellerEmail,sellerName,subCategory,price,rating,quantity,description}
         

       fetch(`http://localhost:5000/addToys/${_id}`,{
        method:'PUT',
        headers:{
            'content-type' :' application/json'
        },
        body :JSON.stringify(updatedToys)})
        .then(res=>res.json())  
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title:"Success",
                    text:'Toys Updated successfully',
                    icon:'success',
                    confirmButtonText:"cool"
    
                })
        }
        
       }) 
    
    
    }  
    
    return (
        <div className=" p-6 bg-white rounded shadow-md ">
            <h2 className="text-2xl font-bold mb-4 text-center">Updated a Toy</h2>
            <form onSubmit={handleUpdate}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
                    <div className="mb-4">
                        <label htmlFor="pictureUrl" className="block mb-2 font-medium">
                            Picture URL of the toy:
                        </label>
                        <input 
                        defaultValue={pictureUrl}
                            type="text"
                            id="pictureUrl"
                            name="pictureUrl"
                            className="w-full px-3 py-2 border rounded-md"
                            placeholder="Enter the picture URL"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2 font-medium">
                            Product Name:
                        </label>
                        <input 
                        defaultValue={name}
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-3 py-2 border rounded-md"
                            placeholder="Enter the name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="sellerName" className="block mb-2 font-medium">
                            Seller Name:
                        </label>
                        <input  
                        defaultValue={sellerName}
                            type="text"
                            id="sellerName"
                            
                            name="sellerName"
                            className="w-full px-3 py-2 border rounded-md"
                            placeholder="Enter the seller name"
                        />
                    </div>
                    <div className="mb-4"> 
                    
                        <label htmlFor="sellerEmail" className="block mb-2 font-medium">
                            Seller Email:
                        </label>
                        <input 
                            type="email"
                            id="sellerEmail"
                            name="sellerEmail" 
                            value={userInfo?.email}
                            className="w-full px-3 py-2 border rounded-md"
                            placeholder="Enter the seller email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="subCategory" className="block mb-2 font-medium">
                            Sub-category:
                         
                        </label>
                        <select 
                        defaultValue={subCategory}
                            id="subCategory"
                            name="subCategory" 
                            className="w-full px-3 py-2 border rounded-md"
                            required
                        > 
                        
                            <option value="">Select a sub-category</option>
                            <option value="Avenger">Avenger</option>
                            <option value="DC">DC</option>
                            <option value="Marvel">Marvel</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="block mb-2 font-medium">
                            Price:
                        </label>
                        <input 
                        defaultValue={price}
                            type="number"
                            id="price"
                            name="price"
                            className="w-full px-3 py-2 border rounded-md"
                            placeholder="Enter the price"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="rating" className="block mb-2 font-medium">
                            Rating:
                        </label>
                        <input 
                        defaultValue={rating}
                            type="number"
                            id="rating"
                            name="rating"
                            className="w-full px-3 py-2 border rounded-md"
                            placeholder="Enter the rating"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="quantity" className="block mb-2 font-medium">
                            Available Quantity:
                        </label>
                        <input 
                         
                        defaultValue={quantity}
                            type="number"
                            id="quantity"
                            name="quantity"
                            className="w-full px-3 py-2 border rounded-md"
                            placeholder="Enter the available quantity"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block mb-2 font-medium">
                            Detail Description:
                        </label>
                        <textarea  
                        defaultValue={description}
                            id="description"
                            name="description"
                            className="w-full px-3 py-2 border rounded-md"
                            placeholder="Enter the detail description"
                            required
                        ></textarea>
                    </div>
                </div>

                <div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className=" py-2 px-36 bg-black text-white rounded-md hover:bg-blue-600"
                        >
                            Updated
                        </button>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default UpdatedToys;