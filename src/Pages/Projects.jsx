import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import wedding from '../assets/wedding.png'
import recipes from '../assets/recipes.png'
import camping from '../assets/camping.png'
import tour from '../assets/tour.png'
import fashion from '../assets/fashion.png'
import apple from '../assets/apple.png'
import interno from '../assets/interno.png'
import calculator from '../assets/calculator.png'
import bmi from '../assets/bmi.png'
import car from '../assets/car.png'
import register from '../assets/register.png'
import weather from '../assets/weather.png'
import recepie from '../assets/recepie.png'
import employee from '../assets/employee.png'
import task from '../assets/task.png'
import lms from '../assets/lms.png'
import myStyle from '../Style.module.css'
Button
const Projects = () => {

  const [myProjects] = useState([
    { id: 16, name: 'LIBRARY MANAGEMENT SYSTEM', description: 'The Library Management System is a comprehensive web application designed to simplify library operations by managing users, books, and transactions such as issuing and returning books. Built with React.js, Javascript, MongoDB, and Node.js, the system offers robust functionality and an intuitive interface for both librarians and patrons. It allows users to catalog books with details like titles, categories, manage user accounts, including automated rent calculations based on loan duration. The application includes a responsive frontend built with React.js and Bootstrap, ensuring accessibility across various devices. Authentication is managed through JWT Middleware, with MongoDB as the database. This Library Management System provides a seamless and efficient solution for organizing library resources, enhancing user experience, and streamlining daily operations.', github: "https://github.com/aswin9895/LIBRARY-MANAGEMENT-PROJECT", gitback: "https://github.com/aswin9895/LIBRARY-MANAGEMENT-SERVER", live: "https://library-management-project-9f1n.vercel.app/", img: lms, frntEnd: ["REACT", "JAVASCRIPT"], backEnd: ["NODE.JS", "EXPRESS.JS"], Db: ["MONGO-DB"] },
    { id: 15, name: 'TASK MANAGEMENT ', description: 'The Task Management Website is a web application designed to help users efficiently create, organize, and track their tasks. It enhances productivity by providing features such as task creation, updates, deletion, and marking tasks as completed. The application includes user authentication for secure task management and offers a responsive design for seamless usability across various devices. Built using the MERN stack (MongoDB, Express.js, React.js, and Node.js), the project combines robust server-side functionality with dynamic client-side rendering. Key technologies include Mongoose for database operations and Axios for client-server communication.', github: "https://github.com/aswin9895/TASK-MANAGEMENT-FRNTEND", gitback: "https://github.com/aswin9895/TASK-SERVER", live: "https://task-management-frntend.vercel.app/", img: task, frntEnd: ["REACT", "JAVASCRIPT"], backEnd: ["NODE.JS", "EXPRESS.JS"], Db: ["MONGO-DB"] },
    { id: 14, name: 'EMPLOYEE MANAGEMENT', description: 'The "EMPLOYEE MANAGEMENT SYSTEM" is a web-based platform designed to streamline the management of employee records within an organization. The application offers functionalities such as viewing, adding, updating, and deleting employee information, thereby enhancing administrative efficiency. Built with modern web technologies, the app provides a responsive and user-friendly interface, ensuring accessibility across various devices.The datas are stored in JSON documents', github: "https://github.com/aswin9895/EMPLOYEE-MANAGEMENT", gitback: "https://github.com/aswin9895/EMPLOYEE-MANAGEMENT-SERVER", live: "https://employee-management-one-umber.vercel.app/", img: employee, frntEnd: ["REACT", "JAVASCRIPT"] },
    { id: 13, name: 'RECEPIE APP', description: 'The Recepie App is a modern web application designed to provide users with a diverse collection of recipes, complete with detailed cooking instructions and ingredient lists. Built using React and Vite, the app delivers a responsive and interactive user experience, ensuring seamless functionality across devices. Users can search for recipes by keywords, making it easy to find specific dishes, while the clean and intuitive design enhances navigation. The app is visually appealing and user-friendly.', github: "https://github.com/aswin9895/RECEPIE_APP", live: "https://recepie-app-steel.vercel.app/", img: recepie, frntEnd: ["REACT", "JAVASCRIPT"] },
    { id: 12, name: 'WEATHER_APP', description: 'The "WEATHER_APP" project is a responsive and interactive web application designed to provide real-time weather updates for any city worldwide. Built using React and Vite, the application fetches weather data from the OpenWeatherMap API, ensuring accurate and up-to-date information. Users can input a city name to receive the current temperature and weather conditions presented in a clean and intuitive interface.', github: "https://github.com/aswin9895/WEATHER_APP", live: "https://weather-app-jun24.netlify.app/", img: weather, frntEnd: ["REACT", "JAVASCRIPT"] },
    { id: 11, name: 'REGISTRATION_FORM', description: 'The "REGISTRATION_FORM" project is a dynamic web application built to collect user information through a structured and responsive form. Developed using React and Vite, the application features input fields for details such as name, email, phone number, address, and agreement to terms and conditions. The form includes real-time validation to ensure accurate and complete submissions, providing immediate feedback to users for a seamless experience. The form currently focuses on front-end functionality.', github: "https://github.com/aswin9895/REGISTRATION_FORM", live: "https://registration-form-jun-24.netlify.app/", img: register, frntEnd: ["REACT", "JAVASCRIPT"] },
    { id: 10, name: 'CAR_REPAIRING', description: 'The "CAR_REPAIRING" project is a static web application designed for car repair services. The application is built using modern web development technologies to provide an interactive user experience.', github: "https://github.com/aswin9895/CAR-REPAIRING", live: "https://kar-repairing-jun24.netlify.app/", img: car, frntEnd: ["REACT"] },
    { id: 9, name: 'BMI CALCULATOR', description: 'The "BMI CALCULATOR" project is a web-based Body Mass Index (BMI) calculator. This application allows users to input their height and weight to compute their BMI, providing an indication of whether they are underweight, normal weight, overweight, or obese..', github: "https://github.com/aswin9895/BMI_CALCULATOR", live: "https://bmi-calculator-jun24.netlify.app/", img: bmi, frntEnd: ["HTML", "CSS", "JAVASCRIPT"] },
    { id: 8, name: 'CALCULATOR', description: 'The "CALCULATOR" project contains a basic calculator web application built using HTML and JavaScript. It leverages HTML for the user interface and JavaScript for the logic, likely handling input, arithmetic operations, and displaying the results.', github: "https://github.com/aswin9895/CALCULATOR", live: "https://calculator-jun24.netlify.app/", img: calculator, frntEnd: ["HTML", "CSS", "JAVASCRIPT"] },
    { id: 7, name: 'INTERNO', description: 'The "INTERNO" project is a design replication or a simple webpage, potentially based on a Figma design template. The primary technologies used are HTML and CSS for the structure and styling.', github: "https://github.com/aswin9895/INTERNO_FIGMA", live: "https://interno-figma.netlify.app/", img: interno, frntEnd: ["HTML", "CSS"] },
    { id: 6, name: 'APPLE_CLONE', description: 'The "APPLE_CLONE" project replicate the visual design of the Apple-brand page. The project uses HTML for the structure, CSS for styling, and an "IMAGES" folder to store the images used on the page. The technologies involved are basic front-end web technologies, specifically HTML and CSS, with an emphasis on layout and design replication.', github: "https://github.com/aswin9895/APPLE_CLONE", live: "https://apple-clone-jul24.netlify.app/", img: apple, frntEnd: ["HTML", "CSS"] },
    { id: 5, name: 'FASHIONISTA', description: 'The FASHIONISTA project is a static website designed to provide an engaging and visually appealing platform for browsing and showcasing products. It serves as a foundation for an e-commerce website, allowing users to explore product offerings and promotions.', github: "https://github.com/aswin9895/SHOPPING", live: "https://fashionista-jun24.netlify.app/", img: fashion, frntEnd: ["HTML", "CSS"] },
    { id: 4, name: 'TOURISM', description: 'The "TOURISM" project is a static website designed to provide information about various tourist destinations. It offers users insights into different locations, attractions, and travel tips, aiming to assist travelers in planning their trips effectively.', github: "https://github.com/aswin9895/TOURISM", live: "https://tourism-jun-24.netlify.app/", img: tour, frntEnd: ["HTML", "CSS"] },
    { id: 3, name: 'CAMPING', description: 'The CAMPING project is a static website designed to provide information and inspiration for camping enthusiasts. This website serves as a resource for users to explore camping destinations, tips, and gear recommendations while offering an engaging and visually appealing interface.', github: "https://github.com/aswin9895/CAMPING", live: "https://camping-jun24.netlify.app/", img: camping, frntEnd: ["HTML", "CSS"] },
    { id: 2, name: 'RECIPIES_DELICIOUS', description: '"RECIPIES_DELICIOUS" is a static website that showcases a collection of delicious recipes, providing users with cooking instructions, ingredient lists, and accompanying images.', github: "https://github.com/aswin9895/RECIPIES_DELICIOUS", live: "https://recipies-delicious-jun24.netlify.app/", img: recipes, frntEnd: ["HTML", "CSS"] },
    { id: 1, name: 'WEDDING_PHOTOGRAPHY', description: 'a static website that showcases wedding photography services, likely intended to attract potential clients by displaying portfolios, services offered, and contact information.', github: "https://github.com/aswin9895/WEDDING_PHOTOGRAPHY", live: "https://wedding-photography-jun24.netlify.app/", img: wedding, frntEnd: ["HTML", "CSS"] },
  ])

  const [filteredProjects, setFilteredProjects] = useState(myProjects); // for filtering projects by languages
  const [selectedProject, setSelectedProject] = useState(null); // for displaying the selected single project

  // modal options
  const handleShow = (project) => {
    setSelectedProject(project);
  };
  const handleClose = () => {
    setSelectedProject(null);
  };

  // filter projects function
  const filterProjects = (filter) => {
    if (filter === "ALL") {
      setFilteredProjects(myProjects);
    } else {
      setFilteredProjects(myProjects.filter(project =>
        project.frntEnd.includes(filter) || (project.Db && project.Db.includes(filter))
      ));
    }
  };

  return (
    <div className='container' style={{ paddingTop: "150px" }}>
      <div style={{ minHeight: "100vh" }}>
        <h4 className='text-light fw-bolder text-center mb-5'>MY PROJECTS</h4>
        <div style={{ backgroundColor: "white" }} className='p-2 rounded d-flex justify-content-evenly flex-wrap align-items-center'>
          <button onClick={() => filterProjects("ALL")} className={myStyle.projectsFilterButton}>All</button>
          <button onClick={() => filterProjects("HTML")} className={myStyle.projectsFilterButton}>HTML</button>
          <button onClick={() => filterProjects("JAVASCRIPT")} className={myStyle.projectsFilterButton}>JavaScript</button>
          <button onClick={() => filterProjects("REACT")} className={myStyle.projectsFilterButton}>React</button>
          <button onClick={() => filterProjects("MONGO-DB")} className={myStyle.projectsFilterButton}>MERN</button>
        </div>
        <div className='d-flex justify-content-evenly align-items-center flex-wrap mt-4'>
          {
            filteredProjects.map(projects => (
              <div key={projects.id} style={{ backgroundColor: "rgba(246, 246, 246, 0.11)" }} className='p-4 rounded shadow mt-2'>
                <div>
                  <Card style={{ width: '18rem', border: "none" }} className='rounded'>
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
                          <img width={'100%'} className='img img-fluid' src={selectedProject?.img} alt="project-SS" />
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
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects