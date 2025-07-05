import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormApp from "./Components/form";
import HomePage from "./Components/HomePage";
import Shopping from "./Components/Shopping";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormApp />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Shopping" element={<Shopping />} />
      </Routes>
    </Router>
  );
}
