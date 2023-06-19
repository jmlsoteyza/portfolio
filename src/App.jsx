import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import FadeRoutes from "./Components/FadeRoutes";

function App() {
  return (
    <section className="Route-Layout">
      <Router>
        <Navbar />
        <FadeRoutes />
      </Router>
    </section>
  );
}

export default App;
