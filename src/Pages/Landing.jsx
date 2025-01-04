import React, { useState } from 'react'
import myStyle from '../Style.module.css'
import html from '../assets/html.png'
import css from '../assets/css3.png'
import js from '../assets/javascript.png'
import react from '../assets/react.png'
import node from '../assets/nodejs.png'
import mongoDb from '../assets/mongo-db.png'
import profile from '../assets/profile.png'
import bootstrap from '../assets/bootstrap.webp'
import tailwind from '../assets/tailwind.webp'
import git from '../assets/github.webp'
import figma from '../assets/figma.webp'
import weather from '../assets/weather.png'
import recepie from '../assets/recepie.png'
import { Button, Card, Form, Modal } from 'react-bootstrap'
import emailjs from '@emailjs/browser';
import { Flip, ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom'
import lms from '../assets/lms.png'
import lmsv from '../assets/lmsv.mp4'
import recipev from '../assets/recipev.mp4'
import weatherv from '../assets/weatherv.mp4'

const Landing = () => {
  const [myProjects] = useState([
    { id: 16, name: 'LIBRARY MANAGEMENT SYSTEM', description: 'The Library Management System is a comprehensive web application designed to simplify library operations by managing users, books, and transactions such as issuing and returning books. Built with React.js, Javascript, MongoDB, and Node.js, the system offers robust functionality and an intuitive interface for both librarians and patrons. It allows users to catalog books with details like titles, categories, manage user accounts, including automated rent calculations based on loan duration. The application includes a responsive frontend built with React.js and Bootstrap, ensuring accessibility across various devices. Authentication is managed through JWT Middleware, with MongoDB as the database. This Library Management System provides a seamless and efficient solution for organizing library resources, enhancing user experience, and streamlining daily operations.', github: "https://github.com/aswin9895/LIBRARY-MANAGEMENT-PROJECT", gitback: "https://github.com/aswin9895/LIBRARY-MANAGEMENT-SERVER", live: "https://library-management-project-9f1n.vercel.app/", img: lms, video: lmsv, frntEnd: ["REACT", "JAVASCRIPT"], backEnd: ["NODE.JS", "EXPRESS.JS"], Db: ["MONGO-DB"] },
    { id: 13, name: 'RECEPIE APP', description: 'The Recepie App is a modern web application designed to provide users with a diverse collection of recipes, complete with detailed cooking instructions and ingredient lists. Built using React and Vite, the app delivers a responsive and interactive user experience, ensuring seamless functionality across devices. Users can search for recipes by keywords, making it easy to find specific dishes, while the clean and intuitive design enhances navigation. The app is visually appealing and user-friendly.', github: "https://github.com/aswin9895/RECEPIE_APP", live: "https://recepie-app-steel.vercel.app/", img: recepie, video: recipev, frntEnd: ["REACT", "JAVASCRIPT"] },
    { id: 12, name: 'WEATHER_APP', description: 'The "WEATHER_APP" project is a responsive and interactive web application designed to provide real-time weather updates for any city worldwide. Built using React and Vite, the application fetches weather data from the OpenWeatherMap API, ensuring accurate and up-to-date information. Users can input a city name to receive the current temperature and weather conditions presented in a clean and intuitive interface.', github: "https://github.com/aswin9895/WEATHER_APP", live: "https://weather-app-jun24.netlify.app/", img: weather, video: weatherv, frntEnd: ["REACT", "JAVASCRIPT"] }
  ])
  const [name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Message, setMessage] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()

    const serviceId = 'service_rbrxy86'
    const templateId = 'template_j6ckl4a'
    const publicKey = 'eYAu8kwUrfkKvguqG'

    const templateParams = {
      from_name: name,
      from_email: Email,
      message: Message
    }

    if (name, Email, Message) {
      emailjs.send(serviceId, templateId, templateParams, publicKey).then((response) => {
        toast.success('Message Sent Successfully!!!', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Flip,
        });
        setName('')
        setEmail('')
        setMessage('')
      }).catch((error) => {
        console.log(error);
      })
    } else {
      toast.warn('Please Provide Complete Details!!!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Flip,
      });
    }
  }
  const [selectedProject, setSelectedProject] = useState(null);

  const [show, setShow] = useState(false);
  const handleShow = (project) => {
    setSelectedProject(project);
  };
  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <div style={{ paddingTop: "80px" }} className='container'>
      <ToastContainer position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Flip} />
      {/* home section */}
      <div className='mt-5'>
        {/* Profile section  */}
        <div id='home' className='d-flex align-items-center justify-content-evenly flex-wrap' style={{ minHeight: "80vh" }}>
          <div>
            {/* introduction  */}
            <div>
              <h5 className={myStyle.landingIntro}>Hi I am <br />
                <span className={myStyle.landingIntroSpan}>Aswin Saseendran</span></h5>
              <h1 className={myStyle.landingRoleTitle}>MERN Stack <br /> Developer</h1>
            </div>
            {/* contact me  */}
            <div>
              <a style={{ textDecoration: "none" }} href="https://www.instagram.com/aswin__ks__/" target='_blank'><button className={myStyle.landingContactButton}><i class="fa-brands fa-instagram bg-transparent"></i></button></a>
              <a style={{ textDecoration: "none" }} target='_blank' href="https://www.linkedin.com/in/aswin-saseendran/"><button className={myStyle.landingContactButton}><i class="fa-brands fa-linkedin-in bg-transparent"></i></button></a>
              <a style={{ textDecoration: "none" }} target='_blank' href="https://wa.me/9061838103"><button className={myStyle.landingContactButton}><i class="fa-brands fa-whatsapp bg-transparent"></i></button></a>
              <a style={{ textDecoration: "none" }} target='_blank' href="mailto:aswinsaseendran06@gmail.com"><button className={myStyle.landingContactButton}><i class="fa-regular fa-envelope bg-transparent"></i></button></a>
            </div>
            {/* Download CV  */}
            <div className='mt-5'>
              <a href="../assets/ASWIN SASEENDRAN (MERN FULL STACK DEVELOPER) PROFESSIONAL_RESUME.pdf" download="ASWIN SASEENDRAN (MERN FULL STACK DEVELOPER) PROFESSIONAL_RESUME.pdf"><button className={myStyle.landingCVButton}>Download CV</button></a>
            </div>
            {/* Experience */}
            <div style={{ backgroundColor: "rgba(246, 246, 246, 0.11)", maxWidth: "900px" }} className='mt-5 p-3 rounded d-flex justify-content-evenly align-items-center d-none'>
              <div>
                <h5 style={{ backgroundColor: "rgba(246, 246, 246, 0.11)" }} className={myStyle.landingyearsHeading}>
                  5+ <br />
                  <span className={myStyle.landingyearsHeadingSpan}>Experience</span>
                </h5>
              </div>
              <div style={{ height: "100%", fontSize: "30px", color: "black" }}>|</div>
              <div>
                <h5 style={{ backgroundColor: "rgba(246, 246, 246, 0.11)" }} className={myStyle.landingyearsHeading}>
                  25+ <br />
                  <span className={myStyle.landingyearsHeadingSpan}>Projects Done</span>
                </h5>
              </div>
              <div style={{ height: "100%", fontSize: "30px", color: "black" }}>|</div>
              <div>
                <h5 style={{ backgroundColor: "rgba(246, 246, 246, 0.11)" }} className={myStyle.landingyearsHeading}>
                  85+ <br />
                  <span className={myStyle.landingyearsHeadingSpan}>Happy Clients</span>
                </h5>
              </div>
            </div>
          </div>
          <div></div>
          <div>
            <img style={{borderBottomLeftRadius:"90px",borderTopRightRadius:"90px"}} className='img img-fluid mt-3' width={'400px'} src={profile} alt="my-image" />
          </div>
        </div>
      </div>

      {/* skills section  */}
      <div className='mt-5' style={{ minHeight: "100vh" }}>
        <div>
          <h5 className='text-center text-light fw-bolder fs-2'>SKILLS</h5>
        </div>
        <div className='mt-5'>
          <marquee behavior="" direction="" scrollamount="10">
            <div className='mt-3 d-flex align-items-center justify-content-evenly'>
              <div>
                <img width={"180px"} src={html} alt="HTML-5" />
                <h5 className='text-light text-center'>HTML</h5>
              </div>
              <div>
                <img width={"180px"} src={css} alt="CSS-3" />
                <h5 className='text-light text-center'>CSS</h5>
              </div>
              <div>
                <img width={"180px"} src={js} alt="JavaScript" />
                <h5 className='text-light text-center'>JAVASCRIPT</h5>
              </div>
              <div>
                <img width={"180px"} src={react} alt="React" />
                <h5 className='text-light text-center'>REACT</h5>
              </div>
              <div>
                <img width={"180px"} src={node} alt="node" />
                <h5 className='text-light text-center'>NODE.JS</h5>
              </div>
            </div>
            <div className='mt-3 d-flex align-items-center justify-content-evenly'>
              <div>
                <img width={"180px"} src={mongoDb} alt="mongoDb" />
                <h5 className='text-light text-center'>MONGO DB</h5>
              </div>
              <div>
                <img width={"180px"} src={bootstrap} alt="bootstrap" />
                <h5 className='text-light text-center'>BOOTSTRAP</h5>
              </div>
              <div>
                <img width={"180px"} src={tailwind} alt="tailwind" />
                <h5 className='text-light text-center'>TAILWIND</h5>
              </div>
              <div>
                <img width={"180px"} src={git} alt="github" />
                <h5 className='text-light text-center'>GITHUB</h5>
              </div>
              <div>
                <img width={"180px"} src={figma} alt="figma" />
                <h5 className='text-light text-center'>FIGMA</h5>
              </div>
            </div>
          </marquee>
        </div>
      </div>

      {/* projects section  */}
      <div className='mt-5' style={{ minHeight: "100vh" }}>
        <div>
          <h5 className='text-light fs-2 fw-bolder text-center'>PROJECTS</h5>
        </div>
        <div className='row mt-5'>
          {myProjects.map(projects => (
            <div key={projects.id} className='col-sm-12 col-md-4'>
              <div style={{ backgroundColor: "rgba(246, 246, 246, 0.11)" }} className='p-4 rounded shadow mt-2'>
                <div>
                  <Card style={{ width: '100%', border: "none" }} className='rounded'>
                    <Card.Img onClick={() => handleShow(projects)} variant="top" src={projects.img} className='p-2 img img-fluid btn' height={'150px'} />
                    <Card.Body>
                      <Card.Title className='text-light text-center fw-bold mb-4'>{projects?.name}</Card.Title>
                      <div className='d-flex justify-content-between align-items-center flex-wrap'>
                        <a style={{ textDecoration: "none" }} href={projects?.github} target='_blank'><button className={myStyle.contactSendButton}>GitHub</button></a>
                        <a style={{ textDecoration: "none" }} href={projects?.live} target='_blank'><button className={myStyle.contactSendButton}>Visit</button></a>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
                <Modal fullscreen show={selectedProject !== null} onHide={handleClose} backdrop="static" keyboard={false}>
                  <Modal.Header className='bg-dark text-light'>
                    <div className='d-flex justify-content-end w-100 bg-transparent container-fluid'><button onClick={handleClose} style={{ backgroundColor: "white" }} className='text-dark fw-bolder ps-2 pt-1 pb-1 pe-2  shadow rounded'>X</button></div>
                  </Modal.Header>
                  <Modal.Body className='pt-5 vh-100'>
                    <div className='container'>
                      <h3 className='text-light fw-bolder text-center'>{selectedProject?.name}</h3>
                      <div className='row justify-content-evenly flex-wrap align-items-center mt-5 pt-5'>
                        <div className='col-md-6'>
                          <video width={'100%'} controls autoPlay src={selectedProject?.video}></video>
                          {/* <img width={'100%'} className='img img-fluid' src={selectedProject?.img} alt="project-SS" /> */}
                        </div>
                        <div className='col-md-6'>
                          <p className={myStyle.projectDesc}>{selectedProject?.description}</p>
                          <p className={myStyle.projectDesc}><strong><span style={{ color: "#FD6F00" }}>Front-End:</span></strong> {selectedProject?.frntEnd.join(", ")}</p>
                          {selectedProject?.backEnd &&
                            <p className={myStyle.projectDesc}><strong><span style={{ color: "#FD6F00" }}>Back-End:</span></strong> {selectedProject?.backEnd.join(", ")}</p>
                          }
                          {selectedProject?.Db &&
                            <p className={myStyle.projectDesc}><strong><span style={{ color: "#FD6F00" }}>Database:</span></strong> {selectedProject?.Db.join(", ")}</p>
                          }
                        </div>
                      </div>
                      <div className='d-flex justify-content-between align-items-center flex-wrap container w-50 mt-5'>
                        <a style={{ textDecoration: "none" }} href={selectedProject?.github} target='_blank'><button className={myStyle.contactSendButton}>GitHub</button></a>
                        {selectedProject?.gitback &&
                          <a style={{ textDecoration: "none" }} href={selectedProject?.gitback} target='_blank'><button className={myStyle.contactSendButton}>GitHub Server</button></a>
                        }
                        <a style={{ textDecoration: "none" }} href={selectedProject?.live} target='_blank'><button className={myStyle.contactSendButton}>Visit</button></a>
                      </div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer className='bg-dark ps-5 pe-5'>
                    <Button variant="secondary" className='fw-bolder' onClick={handleClose}>
                      CLOSE
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          ))}
          <div className='text-center mt-5'>
            <Link to={'/projects'}><button className={myStyle.landingCVButton}>MORE <i class="fa-solid fa-greater-than bg-transparent"></i><i class="fa-solid fa-greater-than bg-transparent"></i><i class="fa-solid fa-greater-than bg-transparent"></i></button></Link>
          </div>
        </div>
      </div>

      {/* about me */}
      <div className='mt-5' style={{ minHeight: "100vh" }}>
        <div>
          <h5 className='text-light fs-2 fw-bolder text-center'>ABOUT ME</h5>
        </div>
        <div className='mt-5 row justify-content-center align-items-center'>
          <div style={{ textAlign: "center" }} className='col-lg-4'>
            <img style={{borderBottomLeftRadius:"90px",borderTopRightRadius:"90px"}} className='img img-fluid mt-3' width={'400px'} src={profile} alt="my-image" />
          </div>
          <div className='col'></div>
          <div className='col-lg-7'>
            <p className={myStyle.aboutMePara}>Hello! My name is Aswin Saseendran, and I’m a budding software developer from Kerala. I hold a degree from Swamy Saswathikanda College under MG University, and while I’m a fresher, I have hands-on experience in web development through my six-month internship at Luminar Technolab. During this time, I built a strong foundation in the MERN stack, with expertise in frontend development using HTML, CSS, JavaScript, React, and Bootstrap to create responsive and dynamic user interfaces. On the backend, I specialize in Node.js, Express.js, and MongoDB, enabling me to build robust and scalable server-side applications. I am also proficient in version control using Git, which enhances my ability to collaborate effectively on projects.</p>
            <p className={myStyle.aboutMePara}>
              I am a quick learner with a detail-oriented approach to work, ensuring accuracy and reliability in everything I do. Outside of work, I enjoy watching movies and playing games, activities that inspire creativity and help me unwind. I’m passionate about building impactful solutions and excited to grow as a professional in the field of software development.
            </p>
          </div>
        </div>
      </div>

      {/* contact me */}
      <div className='mt-5' style={{ minHeight: "100vh" }}>
        <div>
          <h5 className='text-light fs-2 fw-bolder text-center'>CONTACT ME</h5>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
          <div style={{ backgroundColor: "rgba(246, 246, 246, 0.11)" }} className='w-75 w-md-50 mt-5 border rounded p-5'>
            <Form style={{ backgroundColor: "transparent" }}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput0">
                <Form.Control value={name} onChange={(e) => setName(e.target.value)} className='text-dark' type="text" placeholder="Enter Your Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control value={Email} onChange={(e) => setEmail(e.target.value)} className='text-dark' type="email" placeholder="Email ID" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control value={Message} onChange={(e) => setMessage(e.target.value)} className='text-dark' as="textarea" placeholder='Type Your Message' rows={5} />
              </Form.Group>
            </Form>
            <div style={{ textAlign: "center", width: "100%", backgroundColor: "transparent" }}><button onClick={handleSubmit} className={myStyle.contactSendButton}>SEND</button></div>
            <hr className='fs-1 text-light' />
            <div className='text-center bg-transparent'>
              <a style={{ textDecoration: "none", backgroundColor: "transparent" }} href="https://www.instagram.com/aswin__ks__/" target='_blank'><button className={myStyle.landingContactButton}><i class="fa-brands fa-instagram bg-transparent"></i></button></a>
              <a style={{ textDecoration: "none", backgroundColor: "transparent" }} target='_blank' href="https://www.linkedin.com/in/aswin-saseendran/"><button className={myStyle.landingContactButton}><i class="fa-brands fa-linkedin-in bg-transparent"></i></button></a>
              <a style={{ textDecoration: "none", backgroundColor: "transparent" }} target='_blank' href="https://wa.me/9061838103"><button className={myStyle.landingContactButton}><i class="fa-brands fa-whatsapp bg-transparent"></i></button></a>
              <a style={{ textDecoration: "none", backgroundColor: "transparent" }} target='_blank' href="mailto:aswinsaseendran06@gmail.com"><button className={myStyle.landingContactButton}><i class="fa-regular fa-envelope bg-transparent"></i></button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing