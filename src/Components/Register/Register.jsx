import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../../AuthProvider/AuthProvider";



const Register = () => { 
  const {register, setUserInfo} =useContext(AuthContext)
  const [error,setError] = useState('')
  const [success,setSuccess] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((show) => !show);
  };
  
  

  const handleRegister = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;
    // console.log(email,password,name,photo);

    if (password.length < 6) {
      setError('Password should be at least 6 characters');
      return;
    }

    setSuccess('')
    setError('')
    register(email , password)
    .then(result =>{
      const registerdUser = result.user;
      setUserInfo(registerdUser);
      form.reset();
      setSuccess('Register Success !')

    })
    .catch(error =>{
      setError(error.message)
    })
  }

  return ( 
  <div className="flex item-center justify-center gap-6 "> 
     <div className="mt-28 shadow-lg h-1/3" >
      <img src="https://i.ibb.co/WxpKwrL/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer.jpg" alt="" />
     </div>
    <div className="mt-20 mb-64 md:w-[410px] ">
      <form onSubmit={handleRegister} className="border p-10 shadow-2xl">
        <h1 className="md:text-5xl text-4xl font-semibold mb-5 ">Register Please</h1>
        <div>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="w-full px-3 py-2 mb-5 rounded-xl"
            placeholder="Your Name"
          />
        </div>
        <div>
          <input
            id="photo"
            name="photo"
            type="text"
            autoComplete="photo"
            required
            className="w-full px-3 py-2 mb-5 rounded-xl"
            placeholder="Photo URL"
          />
        </div>
        <div>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full px-3 py-2 mb-5 rounded-xl"
            placeholder="Email address"
          />
        </div>

        <div className="flex justify-center items-center gap-2">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            required
            className="w-full px-3 py-2 rounded-xl mb-3"
            placeholder="Password"
          />
          {showPassword ? (
              <FaEye onClick={togglePasswordVisibility} />
          
          ) : (
            <FaEyeSlash onClick={togglePasswordVisibility} />
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Forgot your password?
            </a>
          </div>
        </div>
        <p className="mt-2 text-red-600">{error}</p>
          <p className="mt-3 text-slate-500">Already Have An Accout ? <Link className="text-blue-700" to="/login">Login</Link></p>
        <input className="btn w-full mt-5" type="submit" value="Register" />
      </form>
    </div>
    </div>
  );
};

export default Register;
