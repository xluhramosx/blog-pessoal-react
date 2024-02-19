import "./App.css";
import NavBar from "./componentes/navBar/NavBar";
import Footer from "./componentes/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <div className="min-h-[80vh]">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
    </>
 );
}
export default App;