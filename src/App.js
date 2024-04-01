import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import CarrerOpportunities from "./pages/CarrerOpportunities";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/search-job" element={<CarrerOpportunities/>} />
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
