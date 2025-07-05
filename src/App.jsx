import { Routes, Route } from "react-router-dom";
import EducationPage from "./pages/EducationPage";
import Home from "./pages/Home";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/education" element={<EducationPage />} />
    </Routes>
  );
}

export default App;