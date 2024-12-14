import { Route, Routes } from 'react-router-dom';
import Hero from './Components/Hero';
import NavBar from './Components/Navbar';
import Menu from './Pages/Menu';
import Mainmenu from './Pages/Mainmenu';
import MenuItems from './Pages/MenuItems';

function App() {
  return (
    <>
      <NavBar /> {/* Navbar will persist across pages */}
      <Routes>
        <Route path="/" element={<Hero />} /> {/* Default route */}
        <Route path="/menu:/id" element={<Menu />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/menuItems" element={<Mainmenu />} />
        <Route path="/Items/:Id" element={<MenuItems />}/>
      </Routes>
    </>
  );
}

export default App;
