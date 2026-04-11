import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import "./Terminal.css";

const HabitStreak = (props) => {

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
  const [layer, setLayer] = useState(1);

  useEffect(() => {
    props.bringtoFront(setLayer);
  }, [])

  return (
    <div>
      <Draggable nodeRef={nodeRef} handle=".main_window4">
        <div ref={nodeRef} className="main_window4" style={{ position: "absolute", top: position.top, left: position.left, zIndex: layer }}>
          <div className="navigation" onMouseDown={() => props.bringtoFront(setLayer)}>
            <div className="dv1" onClick={() => props.setOpen(prev => prev.filter(item => item !== 'habit-streak-tracker'))}></div>
            <div className="dv2"></div>
            <div className="dv3"></div>
          </div>

          <div className="main_content" onMouseDown={() => props.bringtoFront(setLayer)}>

            <h1 className="project">{">"} Habit-Streak-Tracker_</h1>
            <hr />

            <p className="projects">{">"} project_description</p>
            <p className="project_text">
              Habit Streak Tracker is a productivity web application that helps
              users build and maintain daily habits by tracking streaks and
              progress over time.
            </p>

            <br />

            <p className="features">{">"} features</p>
            <p className="project_text">
              • Add and manage daily habits <br />
              • Track streaks and progress <br />
              • Simple and clean dashboard <br />
              • Helps users stay consistent
            </p>

            <br />

            <p className="tech">{">"} tech_stack</p>
            <p className="project_text">
              • Spring Boot <br />
              • MySQL <br />
              • REST API <br />
              • HTML <br />
              • CSS <br />
              • JavaScript
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
            <p className="git">{">"} live_demo</p>
            <p className="contact_link">
              <a
                href="https://habitstreaktracker.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Habit-Streak-Tracker Live Demo
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

export default HabitStreak;