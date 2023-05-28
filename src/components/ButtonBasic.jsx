import * as React from "react";
import "../css/Buttons.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SaveIcon from "@mui/icons-material/Save";
import DoneIcon from "@mui/icons-material/Done";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import EditIcon from '@mui/icons-material/Edit';
import LoginIcon from "@mui/icons-material/Login";
import Box from "@mui/material/Box";

function ButtonBasic(props) {
  const getIcon = (tipo) => {
    switch (tipo) {
      case "eliminar":
        return <DeleteIcon />;
      case "volver":
        return <ArrowBackIcon />;
      case "guardar":
        return <SaveIcon />;
      case "aceptar":
        return <DoneIcon />;
      case "iniciar":
        return <HourglassEmptyIcon />;
      case "login":
        return <LoginIcon />;
      case "editar":
        return <EditIcon />;
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1, width: "100%" },
      }}
    >
      <Button variant="contained" startIcon={getIcon(props.tipoBoton)} type="submit">
        {props.titulo}
      </Button>
    </Box>
  );
}

export default ButtonBasic;
