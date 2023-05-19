import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaAlignLeft, FaBars, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const { userInfo, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="md:container md:ms-24  decoration-neutral-800 ">
      <div className="navbar   bg-black   rounded-xl  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaAlignLeft fontSize='20px' className='bg-white'></FaAlignLeft>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a></a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
              </li>
              <li>
                <Link to="/" >Home</Link>
              </li>
              <li>
                <Link to="/allToys">All toys</Link>
              </li>
              {userInfo ? (
                <>
                  <li>
                    <Link to="/addToys">Add a toy</Link>
                  </li>
                  <li>
                    <Link to="/">My Toys</Link>
                  </li>
                </>
              ) : null}
              <li>
                <Link to="/blog">Blogs</Link>
              </li>
            </ul>
          </div>
          <img
            className="w-24"
            src="https://i.ibb.co/fFJRbY8/iron-man-png-19242.png"
            alt=""
          />
          <p className="text-4xl text-white">Marvel Fantasy World</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li tabIndex={0}>
              <Link to="/" className='text-white'>Home</Link>
            </li>
            <li>
              <Link to="/allToys"  className='text-white'>All toys</Link>
            </li>
            {userInfo ? (
              <>
                <li>
                  <Link to="/addToys"  className='text-white'>Add a toy</Link>
                </li>
                <li>
                  <Link to="/"  className='text-white'>My Toys</Link>
                </li>
              </>
            ) : null}
            <li>
              <Link to="/blog"  className='text-white'>Blogs</Link>
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
                  <img src={userInfo.photoURL} alt="" />
                </div>
              </label>
              <button onClick={handleLogOut} className="btn bg-[#000080]">
                Sign Out
              </button>
            </div>
          ) : (
            <div className="flex">
              <FaUserCircle className="text-white text-4xl mr-4" />
              <Link to="/login">
                <button className="btn  bg-[#000080]">Login</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
