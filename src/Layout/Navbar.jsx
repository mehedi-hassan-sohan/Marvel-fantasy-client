import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
    const {userInfo,logOut} = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
          .then()
          .catch((error) => {
            console.log(error.message);
          });
      };
    
    return (
        <div className='container ms-24  decoration-neutral-800 '>
            <div className="navbar   bg-[#0077C2]   rounded-xl  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a></a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                              
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                               
                            </li>
                       
                          <Link to='/' >Home</Link>
                           <Link to='/'>All toys </Link>
                           <Link to='/'>Add a toys </Link>
                           <Link to='/'>My Toys </Link>
                           <Link to='/'>Blogs</Link>
                          
                       
                           
                        </ul>
                    </div> 
                    <img className='w-24' src='https://i.ibb.co/fFJRbY8/iron-man-png-19242.png' alt="" />
                    <a className="btn btn-ghost normal-case text-4xl text-white "> 
                    
                    Marvel Fantasy World 
</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                      
                        <li tabIndex={0}>
                           
                        <Link to='/'   className='text-white'>Home</Link>
                           <Link to='/'className='text-white'>All toys </Link>
                           <Link to='/'className='text-white'>Add a toys </Link>
                           <Link to='/'className='text-white'>My Toys </Link>
                           <Link to='/blog'className='text-white'>Blogs</Link>
                         
                        </li>
                        
                    </ul>
                </div>
                <div className="navbar-end">
                {userInfo ? (
            <div className="flex">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom tooltip-secondary"
                data-tip={userInfo.displayName}
              >
                <div className="w-10 rounded-full">
                  <img src={userInfo.photoURL} />
                </div>
              </label>

               <button onClick={handleLogOut} className="btn bg-black">
                Sign Out
              </button>
            </div>
          ) : (
            <div className="flex">
              <FaUserCircle className="text-white text-4xl mr-4"></FaUserCircle>
              <Link to="/login">
                <button className="btn bg-black">Login</button>
              </Link>
            </div>
          )}
                </div>
            </div>
         </div>
    );
};

export default Navbar;