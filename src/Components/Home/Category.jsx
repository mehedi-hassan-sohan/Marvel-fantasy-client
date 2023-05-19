import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const Category = ({category}) => {
  const {} = category 
  
  console.log(category);
    return (
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

    <TabPanel>
      <h2>{}</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>  
    <TabPanel> 
        <h2>content 3</h2> 
    </TabPanel>
  </Tabs>

        </div>
        </div>
    );
};

export default Category;