import React from 'react'
import "./Login.sass"
import { LoginForm} from "../../components/Login/LoginForm/LoginForm"
import { LoginImg } from '../../components/Login/LoginImg/LoginImg'

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
