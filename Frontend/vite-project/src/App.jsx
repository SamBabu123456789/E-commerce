import { useState } from 'react'

import './App.css'
import {Routes,Route} from 'react-router-dom'
import {LoginPage,SignupPage} from './Routes/Routes'

function App() {
  

  return (
    <>
     <Routes>
      <Route path='/Login' element={<LoginPage/>}></Route>
      <Route path='/Signup' element={<SignupPage/>}></Route>
     </Routes>
    </>
  )
}

export default App
