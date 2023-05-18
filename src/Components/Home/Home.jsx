import React from 'react';

const Home = () => {
  return (
    <div className='mt-5 '>
      <div className="carousel  md:w-full w-[100vh]">
        <div id="item1" className="carousel-item w-full">
          <img src='https://img.freepik.com/free-vector/superhero-blank-border_1308-24972.jpg?w=1380&t=st=1684401989~exp=1684402589~hmac=fa28ea4c7841bcc254ea51e969a80e876eaa6578c08e6934faf295db6bb8608e' className="w-1/2 md:mx-auto" />
          <div className="overlay ">
            <h1 className='md:text-2xl'>Iron Man Mark XLIII Action Figure</h1>
            <p className=''>Unleash your imagination with this action-packed set of Marvel superheroes. <br /> Join Iron Man, Spider-Man, and the Hulk as they team up to save the world from <br /> supervillains. With detailed figures and accessories, you can create your own <br /> epic battles and heroic adventures.</p>
          </div>
        </div>
        <div id="item2" className="carousel-item md:w-full w-[100vh]">
          <img src='https://i.ibb.co/ZKW2GqV/three-toy-robots-are-table-one-which-is-robot-782419-9662.jpg' className="w-1/2 md:mx-auto" />
          <div className="overlay ">
            <h1 className='text-2xl'>Captain America Shield Roleplay Set</h1>
            <p className=''> Step into the world of Marvel with this collection of robot heroes. <br /> These robotic warriors are ready to defend the galaxy against any threat. <br /> With their advanced technology and incredible abilities,</p>

          </div>
        </div>
        <div id="item3" className="carousel-item md:w-full w-[100vh]">
          <img src="https://i.ibb.co/Dg7Ndct/kids-superheroes-vector-illustration-with-team-comic-cartoon-characters-dressed-1284-15220.jpg" className="w-1/2 md:mx-auto" />
          <div className="overlay">
            <h1 className='md:text-2xl text-center'>Guardians of the Galaxy Star-Lord Mask</h1>
            <p className=''> Blast off into outer space with these Marvel superheroes <br /> on an intergalactic adventure. <br /> Join Guardians of the Galaxy, Captain Marvel, <br /> and Nova as they battle cosmic threats and explore <br /> the mysteries of the universe. With their unique powers and teamwork, <br /> they are the cosmic champions the galaxy needs.</p>

          </div>
        </div>
        <div id="item4" className="carousel-item md:w-full w-[100vh]">
          <img src='https://i.ibb.co/8DNB68M/superheroes-outer-space-1308-25562.jpg' className="w-1/2 md:mx-auto" />
          <div className="overlay">
            <h1 className='md:text-2xl'>Iron Man Mark XLIII Action Figure</h1>
            <p className=''>Unleash your imagination with this action-packed set of Marvel superheroes. <br /> Join Iron Man, Spider-Man, and the Hulk as they team up to save the world from <br /> supervillains. With detailed figures and accessories, you can create your own <br /> epic battles and heroic adventures.</p>

          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
        <a href="#item3" className="btn btn-xs">3</a>
        <a href="#item4" className="btn btn-xs">4</a>
      </div>
      <div>
        <h1 className='text-4xl text-center mt-10 '> Meet Our avengers Heros </h1>
        <img className='relative md:ms-48 mt-10 rounded-xl' src="https://i.ibb.co/VqBC709/ENT-D100-Marvel-Brand-Page-Banner-2000x300px.jpg" alt="" />
      </div>

      <div className='ms-5 mb-10  md:flex mt-10  '>
        <div className='rounded-xl ms-6 '>
          <div className="card w-96 bg-white  rounded-2xl shadow-xl mb-5" >
            <figure><img className='w-[300px]' src='https://i.ibb.co/JRXPmP9/563342-B1667-1-300-Wx300-H-context-b-WFzd-GVyf-HJvb3-R8-NTU5-NTN8a-W1h-Z2-Uvan-Bl-Z3xo-Ym-Mva-GNk-Lz.jpg' alt="Shoes" /></figure>
            <div className="card-body bg-white">
              <h2 className="card-title">Marvel Avengers Assemble Titan Hero
              </h2>
              <p className='text-lg'>- Iron Man 30cm Action Figure </p>
              <p className='text-lg'>Price:$8</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div >
        <div className='rounded-xl ms-6 mt'>
          <div className="card w-96 bg-white  rounded-2xl shadow-xl mb-5" >
            <figure><img className='w-[300px]' src='https://i.ibb.co/fC2GTrH/553437-Primary-515-Wx515-H-context-b-WFzd-GVyf-Glt-YWdlc3w4-NDUw-MHxpb-WFn-ZS9qc-GVnf-Glt-YWdlcy9o-Z.jpg' alt="Shoes" /></figure>
            <div className="card-body bg-white">
              <h2 className="card-title">Marvel Legends The Falcon and the Winter Soldier </h2>
              <p> - Captain America (Sam Wilson) 15cm Figure</p>
              <p className='text-lg'>Price:$10</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className='rounded-xl ms-6 mt'>
          <div className="card w-96 bg-white  rounded-2xl shadow-xl mb-5" >
            <figure><img className='w-[300px]' src='https://i.ibb.co/YQCzcL6/544868-Primary-515-Wx515-H-context-b-WFzd-GVyf-Glt-YWdlc3w0-ODc4-Mnxpb-WFn-ZS9qc-GVnf-Glt-YWdlcy9o-N.jpg' alt="Shoes" /></figure>
            <div className="card-body bg-white">
              <h2 className="card-title">Marvel Avengers Blast Gear Titan Hero Series Figure</h2>
              <p> - Captain America Little warrior</p>
              <p className='text-lg'>Price:$30</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className='rounded-xl ms-6 mt'>
          <div className="card w-96 bg-white  rounded-2xl shadow-xl" >
            <figure><img src='https://i.ibb.co/DD9nJXK/544865-Primary-1200-Wx1200-H-context-b-WFzd-GVyf-Glt-YWdlc3w5-Nz-M0-OHxpb-WFn-ZS9qc-GVnf-Glt-YWdlcy9.jpg' className='w-[300px]' alt="Shoes" /></figure>
            <div className="card-body bg-white">
              <h2 className="card-title">Marvel Avengers Titan Hero Series Blast Gear</h2>
              <p>Figure - Hulk</p>
              <p className='text-lg'>Price:$10</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>


  );
};

export default Home;
