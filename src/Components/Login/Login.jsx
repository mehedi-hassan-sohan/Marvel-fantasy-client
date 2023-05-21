import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useTitle from "../../../hooks/useTitle";


const Login = () => {  
  useTitle('Login')
   const { googleLogin , SignIn ,setUserInfo} = useContext(AuthContext)
  // const [googleData,setGoogleData] = useState({})
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);



  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Email Login -------------------------
  const handleEmailLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    SignIn(email, password)
      .then((result) => {
        const signInUser = result.user;
        console.log(signInUser);
        form.reset();
        navigate(from);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  // Email Login -------------------------

  // Google Login -------------------------
  const handleGoogleLogin = (e) => {
    googleLogin()
      .then((result) => {
        const loggedUser = result.user;
        setUserInfo(loggedUser);
        navigate(from);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  // Google Login -------------------------
  // ------
 

  const togglePasswordVisibility = () => {
    setShowPassword((show) => !show);
  };

  return (
   <div className="flex ms-40 gap-10"> 
   <div className='mt-28 ms-36 shadow-lg h-1/3'>

    <img src="https://i.ibb.co/gVwCLG0/360-F-339709048-ZITR4wr-Vs-OXCKdj-Hncdtab-SNWp-Ihia-R7.jpg" alt="" />
   </div>
    <div className="mt-20 md:w-[400px]  border p-10 shadow-2xl">
      {/* login form */}  
     
      <form onSubmit={handleEmailLogin}>
        <h1 className="text-5xl font-semibold mb-5 ">Login Please</h1>
        <div>
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
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
        <p className="mt-3 text-slate-500">
          Don't Have An Accout ?{" "}
          <Link className="text-blue-700" to="/register">
            Register
          </Link>
        </p>
        <p className="mt-2 text-red-600">{error}</p>

        <input className="btn w-full mt-5" type="submit" value="Login" />
      </form>
      <hr className="border-black mb-5 mt-4" />
      <div className="flex flex-col gap-4">
     
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline btn-accent"
        >
          <FaGoogle className="text-xl mr-2"></FaGoogle>Google
        </button>
      </div>
    </div>
    </div>
  );
};

export default Login;