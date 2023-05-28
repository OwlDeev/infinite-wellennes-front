import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import "../css/Home.css";
import Buttons from "../components/Buttons";
import Typography from "@mui/material/Typography";
import Table from "../components/Table";
import Rating from "../components/Rating";
import RadioButtons from "../components/RadioButtons";
import TextField from "../components/InputTextField"
import Checks from "../components/Checks"

function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid xs={12}>
          <div className="divButtons sectionUno">
            <Typography variant="h3" gutterBottom>
              Colores y Tipografía
            </Typography>
            <div className="divMain">
              <div className="divColorPrimarioMain">
                <div className="divColorPrimario"></div>
                <Typography variant="h5" gutterBottom>
                  Color Primario
                </Typography>

                <div className="divColorSecundario"></div>
                <Typography variant="h5" gutterBottom>
                  Color Secundario
                </Typography>

                <div className="divColorTerciario"></div>
                <Typography variant="h5" gutterBottom>
                  Color terciario
                </Typography>
              </div>

              <div className="divColorPrimarioMain">
                <Typography variant="h5" gutterBottom>
                  Font: Roboto
                </Typography>
              </div>
            </div>
          </div>

          <div className="divButtons sectionDos">
            <Typography variant="h3" gutterBottom>
              Botones
            </Typography>
            <div className="divMain">
              <Buttons />
            </div>
          </div>

          <div className="divButtons">
            <Typography variant="h3" gutterBottom>
              Tablas
            </Typography>
            <div className="divMain">
              <Table />
            </div>
          </div>

          <div className="divButtons">
            <Typography variant="h3" gutterBottom>
              Componentes Inputs
            </Typography>
            <div className="divMain">
              <div className="itemInput">
                <Rating />
              </div>

              <div className="itemInput">
                <RadioButtons />
              </div>

              <div className="itemInput">
                <TextField />
              </div>

              <div className="itemInput">
                <Checks/>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
