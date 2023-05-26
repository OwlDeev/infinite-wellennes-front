import AppBar from "./components/AppBar";
import { Typography } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import { Provider } from "./Context";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#0d6cc6",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Provider>
          <BrowserRouter>
            <AppBar></AppBar>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="https://owldeev.github.io/iw-componentes/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </Provider>

        <footer className="footer">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} p={1}>
            <center>2023 Infinite Wellness© by Eagles Academy.</center>
          </Typography>
          {/* dejar iconos de linkedin, youtube y wsp */}
        </footer>
      </div>
    </ThemeProvider>
  );
}
