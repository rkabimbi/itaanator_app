import React from 'react'
import "./Login.sass"
import { LoginForm} from '../LoginForm/LoginForm'
import { LoginImg } from '../LoginImg/LoginImg'

export default function Login(): JSX.Element {
  return (
    <div className="Login"> 
      
        <div className="LoginStructure">
            <LoginImg/>
            <LoginForm/>
        </div>
   </div>
  )
}
