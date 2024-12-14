import { CiTwitter } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import logo from '../assets/Logo.png';

function Footer() {
  return (
    <div className="flex flex-col">
      {/* Footer Section */}
      <footer className="border-gray-800 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] w-full pt-3 bg-black relative">
        <div className="container mx-auto px-4 my-10">
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3">
            <div className="border py-4 rounded-lg text-center">
              <h3 className="text-blue-500 font-bold mb-2">CONNECT WITH US</h3>
              <p className="text-gray-400">+91 9591842340</p>
              <p className="text-gray-400">info@deepnetsoft.com</p>
            </div>
            <div className="border py-6 rounded-lg flex flex-col items-center relative">
              {/* Logo */}
              <div className="flex justify-center items-center md:-mt-16"> 
                <img className="h-20" src={logo} alt="Logo" />
              </div>
              <h3 className="text-2xl font-bold text-blue-500 pt-3 text-center">
                DEEP NET SOFT
              </h3>
              <div className="flex text-gray-300 justify-center gap-4 mt-2">
                <FaFacebook />
                <FaSquareInstagram />
                <CiTwitter />
              </div>
            </div>
            <div className="border py-4 rounded-lg text-center">
              <h3 className="text-blue-500 font-bold mb-2">FIND US</h3>
              <p className="text-gray-400">First Floor, One Infopark,</p>
              <p className="text-gray-400">Infopark EPIP, Kakkanad</p>
            </div>
          </div>
        </div>
      </footer>
      <div>
        {/* Gray Footer Bottom Section */}
        <div className="bg-gray-900 text-gray-400 text-center md:flex md:justify-around md:mx-auto justify-center items-center py-2 font-poppins sm:text-xs text-[9px] w-full">
          <p>© 2024 DeepNetSoft Solutions. All rights Reserved.</p>
          <div className="flex gap-2 justify-center md:justify-normal">
            <div className="text-center">Terms & Conditions</div>
            <div className="text-center">Privacy Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
