import React, { useEffect, useRef, useState } from "react";
import myImage from "../assets/MyImg.jpeg";
import Draggable from "react-draggable";
import "./Terminal.css";

const About = (props) => {

  const nodeRef = useRef(null);

  const [position, setPosition] = useState({ top: 100, left: 100 });

  useEffect(() => {

    const windowWidth = 500;
    const windowHeight = 350;

    const margin = 20;

    const randomLeft =
      margin + Math.random() * (window.innerWidth - windowWidth - margin * 2);

    const randomTop =
      margin + Math.random() * (window.innerHeight - windowHeight - margin * 2);

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
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"></link>
      <Draggable nodeRef={nodeRef} handle=".main_window2">
        <div ref={nodeRef} className="main_window2" style={{ position: "absolute", top: position.top, left: position.left, zIndex: layer }}>
          <div className="navigation" onMouseDown={() => props.bringtoFront(setLayer)}>
            <div className="dv1" onClick={() => props.setOpen(prev => prev.filter(item => item !== 'about'))}></div>
            <div className="dv2"></div>
            <div className="dv3"></div>
          </div>

          <div className="main_content2" onMouseDown={() => props.bringtoFront(setLayer)}>

            <h1 className="Abm">{">"} About Mayank_</h1>
            <hr />

            <p className="who">{">"} Who am I?</p>
            <p className="about_text">
              Hello, I'm <span className="highlight">Mayank Kumar</span>.
              I'm a passionate developer who enjoys building web applications
              and experimenting with new technologies.
            </p>

            <br />
            <div className="terminal_body">
              <div className="terminal_left">

                <p className="skills">{">"} skills</p>
                <p className="about_text">
                  • <i className="devicon-java-plain colored"></i> Java <br />
                  • <i className="devicon-c-plain colored"></i> C <br />
                  • <i className="devicon-python-plain colored"></i> Python <br />
                  • <i className="devicon-html5-plain colored"></i> HTML<br />
                  • <i className="devicon-css3-plain colored"></i> CSS <br />
                  • <i className="devicon-javascript-plain colored"></i> JavaScript <br />
                  • <i className="devicon-react-original colored"></i> React <br />
                  • <i className="devicon-spring-original colored"></i> Spring Boot <br />
                  • <i className="devicon-mysql-original colored"></i> MySQL
                </p>


              </div>
              <div className="terminal_right">
                <img src={myImage} alt="Mayank" />
              </div>
            </div>
            <br />

            <p className="interests">{">"} interests</p>
            <p className="about_text">
              I enjoy building projects, learning new programming concepts,
              editing AMVs, and exploring how software systems work.
            </p>

            <br />

            <p className="current">{">"} current_goal</p>
            <p className="about_text">
              Currently focusing on improving my full-stack development skills
              and building useful projects.
            </p>

          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default About;