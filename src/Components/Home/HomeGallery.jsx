import React from 'react';
import { FaHeart } from 'react-icons/fa';
import HomeTab from './HomeTab';

const HomeGallery = () => {
    return (
        <div> 
            <div className='text-4xl text-center'>
                Here is Our Gallery Choice <br />
                Your Favorite Toy  
                <hr className="border-2 border-black w-1/3 mx-auto mt-4 mb-10" />
            </div>
           <div >
           <div className="  md:grid grid-cols-4 gap-5 md:m-20">
                <div className="border-2  mb-10  shadow-md ">
                    <img className="  mx-auto" src="https://i.ibb.co/tqYF3B0/557510-WOLV-Primary-300-Wx300-H-context-b-WFzd-GVyf-Glt-YWdlc3wx-Nz-E5-MHxpb-WFn-ZS9qc-GVnf-Glt-YWdl.jpg" alt="Image 1"/>
                    <h1 className="text-2xl font-bold p-5">Iron Man Mark XLIII Action Figure</h1>
                    <p className='mt-2'>This action figure depicts Iron Man in his Mark XLIII armor. It features intricate detailing and articulation, allowing you to pose the figure in various action poses. It's a must-have for Iron Man fans and collectors.</p> 
                    <FaHeart className=' ms-80 mt-7' fontSize='30px'></FaHeart>
                </div>
                <div className="border-2  mb-10 shadow-md">
                    <img className='mx-auto' src="https://www.thetoyshop.com/medias/550921-21555-Primary-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MDY2N3xpbWFnZS9qcGVnfGltYWdlcy9oMzcvaDM0Lzk1NDE2Mjk0MTEzNTguanBnfGZhOWUwYmIzYzJlNTIzZmE1MGFkZTQwYzM5MDkwMDA2MzZhYjI3MTM4OGNkOTdkNmQxMWRhZGM0MDM4MmQ2M2I" alt="Image 2"/>
                    <h1 className="text-2xl font-bold p-5">Captain America Shield Replica</h1>
                    <p className='mt-2'>This replica of Captain America's iconic shield is a high-quality collectible. It is designed to resemble the shield seen in the movies, with accurate detailing and sturdy construction. You can display it or use it for cosplay purposes to embody the spirit of Captain America.</p>
                    <FaHeart className=' ms-80 mt-' fontSize='30px'></FaHeart>
                </div>
                <div className="border-2 mb-10  shadow-md">
                    <img className='mx-auto' src="https://i.ibb.co/681V8zX/544867-Primary-300-Wx300-H-context-b-WFzd-GVyf-Glt-YWdlc3wx-Nzk4-Nnxpb-WFn-ZS9qc-GVnf-Glt-YWdlcy9o-O.jpg" alt="Image 3"/>
                    <h1 className="text-2xl mb-10 p-5 font-bold">Thor Mjolnir Hammer Toy</h1>
                    <p className='mt-2'>This toy version of Thor's Mjolnir hammer allows fans to wield the power of Thor themselves. It features a realistic design with intricate engravings and a sturdy construction. It's a great accessory for dressing up as Thor or recreating epic battle scenes.</p>
                    <FaHeart className=' ms-80 mt-7' fontSize='30px'></FaHeart>
                </div>
                <div className="border-2 mb-10 shadow-md">
                    <img className='mx-auto' src="https://i.ibb.co/74QqZVG/544866-Primary-300-Wx300-H-context-b-WFzd-GVyf-Glt-YWdlc3wx-OTI4-M3xpb-WFn-ZS9qc-GVnf-Glt-YWdlcy9o-O.jpg" alt="Image 4"/>
                    <h1 className="text-2xl p-5 mb-10  font-bold">Hulk Smash Action Figure</h1>
                    <p className='mt-2'>This action figure captures the incredible strength and power of the Hulk. It showcases the Hulk in a dynamic pose, ready to unleash his signature smash. With its muscular sculpt and detailed paintwork, it's perfect for fans of the Green Goliath.</p>
                    <FaHeart className=' ms-80 mt-7' fontSize='30px'></FaHeart>
                

                </div>
                <div className="border-2 mb-10   shadow-md">
                    <img  className='mx-auto'src="https://i.ibb.co/Vxbg0mZ/544869-Primary-300-Wx300-H-context-b-WFzd-GVyf-Glt-YWdlc3wx-ODEw-MXxpb-WFn-ZS9qc-GVnf-Glt-YWdlcy9o-Z.jpg" alt="Image 5"/>
                    <h1 className="text-2xl p-5 font-bold">Black Widow Stealth Suit Action Figure</h1>
                    <p className='mt-2'>This action figure showcases Black Widow in her stealth suit, as seen in the movies. It features a sleek design and multiple points of articulation for dynamic posing. Fans of Black Widow will appreciate the attention to detail and accuracy.</p>
                    <FaHeart className=' ms-80 mt-7' fontSize='30px'></FaHeart>
                </div>
                <div className="border-2 mb-10  shadow-md">
                    <img className='mx-auto' src="https://i.ibb.co/2sNmhk5/544862-FO971-Primary-300-Wx300-H-context-b-WFzd-GVyf-Glt-YWdlc3w1-ODY3-Nnxpb-WFn-ZS9qc-GVnfGlt-YWdl.jpg" alt="Image 6"/>
                    <h1 className="text-2xl p-5 font-bold">Hawkeye Bow and Arrow Set</h1>
                    <p className='mt-2'>This toy set includes a bow and arrow accessories inspired by Hawkeye's weaponry. It allows fans to channel their inner archer and recreate Hawkeye's impressive marksmanship. The set is designed for both display and play, providing hours of fun for Hawkeye fans.</p>
                    <FaHeart className=' ms-80 mt-7' fontSize='30px'></FaHeart>
                </div>
                <div className="border-2  mb-10 shadow-md">
                    <img className='mx-auto' src='https://i.ibb.co/6BJGQL3/560694-Primary-300-Wx300-H-context-b-WFzd-GVyf-Glt-YWdlc3wy-Mjc4-M3xpb-WFn-ZS9qc-GVnfGlt-YWdlcy9o-M.jpg' alt="Image 7"/>
                    <h1 className="text-2xl p-5 font-bold">Spider-Man Web Shooter Toy</h1>
                    <p className='mt-2'>This toy replicates Spider-Man's web shooter device, allowing fans to imagine themselves as the friendly neighborhood superhero. It features a wrist-mounted design and includes web fluid canisters. With this toy, you can pretend to swing through the city, just like Spider-Man.</p> 
                    <FaHeart className=' ms-80 mt-7' fontSize='30px'></FaHeart>
                </div>
                <div className="border-2 mb-10 shadow-md">
                    <img className='mx-auto' src="https://i.ibb.co/2W2mJbw/544862-F0970-Primary-300-Wx300-H-context-b-WFzd-GVyf-Glt-YWdlc3wy-MTI4-M3xpb-WFn-ZS9qc-GVnfGlt-YWdl.jpg" alt="Image 8"/>
                    <h1 className="text-2xl p-5 font-bold">Black Panther Vibranium Claws Replica</h1>
                   <div>
                   <p className='mt-2'>This replica of Black Panther's Vibranium claws is a detailed and wearable collectible. It is designed to resemble the claws seen in the movies, with intricate detailing and a comfortable fit. Fans of Black Panther can feel empowered and ready to defend Wakanda.</p>  
                     <FaHeart className=' ms-80 mt-7' fontSize='30px'></FaHeart>
                   </div>

                </div>
            </div>
           </div>
           <HomeTab></HomeTab>
        </div>
    );
};

export default HomeGallery;
