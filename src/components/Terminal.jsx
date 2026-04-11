import React, { useState, useEffect, useRef } from 'react'
import Draggable from "react-draggable";
import "./Terminal.css"

const Terminal = (props) => {

  const nodeRef = useRef(null);

  const [isdisabled, setIsdisabled] = useState(false);

  const [isDisplayed, setIsDisplayed] = useState(false);

  const [content, setContent] = useState("");
  function handleContent(text) {
    setContent(text);
  }

  useEffect(() => {

    const handleKey = (e) => {
      if (e.key === "Enter") {
        if (content.trim() !== '') {
          if (content.toLowerCase() === "help") {
            setIsdisabled(true)
            setIsDisplayed(true);
            return
          }
          else if (content.toLowerCase() === "about") {
            props.setOpen((prev) => [...prev, "about"]);
            return
          }
          else if (content.toLowerCase() === "contact") {
            props.setOpen((prev) => [...prev, "contact"]);
            return
          }
          else if (content.toLowerCase() === "habit-streak-tracker") {
            props.setOpen((prev) => [...prev, "habit-streak-tracker"]);
            return
          }
          else if (content.toLowerCase() === "medsetu") {
            props.setOpen((prev) => [...prev, "medsetu"]);
            return
          }
          else if (content.toLowerCase() === "alterego"){
            props.setOpen((prev) => [...prev, "alterego"]);
            return
          }
          setIsDisplayed(true);
          alert("Type 'help' to continue");
        }
      }
    }

    window.addEventListener("keypress", handleKey);

    return () => window.removeEventListener("keypress", handleKey);

  }, [content]);

  const [layer, setLayer] = useState(1)

  return (

    <div>
      <Draggable nodeRef={nodeRef} handle=".main_window1" cancel="input">
        <div ref={nodeRef} className="main_window1" style={{ position: "relative", zIndex: layer }}>
          <div className="navigation" onMouseDown={() => props.bringtoFront(setLayer)}>
            <div className="dv1" title='close' onClick={() => alert("Can't close this terminal")}></div>
            <div className="dv2" title='minimize'></div>
            <div className="dv3" title='maximize'></div>
          </div>
            <div className="main_content" onMouseDown={() => props.bringtoFront(setLayer)}>
              <h1 className="first_heading">
                {">"} Mayank Kumar_
              </h1>
              <hr />
              <p className="C">C:/User/Mayank</p>
              <p className="dir">{">"} dir</p>
              <br />
              <p className="info">{">"} Info:</p>
              <p className="about">{">"} /About</p>
              <p className="contact">{">"} /Contact</p>
              <br />
              <p className="projects">{">"} Projects:</p>
              <p className="ale">{">"} <u>/AlterEgo</u></p>
              <p className="hst">{">"} <u>/Habit-Streak-Tracker</u></p>
              <p className="medsetu">{">"} <u>/MedSetu</u></p>
              <br />
              <p className="dir">{">"} Please write your query:</p>
              <label className='C' htmlFor="">{">"} C:/User/Mayank/</label>
              <input type="text" placeholder='help' disabled={isdisabled} autoFocus onChange={(e) => handleContent(e.target.value)} />
              <br />
              <br />
              <p className='a' style={{ display: isDisplayed ? "block" : "none" }}>{">"} Type:
                <br />
                {">"} /about <br />{">"} /contact <br />{">"} /{"<"}project-name{">"} <br /> to open new terminal.
              </p>
              <br />
              <label className='C' style={{ display: isDisplayed ? "inline-block" : "none" }} htmlFor="">{">"} C:/User/Mayank/</label>
              <input className='b' autoFocus style={{ display: isDisplayed ? "inline-block" : "none" }} type="text" placeholder='help' onChange={(e) => handleContent(e.target.value)} />
            </div>
          </div>
      </Draggable>
    </div>
  )
}

export default Terminal
