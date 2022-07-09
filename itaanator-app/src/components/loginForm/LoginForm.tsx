import * as React from "react";
import "./LoginForm.sass";

import TextField from "@mui/material/TextField";
import LogoBFS from "../../assets/images/LogoBFS.jpeg";
import Button from "@mui/material/Button";

export function LoginForm(): JSX.Element {
  return (
    <div className="LoginForm">
      <img className="LoginLogo" src={LogoBFS} />

      <div className="LoginBox">
        <TextField
          className="TextField"
          id="outlined-basic"
          label="Nom d'utilisateur"
          variant="outlined"
        />
        <TextField
          className="TextField"
          id="outlined-password-input"
          label="Mot de passe"
          type="password"
          autoComplete="current-password"
        />
      </div>

      <div className="LoginBtnGrp">
        <Button className="LoginBtn" variant="contained">SE CONNECTER</Button>
        <Button className="LoginBtn" variant="text"> MOT DE PASSE OUBLIE</Button>
     
      </div>


    </div>
  );
}
