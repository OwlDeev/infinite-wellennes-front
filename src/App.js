import AppBar from "./components/AppBar";
import { Typography } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Footer from "./components/Footer";
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
              <Route path="/login" element={<Login />} />
              <Route
                path="https://owldeev.github.io/iw-componentes/"
                element={<Home />}
              />
            </Routes>
            <Footer></Footer>
          </BrowserRouter>
        </Provider>
      </div>
    </ThemeProvider>
  );
}
