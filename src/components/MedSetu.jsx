import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import "./Terminal.css";

const MedSetu = (props) => {
   
   const nodeRef = useRef(null);

   const [position, setPosition] = useState({top: 100, left: 100});
   
   useEffect(() => {
   
   const windowWidth = 500;
   const windowHeight = 350;
   
   const margin = 20;
   
   const randomLeft =
   margin + Math.random() * (window.innerWidth - windowWidth - margin*2);
   
   const randomTop =
   margin + Math.random() * (window.innerHeight - windowHeight - margin*2);
   
   setPosition({
   top: randomTop,
   left: randomLeft
   });
   
   }, []);

   const [layer, setLayer] = useState(1);

   useEffect(() => {
       props.bringtoFront(setLayer);
     }, [])

  return (
    <div>
        <Draggable nodeRef={nodeRef} handle=".main_window4">
      <div ref={nodeRef} className="main_window4" style={{position: "absolute", top: position.top, left: position.left, zIndex: layer}}>
        <div className="navigation" onMouseDown={() => props.bringtoFront(setLayer)}>
          <div className="dv1" onClick={() => props.setOpen(prev => prev.filter(item => item !== 'med-setu'))}></div>
          <div className="dv2"></div>
          <div className="dv3"></div>
        </div>

        <div className="main_content" onMouseDown={() => props.bringtoFront(setLayer)}>

          <h1 className="project">{">"} Med-Setu_</h1>
          <hr />

          <p className="projects">{">"} project_description</p>
          <p className="project_text">
            Med-Setu is a healthcare assistance platform designed to help users
            easily find nearby medical facilities, access health information,
            and connect patients with healthcare services through a simple
            digital interface.
          </p>

          <br />

          <p className="features">{">"} features</p>
          <p className="project_text">
            • Find nearby hospitals and clinics <br/>
            • Access basic health information <br/>
            • Connect users with healthcare services <br/>
            • User-friendly interface for quick navigation
          </p>

          <br />

          <p className="tech">{">"} tech_stack</p>
          <p className="project_text">
            • React <br/>
            • Spring Boot <br/>
            • MySQL <br/>
            • REST API
          </p>

          <br />

          <p className="git">{">"} github_repository</p>
          <p className="contact_link">
            <a
              href="https://github.com/mayank-k-mrj"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/mayank-k-mrj
            </a>
          </p>

          <br />

          <p className="stat">{">"} status</p>
          <p className="project_text">
            Currently under development 🚧
          </p>

        </div>
      </div>
      </Draggable>
    </div>
  );
};

export default MedSetu;