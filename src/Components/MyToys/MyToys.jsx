import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToys = () => {
  useTitle('My Toys')
  const [mytoys, setMytoys] = useState([])
  const [remaining, setRemaining] =useState([])
  

  const handleDeleted = _id => {
    console.log(_id);
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {


            fetch(`http://localhost:5000/addToys/${_id}`  , {
                method: 'DELETE'
            })
                .then(res=> res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your Coffee has been deleted.',
                            'success'
                        )
                        const remaining = mytoys.filter(toy => toy._id !== _id);
                        setRemaining(remaining);
                    }
                })

        }
    })
}


  const { userInfo } = useContext(AuthContext)
  console.log(userInfo);
  const url = `http://localhost:5000/addToysGetByEmail?email=${userInfo?.email}`

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setMytoys(data))

  }, [])
 
 
  return (
    <div>
      <div>
        <div className="container mx-auto p-4">
          <h1 className="text-5xl font-bold mb-4 text-center">All Toys</h1>
          <hr className="border-2 border-black w-1/3 mx-auto mt-4 mb-10" />

          <table className="w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 ">Seller</th>
                <th className="p-2 ">Toy Name</th>
                <th className="p-2 ">Sub-category</th>
                <th className="p-2 ">Price</th>
                <th className="p-2 ">Available Quantity</th>
                <th className="p-2 ">Action</th>
              </tr>
            </thead>
            <tbody>
              { mytoys.map((mytoy) => (
                <tr key={mytoy._id}>
                  <td className="p-2 pl-22">{mytoy.sellerName}</td>
                  <td className="p-2 pl-32">{mytoy.name}</td>
                  <td className="p-2 pl-28">{mytoy.subCategory}</td>
                  <td className="p-2 pl-28">{mytoy.price}</td>
                  <td className="p-2 pl-20">{mytoy.quantity}</td>
                  <td className="p-2"> 

                    <button onClick={()=>handleDeleted(mytoy._id)} className="btn btn-danger font-bold  rounded ml-2">
                      Delete
                    </button>
                    <Link to={`/updated/${mytoy._id}`}>
                    <button className="btn btn-primary font-bold  rounded ml-2">
                      Update
                    </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;