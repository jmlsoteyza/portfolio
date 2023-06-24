import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import FadeRoutes from "./Components/FadeRoutes";
import { createContext, useState } from "react";

export const ThemeFunction = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeFunction.Provider value={{ theme, toggleTheme }}>
        <Router id={theme}>
          <Navbar />
          <FadeRoutes />
        </Router>
    </ThemeFunction.Provider>
  );
}

export default App;
