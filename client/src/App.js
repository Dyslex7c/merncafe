import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "theme";
import HomePage from "screens/homepage";
import MenuPage from "screens/menupage";
import LocationPage from "screens/locationpage";

function App() {
  const mode = useSelector((state) => state.mode);
  console.log(mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  
  return (
    <div className="app">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/menu" element={<MenuPage/>} />
          <Route path="/location" element={<LocationPage/>} />
        </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
