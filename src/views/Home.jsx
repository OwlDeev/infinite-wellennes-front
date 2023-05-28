import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import "../css/Home.css";
import CardBasic from "../components/CardBasic";

function Home() {
  return (
    <Box sx={{ flexGrow: 1 }} className="box-main-home">
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Box sx={{ p: 2 }}>
            <Grid container spacing={2}>
              <Grid xs={6}>
                <Box className="box-card-basic">
                  <CardBasic tipoBoton='editar' titulo='Realizar encuesta' withCard={400}></CardBasic>
                </Box>
              </Grid>
              <Grid xs={6}>
                <Box className="box-card-basic">
                  <CardBasic tipoBoton='editar' titulo='Realizar encuesta' withCard={400}></CardBasic>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
