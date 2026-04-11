import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import "./Terminal.css";

const AlterEgo = (props) => {
   
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
      <div 
        ref={nodeRef} 
        className="main_window4" 
        style={{position: "absolute", top: position.top, left: position.left, zIndex: layer}}
      >
        <div 
          className="navigation" 
          onMouseDown={() => props.bringtoFront(setLayer)}
        >
          <div 
            className="dv1" 
            onClick={() => props.setOpen(prev => prev.filter(item => item !== 'alterego'))}
          ></div>
          <div className="dv2"></div>
          <div className="dv3"></div>
        </div>

        <div 
          className="main_content" 
          onMouseDown={() => props.bringtoFront(setLayer)}
        >

          <h1 className="project">{">"} AlterEgo_</h1>
          <hr />

          <p className="projects">{">"} project_description</p>
          <p className="project_text">
            AlterEgo is an AI-powered conversational assistant designed to
            adapt to user personalities and provide human-like interactions.
            It acts like a personalized digital companion with contextual
            understanding and adaptive responses.
          </p>

          <br />

          <p className="features">{">"} features</p>
          <p className="project_text">
            • Personality-based response adaptation <br/>
            • Real-time chat interface <br/>
            • Context-aware conversations <br/>
            • Smooth and interactive UI experience
          </p>

          <br />

          <p className="tech">{">"} tech_stack</p>
          <p className="project_text">
            • React <br/>
            • CSS <br/>
            • Gemini API <br/>
          </p>

          <br />

          <p className="git">{">"} github_repository</p>
          <p className="contact_link">
            <a
              href="https://github.com/your-repo-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/your-repo-link
            </a>
          </p>

          <br />

          <p className="stat">{">"} status</p>
          <p className="project_text">
            Actively in development 🚀
          </p>

        </div>
      </div>
      </Draggable>
    </div>
  );
};

export default AlterEgo;