import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Category from './Category';

const HomeTab = () => { 
  const [categories,setCategories] =useState([]) 

  useEffect(()=>{
    fetch('http://localhost:5000/categories')
    .then(res=>res.json())
    .then(data=>setCategories(data))

  },[])
    return ( 
      <div> 
        {
           categories.map(category=><Category key={category._id} category={category}> 

           </Category>)
        }
      </div>
        
    );
};

export default HomeTab;