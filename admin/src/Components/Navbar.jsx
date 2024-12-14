import logo from '../assets/Logo.png';
import DEEP from '../assets/DEEP NET.png';
import SOFT from '../assets/SOFT.png';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="fixed top-0 left-0 w-full bg-gray-800 text-gray-400 shadow-lg">
      <nav className="flex flex-col md:flex-row justify-between items-center px-3 py-5 md:py-7">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img className="w-10 sm:w-12" src={logo} alt="Logo" />
          <img className="object-contain h-6 sm:h-8" src={DEEP} alt="DEEP NET" />
          <img className="object-contain h-6 sm:h-8" src={SOFT} alt="SOFT" />
        </div>

        {/* Admin Section */}
        <Link to={'/'}>
        <div className="bg-black text-center font-semibold px-4 py-2 rounded-lg text-white mt-3 md:mt-0">
          ADMIN PAGE
        </div>
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
