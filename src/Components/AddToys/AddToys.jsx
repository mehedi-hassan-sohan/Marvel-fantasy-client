import React from "react";

const AddToys = () => {
  return (
    <div className=" p-6 bg-white rounded shadow-md ">
      <h2 className="text-2xl font-bold mb-4">Add a Toy</h2>
      <form >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
        <div className="mb-4">
          <label htmlFor="pictureUrl" className="block mb-2 font-medium">
            Picture URL of the toy:
          </label>
          <input
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
            Name:
          </label>
          <input
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
            id="subCategory"
            name="subCategory"
            className="w-full px-3 py-2 border rounded-md"
            required
          >
            <option value="">Select a sub-category</option>
            <option value="Math Toys">Math Toys</option>
            <option value="Language Toys">Language Toys</option>
            <option value="Science Toys">Science Toys</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block mb-2 font-medium">
            Price:
          </label>
          <input
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
  className=" py-2 px-36 bg-blue-500 text-white rounded-md hover:bg-blue-600"
>
  Submit
</button>
</div> 
        </div>
       
      </form>
    </div>
  );
};

export default AddToys;
