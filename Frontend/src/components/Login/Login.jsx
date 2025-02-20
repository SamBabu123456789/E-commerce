import React from 'react'
import { useState } from 'react'



const Login = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  return (
    <div>
      <div>
        <div>
            <h1>User Login</h1>
        </div>
        <div>
            <form>
                <div> 
                    <input type="text" required value={email} placeholder='Email'/>
                </div>
                <div>
                  <input type="text" required value={password} placeholder='Password' />
                </div>
                <div>
                    <button type='submit'>Login</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
