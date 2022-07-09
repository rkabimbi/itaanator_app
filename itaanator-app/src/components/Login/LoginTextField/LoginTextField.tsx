import React from 'react'
import TextField from "@mui/material/TextField";
import "./LoginTextField.sass"

export function LoginTextField() {
  return (
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
  )
}
