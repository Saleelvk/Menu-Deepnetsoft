import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";




import Footer from "./Components/Footer";
import Menu from "./Pages/Menu";

export default function App() {
  return (  
    <div>

      <NavBar />
    <div className="min-h-screen bg-black text-white px-4  sm:px-[5vw] md:px-[7vw] lg:px-[9vw]  ">
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Menu" element={<Menu />} />
  
        </Routes>                 
      </main>
      <div>

      </div>
    </div>
    <Footer/>
    </div>
  );
}
