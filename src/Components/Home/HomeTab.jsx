import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const HomeTab = () => { 
  const [categories,setCategories] =useState([]) 

  useEffect(()=>{
    fetch('http://localhost:5000/addToys')
    .then(res=>res.json())
    .then(data=>{
      setCategories(data)
     
    })
 
  },[]) 
  // console.log(categories[0].subCategory)
    return ( 
      <div> 
          <div>
            <div className='text-center'> 
        <h1 className='text-3xl'>Marvel : Detective  Comic : Avengers  <br /> ALL Categories </h1>
        <hr className="border-2 border-black w-1/3 mx-auto mt-4 mb-10" />
              <Tabs>
    <TabList>
      <Tab>Marvel </Tab>
      <Tab>Detective Comic</Tab>
      <Tab>Avengers</Tab>
    </TabList>

    <TabPanel >
       <div className='md:flex m-10 mb-5 justify-around'>
       <h2><div className="card mb-10  h-[95%] w-96 bg-base-100 shadow-xl">
  <figure   className='h-[90%]'><img  className='w-1/2' src={categories[0]?.pictureUrl} /></figure>
  <div className="card-body text-left">
    <h2 className="card-title">Name: {categories[0]?.name}</h2>
    <p className='text-bold'>Price: {categories[0]?.price}</p> 
    <p>Rating {categories[0]?.rating}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View details</button>
    </div>
  </div>
</div></h2>
      <h2><div  className="card mb-10  h-[95%] w-96 bg-base-100 shadow-xl">
  <figure ><img  className='w-1/2'  src={categories[1]?.pictureUrl} /></figure>
  <div className="card-body text-left">
    <h2 className="card-title">Name: {categories[1]?.name}</h2>
    <p>Price: {categories[1]?.price}</p>
    <p>Rating: {categories[1]?.rating}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View details</button>
    </div>
  </div>
</div></h2>
      <h2><div className="card mb-10  h-[95%] w-96 bg-base-100 shadow-xl">
  <figure className='h-[90%]'><img className='w-1/2' src={categories[2]?.pictureUrl} /></figure>
  <div className="card-body text-left">
    <h2 className="card-title"> Name:{categories[2]?.name}</h2>
    <p>Price: {categories[2]?.price}</p>
    <p>Rating: {categories[2]?.rating}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View details</button>
    </div>
  </div>
</div></h2>
       </div>
    </TabPanel>
    <TabPanel>
    <div className='md:flex m-10 mb-5 justify-around'>
       <h2><div className="card mb-10  h-[95%] w-96 bg-base-100 shadow-xl">
  <figure   className='h-[90%]'><img  className='w-1/2' src={categories[3]?.pictureUrl} /></figure>
  <div className="card-body text-left">
    <h2 className="card-title">Name: {categories[3]?.name}</h2>
    <p className='text-bold'>Price: {categories[3]?.price}</p> 
    <p>Rating: {categories[3]?.rating}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View details</button>
    </div>
  </div>
</div></h2>
      <h2><div  className="card mb-10  h-[95%] w-96 bg-base-100 shadow-xl">
  <figure ><img  className='w-1/2'  src={categories[4]?.pictureUrl} /></figure>
  <div className="card-body text-left">
    <h2 className="card-title">Name: {categories[4]?.name}</h2>
    <p>Price: {categories[4]?.price}</p>
    <p>Rating: {categories[4]?.rating}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View details</button>
    </div>
  </div>
</div></h2>
      <h2><div className="card mb-10  h-[95%] w-96 bg-base-100 shadow-xl">
  <figure className='h-[90%]'><img className='w-1/2' src={categories[5]?.pictureUrl} /></figure>
  <div className="card-body text-left">
    <h2 className="card-title">Name: {categories[5]?.name}</h2>
    <p>Price: {categories[5]?.price}</p>
    <p>Rating: {categories[5]?.rating}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View details</button>
    </div>
  </div>
</div></h2>
       </div>
    </TabPanel>  
    <TabPanel> 
    <div className='md:flex m-10 mb-5 justify-around'>
       <h2><div className="card mb-10  h-[95%] w-96 bg-base-100 shadow-xl">
  <figure   className='h-[90%]'><img  className='w-1/2' src={categories[6]?.pictureUrl} /></figure>
  <div className="card-body text-left">
    <h2 className="card-title">Name: {categories[6]?.name}</h2>
    <p className='text-bold'>Price: {categories[6]?.price}</p> 
    <p>Rating {categories[6]?.rating}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View details</button>
    </div>
  </div>
</div></h2>
      <h2><div  className="card mb-10  h-[95%] w-96 bg-base-100 shadow-xl">
  <figure ><img  className='w-1/2'  src={categories[7]?.pictureUrl} /></figure>
  <div className="card-body text-left">
    <h2 className="card-title">Name:{categories[7]?.name}</h2>
    <p>Price: {categories[7]?.price}</p>
    <p>Rating: {categories[7]?.rating}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View details</button>
    </div>
  </div>
</div></h2>
      <h2><div className="card mb-10  h-[95%] w-96 bg-base-100 shadow-xl">
  <figure className='h-[90%]'><img className='w-1/2' src={categories[8]?.pictureUrl} /></figure>
  <div className="card-body text-left">
    <h2 className="card-title">Name:{categories[8]?.name}</h2>
    <p>Price: {categories[8]?.price}</p>
    <p>Rating {categories[8]?.rating}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View details</button>
    </div>
  </div>
</div></h2>
       </div>
    </TabPanel>
  </Tabs>

        </div>
        </div>
       
      </div>
        
    );
};

export default HomeTab;