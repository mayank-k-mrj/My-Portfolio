import React, { useEffect, useState, useRef } from "react";
import Draggable from "react-draggable";
import "./Terminal.css";

const Contact = (props) => {

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

   useEffect(() => {
       props.bringtoFront(setLayer);
     }, [])

   const [layer, setLayer] = useState(1);

  return (
    <div>
        <Draggable nodeRef={nodeRef} handle=".main_window3">
      <div ref={nodeRef} className="main_window3" style={{position: "absolute", top: position.top, left: position.left, zIndex: layer}}>
        <div className="navigation" onMouseDown={() => props.bringtoFront(setLayer)}>
          <div className="dv1" onClick={() => props.setOpen(prev => prev.filter(item => item !== 'contact'))}></div>
          <div className="dv2"></div>
          <div className="dv3"></div>
        </div>

        <div className="main_content3" onMouseDown={() => props.bringtoFront(setLayer)}>

          <h1>{">"} Contact Mayank_</h1>
          <hr />

          <p className="who">{">"} Who am I?</p>
          <p className="contact_text">
            Mayank Kumar — Full Stack Developer
          </p>

          <br />

          <p className="email">{">"} email</p>
          <p className="contact_text">
            <a href="mailto:mayankcica@gmail.com">
              mayankcica@gmail.com
            </a>
          </p>

          <br />

          <p className="git">{">"} github</p>
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

          <p className="ln">{">"} linkedin</p>
          <p className="contact_link">
            <a 
              href="https://www.linkedin.com/in/mayank-kumar-b0715736a"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/mayank-kumar-b0715736a
            </a>
          </p>

          <br />

          <p className="msg">{">"} message</p>

          <div className="contact_form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button>Send</button>
          </div>

        </div>
      </div>
      </Draggable>
    </div>
  );
};

export default Contact;