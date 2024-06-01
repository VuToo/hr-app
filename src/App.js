import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import CarrerOpportunities from "./pages/CarrerOpportunities";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import SubmitCV from "./pages/SubmitCV";
import TermsOfUse from "./pages/TermsOfUse";
import FirstService from "./pages/FirstService";
import SecondService from "./pages/SecondService";
import ThirdService from "./pages/ThirdService";
import DetailJob from "./pages/DetailJob";
import ApplyCv from "./pages/ApplyCv";

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
          <Route path="/terms-of-use" element={<TermsOfUse/>} />
          <Route path="/headhunting-service" element={<FirstService/>} />
          <Route path="/talent-sourcing" element={<SecondService/>} />
          <Route path="/company-system-building" element={<ThirdService/>} />
          <Route path="/detail-job/:id" element={<DetailJob/>} />
          <Route path="/apply-cv" element={<ApplyCv/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
