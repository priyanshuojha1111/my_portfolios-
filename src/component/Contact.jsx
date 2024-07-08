import React from 'react'
import { FaInstagram } from "react-icons/fa";

// import { FaFacebookF } from "react-icons/fa";

// import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";





const Contact = () => {
  return (
    <>
    <div className="container contact" id='contact'>
      <h1>CONTACT ME</h1>
      <div className="contact-icon"
      data-aos="zoom-in-up"
            data-aos-duration="1000"
      >
        {/* <a  href="https://www.instagram.com/unbeatable__girl/"  target='_blank'  className="items"><FaInstagram className='icons' /> */}
        {/* </a> */}
        <a href="mailto:priyanshuojha111@gmail.com" target='_blank' className="items"> <SiGmail className='icons'/></a>
        {/* <a href=""  target='_blank' className="items"> <FaSquareXTwitter className='icons'/></a> */}
        <a href="https://github.com/priyanshuojha1111"  target='_blank' className="items"> <FaGithubSquare className='icons'/></a>
        <a  href="https://www.linkedin.com/in/priyanshuojha111"  target='_blank' className="items"> <FaLinkedinIn className='icons'/></a>
      </div>
    </div>
    </>
  )
}

export default Contact