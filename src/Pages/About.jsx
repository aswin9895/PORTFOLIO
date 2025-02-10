import React from 'react'
import myStyle from '../Style.module.css'
import profile from '../assets/profile.jpg'
import cv from "../assets/ASWIN SASEENDRAN (MERN FULL STACK DEVELOPER) PROFESSIONAL_RESUME.pdf"

const About = () => {
  return (
    // <div>
    <div className='container' style={{ minHeight: "100vh", paddingTop: "120px" }}>
      <div>
        <h5 className='text-light fs-2 fw-bolder text-center'>ABOUT ME</h5>
      </div>
      <div className='mt-5 row justify-content-center align-items-center'>
        <div style={{ textAlign: "center" }} className='col-lg-4'>
          <img style={{borderBottomLeftRadius:"90px",borderTopRightRadius:"90px"}} className='img img-fluid mt-3' width={'400px'} src={profile} alt="my-image" />
        </div>
        <div className='col'></div>
        <div className='col-lg-7'>
          <p className={myStyle.aboutMePara}>Hello! I'm Aswin Saseendran, a dedicated MERN Full Stack Developer based in Ernakulam, Kerala. I recently completed my degree at Swamy Saswathikananda College under MG University and gained hands-on experience during my internship at Luminar Technolab, where I trained in the MERN stack.</p>
          <p className={myStyle.aboutMePara}>I specialize in creating responsive and dynamic user interfaces with technologies like HTML, CSS, JavaScript, React, and Bootstrap. On the backend, I excel in building robust and scalable applications using Node.js, Express.js, and MongoDB. I'm also proficient in version control using Git, ensuring smooth collaboration and project management.</p>
          <p className={myStyle.aboutMePara}>My strengths lie in being a quick learner, highly detail-oriented, and focused, which enables me to adapt to new technologies and deliver reliable results on time. Although I sometimes overanalyze situations, I’m actively improving my decision-making process to balance thoroughness with efficiency.</p>
          <p className={myStyle.aboutMePara}>When I'm not coding, I enjoy watching movies and playing games, which keep me relaxed and spark creativity. I’m excited to use my skills, enthusiasm, and dedication to build impactful projects and grow as a professional.</p>
          <div className='mt-3'>
            <a href={cv} download="ASWIN SASEENDRAN (MERN FULL STACK DEVELOPER) PROFESSIONAL_RESUME.pdf"><button className={myStyle.landingCVButton}>Download CV</button></a>
          </div>
        </div>
      </div>
    </div>
    // </div>
  )
}

export default About