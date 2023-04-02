import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Pricelist from './Components/Pricelist/Pricelist'
import Dashboard from './Components/Dashboard/Dashboard'
import Phonebar from './Components/Phonebar/Phonebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <Pricelist></Pricelist>
      <Dashboard></Dashboard>
      <Phonebar></Phonebar>
    </div>
  )
}

export default App
