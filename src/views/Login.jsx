import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import "../css/Home.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Table from "../components/Table";
import Rating from "../components/Rating";
import RadioButtons from "../components/RadioButtons";
import InputTextField from "../components/InputTextField";
import Checks from "../components/Checks";
import InputPassword from "../components/InputPassword";
import "../css/Login.css";
import LoginIcon from "@mui/icons-material/Login";
import fondoLogin from "../imgs/fondoLogin.jpg";
import LoginController from "../controllers/LoginController";
import InputDate from "../components/InputDate";
import ButtonBasic from "../components/ButtonBasic";

function Login() {
  const { register, handleSubmit, errors, onSubmit, onError, control } =
    LoginController();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid xs={12}>
          <Box
            className="box-main-login"
            sx={{
              background: `url(${fondoLogin}) no-repeat center center fixed`,
              backgroundSize: "cover",
            }}
          >
            <Box className="box-login">
              <Box>
                <h1>Ingrese sus credenciales</h1>
              </Box>
              <form onSubmit={handleSubmit(onSubmit, onError)}>
                <InputTextField
                  nombreCampo="rut"
                  labelTitulo="Ingresa RUT"
                  className="item-login"
                  register={register}
                  error={errors.rut ? true : false}
                  helperText={errors.rut?.message}
                />

                <InputDate
                  nombreCampo="fechaNacimiento"
                  className="item-login"
                  control={control}
                  error={errors.fechaNacimiento ? true : false}
                  helperText={errors.fechaNacimiento?.message}
                />

                <ButtonBasic
                  variant="contained"
                  tipoBoton="login"
                  titulo="Iniciar Sesión"
                  className="item-login"
                  type="submit"
                ></ButtonBasic>
              </form>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;
