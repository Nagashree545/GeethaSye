import { useState } from 'react'

import './App.css'
import { Header } from './Components/Header'
import { Hero } from './Components/Hero'
import { About } from './Components/About'
import { AwardsTable } from './Components/Award'
import { Works } from './Components/Work'
import { Contact } from './Components/Contact'
import { Footer } from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header/>
   <Hero/>
   <About/>
   <AwardsTable/>
   <Works/>
   <Contact/>
   <Footer/>
    </>
  )
}

export default App
