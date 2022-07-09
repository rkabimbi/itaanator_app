import React from 'react'
import "./Login.sass"
import { LoginForm} from '../loginForm/LoginForm'
import { LoginImg } from '../loginImg/LoginImg'

export function Login(): JSX.Element {
  return (
    <div className="Login"> 
      
        <div className="LoginStructure">
            <LoginImg/>
            <LoginForm/>
        </div>
   </div>
  )
}
