import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../css/InputTextField.css"

export default function InputTextFields(props) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label={props.labelTitulo}
        variant="outlined"
        type={props.tipoCampo}
        name={props.nombreCampo}
        {...props.register(props.nombreCampo)} // Pasando el registro de react-hook-form
        error={props.error} // Pasando el estado de error
        helperText={props.helperText} // Pasando el texto de ayuda, que en este caso es el mensaje de error
        className={"inputTextField"}
      />
    </Box>
  );
}
