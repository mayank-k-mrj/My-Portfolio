import { useState } from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import HabitStreak from './components/HabitStreak'
import Terminal from './components/Terminal'
import MedSetu from './components/MedSetu'
import AlterEgo from './components/AlterEgo'

function App() {

  const [text , setText] = useState('');

  const [zindex, setZindex] = useState(1);

  const [open, setOpen] = useState([]);

  function bringtoFront(setLayer){
    setZindex(prev => {
      const newZ = prev + 1;
      setLayer(newZ);
      console.log(newZ);
      return newZ;
    })
  }

  return (
   <div className='main_box'>
    <Terminal text = {text} setText = {setText} setOpen = {setOpen}  bringtoFront = {bringtoFront}/>
    {open.includes('about') && <About setOpen = {setOpen} zindex = {zindex} setZindex = {setZindex} bringtoFront = {bringtoFront}/>}
    {open.includes('contact') && <Contact setOpen = {setOpen} zindex = {zindex} setZindex = {setZindex} bringtoFront = {bringtoFront}/>}
    {open.includes('alterego') && <AlterEgo setOpen = {setOpen} zindex = {zindex} setZindex = {setZindex} bringtoFront = {bringtoFront}/>}
    {open.includes('habit-streak-tracker') && <HabitStreak setOpen = {setOpen} zindex = {zindex} setZindex = {setZindex} bringtoFront = {bringtoFront}/>}
    {open.includes('medsetu') && <MedSetu setOpen = {setOpen} zindex = {zindex} setZindex = {setZindex} bringtoFront = {bringtoFront}/>}
    
   </div>
  )
}

export default App
