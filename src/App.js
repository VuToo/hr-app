import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import CarrerOpportunities from "./pages/CarrerOpportunities";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import SubmitCV from "./pages/SubmitCV";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/search-job" element={<CarrerOpportunities/>} />
          <Route path="/news" element={<Blog/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/uploadcv" element={<SubmitCV/>} />
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
