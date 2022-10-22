import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/projects";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portofolio/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
