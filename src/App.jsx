import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./styles/main.css";
import GioiThieu from "./components/GioiThieu";


function App() {
  
  return (
    
    <BrowserRouter>
 
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/gioi-thieu" element={<GioiThieu />} /> */}
      </Routes>
    </BrowserRouter>
  );
}


export default App;