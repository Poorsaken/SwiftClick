import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/NavbarComponent/navbar'
import Hero from './Components/HeroComponent/hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero></Hero>
    <Navbar></Navbar>
    </>
  )
}

export default App
