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
    <ThemeFunction.Provider value={{ toggleTheme, theme }}>
      <div className="main-component" id={theme}>
        <Router>
          <Navbar />
          <FadeRoutes />
        </Router>
      </div>
    </ThemeFunction.Provider>
  );
}

export default App;
