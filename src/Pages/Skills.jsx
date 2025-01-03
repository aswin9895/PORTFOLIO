import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import html from '../assets/html.png'
import css from '../assets/css3.png'
import js from '../assets/javascript.png'
import react from '../assets/react.png'
import node from '../assets/nodejs.png'
import mongoDb from '../assets/mongo-db.png'
import bootstrap from '../assets/bootstrap.webp'
import tailwind from '../assets/tailwind.webp'
import git from '../assets/github.webp'
import figma from '../assets/figma.webp'

const Skills = () => {

  return (
    <div className="container" style={{ paddingTop: "150px" }}>
      <div style={{ minHeight: "90vh", textAlign: "center" }}>
        <h4 className="text-light fw-bolder fs-2">MY SKILLS</h4>
        <div className="row justify-content-evenly align-items-center mt-5 pt-5 flex-wrap">
          <div className="col-sm-12 col-md-4 col-lg-2">
            <div style={{ width: 150, height: 150, position: "relative", margin: "0 auto" }}>
              {/* Circular Progress Bar */}
              <CircularProgressbar value={95} styles={buildStyles({ pathColor: "#FD6F00", trailColor: "#d6d6d6", strokeLinecap: "round" })} />
              {/* Image inside the circle */}
              <img src={html} alt="Skill Icon" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80px", height: "80px", borderRadius: "50%" }} />
            </div>
            <p className="text-light fw-bold mt-3 fs-5">HTML</p>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-2">
            <div style={{ width: 150, height: 150, position: "relative", margin: "0 auto" }}>
              {/* Circular Progress Bar */}
              <CircularProgressbar value={95} styles={buildStyles({ pathColor: "#FD6F00", trailColor: "#d6d6d6", strokeLinecap: "round" })} />
              {/* Image inside the circle */}
              <img src={css} alt="Skill Icon" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80px", height: "80px", borderRadius: "50%" }} />
            </div>
            <p className="text-light fw-bold mt-3 fs-5">CSS</p>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-2"> 
            <div style={{ width: 150, height: 150, position: "relative", margin: "0 auto" }}>
              {/* Circular Progress Bar */}
              <CircularProgressbar value={80} styles={buildStyles({ pathColor: "#FD6F00", trailColor: "#d6d6d6", strokeLinecap: "round" })} />
              {/* Image inside the circle */}
              <img src={js} alt="Skill Icon" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80px", height: "80px", borderRadius: "50%" }} />
            </div>
            <p className="text-light fw-bold mt-3 fs-5">JAVASCRIPT</p>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-2">
            <div style={{ width: 150, height: 150, position: "relative", margin: "0 auto" }}>
              {/* Circular Progress Bar */}
              <CircularProgressbar value={95} styles={buildStyles({ pathColor: "#FD6F00", trailColor: "#d6d6d6", strokeLinecap: "round" })} />
              {/* Image inside the circle */}
              <img src={react} alt="Skill Icon" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80px", height: "80px", borderRadius: "50%" }} />
            </div>
            <p className="text-light fw-bold mt-3 fs-5">REACT.JS</p>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-2">
            <div style={{ width: 150, height: 150, position: "relative", margin: "0 auto" }}>
              {/* Circular Progress Bar */}
              <CircularProgressbar value={90} styles={buildStyles({ pathColor: "#FD6F00", trailColor: "#d6d6d6", strokeLinecap: "round" })} />
              {/* Image inside the circle */}
              <img src={node} alt="Skill Icon" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80px", height: "80px", borderRadius: "50%" }} />
            </div>
            <p className="text-light fw-bold mt-3 fs-5">NODE.JS</p>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-2">
            <div style={{ width: 150, height: 150, position: "relative", margin: "0 auto" }}>
              {/* Circular Progress Bar */}
              <CircularProgressbar value={88} styles={buildStyles({ pathColor: "#FD6F00", trailColor: "#d6d6d6", strokeLinecap: "round" })} />
              {/* Image inside the circle */}
              <img src={mongoDb} alt="Skill Icon" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80px", height: "80px", borderRadius: "50%" }} />
            </div>
            <p className="text-light fw-bold mt-3 fs-5">MONGO-DB</p>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-2">
            <div style={{ width: 150, height: 150, position: "relative", margin: "0 auto" }}>
              {/* Circular Progress Bar */}
              <CircularProgressbar value={92} styles={buildStyles({ pathColor: "#FD6F00", trailColor: "#d6d6d6", strokeLinecap: "round" })} />
              {/* Image inside the circle */}
              <img src={bootstrap} alt="Skill Icon" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80px", height: "80px", borderRadius: "50%" }} />
            </div>
            <p className="text-light fw-bold mt-3 fs-5">BOOTSTRAP</p>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-2">
            <div style={{ width: 150, height: 150, position: "relative", margin: "0 auto" }}>
              {/* Circular Progress Bar */}
              <CircularProgressbar value={73} styles={buildStyles({ pathColor: "#FD6F00", trailColor: "#d6d6d6", strokeLinecap: "round" })} />
              {/* Image inside the circle */}
              <img src={tailwind} alt="Skill Icon" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80px", height: "80px", borderRadius: "50%" }} />
            </div>
            <p className="text-light fw-bold mt-3 fs-5">TAILWIND</p>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-2">
            <div style={{ width: 150, height: 150, position: "relative", margin: "0 auto" }}>
              {/* Circular Progress Bar */}
              <CircularProgressbar value={82} styles={buildStyles({ pathColor: "#FD6F00", trailColor: "#d6d6d6", strokeLinecap: "round" })} />
              {/* Image inside the circle */}
              <img src={git} alt="Skill Icon" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80px", height: "80px", borderRadius: "50%" }} />
            </div>
            <p className="text-light fw-bold mt-3 fs-5">GITHUB</p>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-2">
            <div style={{ width: 150, height: 150, position: "relative", margin: "0 auto" }}>
              {/* Circular Progress Bar */}
              <CircularProgressbar value={70} styles={buildStyles({ pathColor: "#FD6F00", trailColor: "#d6d6d6", strokeLinecap: "round" })} />
              {/* Image inside the circle */}
              <img src={figma} alt="Skill Icon" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80px", height: "80px", borderRadius: "50%" }} />
            </div>
            <p className="text-light fw-bold mt-3 fs-5">FIGMA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
