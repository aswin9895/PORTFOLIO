import React from 'react'
import prflogo from '../assets/Profile logo.png'
import { Link } from 'react-router-dom'
import myStyle from '../Style.module.css'

const Footer = () => {
  return (
    <div style={{backgroundColor: "rgba(246, 246, 246, 0.11)"}}  className='container pt-4 ps-4 pe-4 pb-1 mt-5'>
      <div>
        <div  className='d-flex justify-content-evenly align-items-start flex-wrap p-3'>
          <div className='text-light fw-bolder '>
            <h5><Link style={{ textDecoration: "none" }} to={'/'}><img width={'80px'} src={prflogo} alt="" /></Link>Aswin Saseendran <br /><span className='ms-3'>MERN STACK DEVELOPER</span></h5>
          </div>
          <div className='text-light fw-bolder'>
            <h5>Links</h5>
            <ul className='list-unstyled ms-1 fw-normal'>
              <Link style={{ textDecoration: "none", color: "white" }} to={'/'}><li>Home</li></Link>
              <Link style={{ textDecoration: "none", color: "white" }} to={'/skills'}><li>Skills</li></Link>
              <Link style={{ textDecoration: "none", color: "white" }} to={'/projects'}><li>Projects</li></Link>
              <Link style={{ textDecoration: "none", color: "white" }} to={'/about'}><li>About</li></Link>
              <Link style={{ textDecoration: "none", color: "white" }} to={'/contact'}><li>Contact</li></Link>
            </ul>
          </div>
          <div className='text-light fw-bolder'>
            <h5>Connect</h5>
            <ul className='list-unstyled ms-1 fw-normal'>
              <a style={{ textDecoration: "none", backgroundColor: "transparent" }} href="https://www.instagram.com/aswin__ks__/" target='_blank'><button className={myStyle.landingContactButton}><i class="fa-brands fa-instagram bg-transparent"></i></button></a>
              <a style={{ textDecoration: "none", backgroundColor: "transparent" }} target='_blank' href="https://www.linkedin.com/in/aswin-saseendran/"><button className={myStyle.landingContactButton}><i class="fa-brands fa-linkedin-in bg-transparent"></i></button></a>
              <a style={{ textDecoration: "none", backgroundColor: "transparent" }} target='_blank' href="https://wa.me/9061838103"><button className={myStyle.landingContactButton}><i class="fa-brands fa-whatsapp bg-transparent"></i></button></a>
              <a style={{ textDecoration: "none", backgroundColor: "transparent" }} target='_blank' href="mailto:aswinsaseendran06@gmail.com"><button className={myStyle.landingContactButton}><i class="fa-regular fa-envelope bg-transparent"></i></button></a>
            </ul>
          </div>
        </div>
        <p className='text-light text-center mt-1 pb-3 '><i class="fa-regular fa-envelope"></i> aswinsaseendran06@gmail.com <span className='ms-5'><i class="fa-solid fa-phone"></i> +91 9061838103</span></p>
      </div>
      <p className='bg-transparent text-center text-light mt-1'>Copyright © 2025 Aswin Saseendran. All rights reserved.</p>
    </div>
  )
}

export default Footer