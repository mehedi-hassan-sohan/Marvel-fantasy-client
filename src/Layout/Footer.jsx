import React from 'react';
import { FaGithub, FaFacebook, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='md:mx-20  ' >
      <footer className="footer p-9  bg-[black]   rounded-xl text-[#FFFFFF] ">
        <div>
          <img className='w-24' src="https://i.ibb.co/Qvtf2yZ/hulk-PNG95.png" alt="" />
          <h1 className='text-4xl'>Marvel Fantasy World</h1>
          <p> Providing reliable tech since 1962 <br />
            <p> Number:(276) 326-1571
              Spring Mobile Home <br /> Pke Hl
              Bluefield, Virginia(VA), 24605</p>
            <div className='flex mt-5 '> 
             <p className='text-xl'>social links: <br />  </p>
              <a href="https://github.com/mehedi-hassan-sohan"> <FaGithub fontSize='30px'></FaGithub></a> <a href="https://www.facebook.com/lynx.sohan/"><FaFacebook fontSize='30px'></FaFacebook> 
              </a> <a href="https://twitter.com/"><FaTwitterSquare fontSize='30px'></FaTwitterSquare></a>

            </div>
            <div className='mt-10'>
              <p>Copyright © 2023 - All right reserved by Marvel Fantasy World Ltd</p>
            </div>
          </p>

        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">UX/Ui Designs</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Web Development</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
   
      </footer>


    </div>
  );
};

export default Footer;