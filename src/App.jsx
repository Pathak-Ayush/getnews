import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
const App = () => {
  return (
    
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      
    </Router>
  )
}

export default App