import * as React from "react";
import "./LoginForm.sass";

import TextField from "@mui/material/TextField";
import LogoBFS from "../../../assets/images/LogoBFS.jpeg";
import Button from "@mui/material/Button";
import { useState,useEffect} from "react";

import { loginPasswordList } from "../../../model/login/LoginList"; //biensur à ne jamais faire
import { Login } from "../../../model/login/Login";
import { useNavigate } from 'react-router-dom'

export function LoginForm(): JSX.Element {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [logged,setLogged]= useState(false)

  const navigate = useNavigate()

  //màj du state username
  const saveUsername = (e: any): void => {
    setUsername(e.target.value);
    console.log(username);
  };

  //màj du state password
  const savePassword = (e: any): void => {
    setPassword(e.target.value);
    console.log(password);
  };

  //verifier que les username et password du state sont dans la DB (à faire normalement avec un lien vers nodeJs)
  const creditentialsVerification = (): void => {
    console.log("click on connect");
    loginPasswordList.forEach((user: Login) => {
      if (user.username == username) {
        if (user.password == password) {
          console.log("username/password ok");
          setLogged(true);
         
        }
      }
    });
    console.log("username/password nok");
    
  };

  //track chgmt sur logged et réalise action à chaque màj
  useEffect(()=>{
    if(logged){
      console.log("redirection")
      navigate("/dashboard")
    }

  }, [logged])



  //fonction de redirection vers le dashboard
  const goDashboard = () :any =>{
    console.log("godashboard")
    return navigate("/dashboard")
  }

  return (
    <div className="LoginForm">
      <img className="LoginLogo" src={LogoBFS} />

      <div className="LoginBox">
        <TextField
          className="TextField"
          id="outlined-basic"
          label="Nom d'utilisateur"
          variant="outlined"
          onInput={saveUsername}
        />
        <TextField
          className="TextField"
          id="outlined-password-input"
          label="Mot de passe"
          type="password"
          autoComplete="current-password"
          onInput={savePassword}
        />
      </div>

      <div className="LoginBtnGrp">
        <Button
          className="LoginBtn"
          variant="contained"
          onClick={creditentialsVerification}
        >
          SE CONNECTER
        </Button>
        <Button className="LoginBtn" variant="text">
          {" "}
          MOT DE PASSE OUBLIE
        </Button>
      </div>
    </div>
  );
}
