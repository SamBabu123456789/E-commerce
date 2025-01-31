import { useState } from 'react'

import './App.css'
import {Routes,Route} from 'react-router-dom'
import {LoginPage} from './Routes/Routes'

function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<LoginPage/>}></Route>
     </Routes>
    </>
  )
}

export default App
