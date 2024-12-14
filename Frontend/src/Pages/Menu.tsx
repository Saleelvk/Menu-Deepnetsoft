// Menu Component
import { useState, useEffect } from "react";
import Hero from "../Components/Hero";
import MenuFilter from "../Components/Menu-Filter";
import img1 from "../assets/images/glass-cup-red-juice-with-slices-grapefruit.png";
import img2 from "../assets/images/cocoa-vanilla-cookie-buns-with-lokum-glass-juice-wooden-platter.png";
import baseUrl from '../baseUrl'
interface MenuItem {
  _id: string;
  name: string;
  description: string;
  price: string;
}

function Menu() {
  const [menuId, setMenuId] = useState<string>(""); 
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [message, setMessage] = useState<string>("");

  // Fetch menu items when menuId changes
  useEffect(() => {
    if (!menuId) return;

    const fetchMenuItems = async () => {
      try {
        const response = await fetch(
          `${baseUrl}/menu/${menuId}/menuItem`
        );
        const data = await response.json();

        if (response.ok) {
          if (data.menuItems) {
            setMenuItems(data.menuItems);
          } else {
            setMessage("No menu items available.");
          }
        } else {
          setMessage("Failed to fetch menu items.");
        }
      } catch (error) {
        console.error("Error fetching menu items:", error);
        setMessage("Failed to fetch menu items.");
      }
    };

    fetchMenuItems();
  }, [menuId]);

  return (
    <div className="w-full ">
      <Hero/>
      <MenuFilter onMenuSelect={(id) => setMenuId(id)} />
      <div className="max-w-5xl mx-auto border-2 border-gray-800 py-10 px-10 rounded-md mt-14 relative">
        <div className="bg-black border-2 border-gray-800 ">
          <div className="p-6">
            <h2 className="text-3xl font-bold mb-6 items-center  justify-center flex font-Oswald">
              <span className="md:text-3xl text-xl "> &#8212;</span>
              BRUNCH COCKTAILS
              <span className="md:text-3xl text-xl"> &#8212;</span>
            </h2>

            <img
              className="absolute md:w-[300px] w-[200px] top-0 left-0 -translate-y-20 -translate-x-5   md:-translate-x-8 md:-translate-y-32"
              src={img1}
              alt=""
            />
            <img
              className="absolute md:w-[450px] w-[250px] bottom-0 right-0 transform md:translate-x-16 translate-x-2 md:translate-y-16 translate-y-10"
              src={img2}
              alt=""
            />

            {message && (
              <p className="text-center text-red-500 mb-4">{message}</p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 font-poppins">
              {menuItems.length > 0 ? (
                menuItems.map((item) => (
                  <div
                    key={item._id}
                    className="flex justify-between items-start border-gray-800 pb-4"
                  >
                    <div>
                      <h3 className="font-bold font-Oswald">{item.name}</h3>
                      <p className="text-sm text-gray-400 mt-1 font-KellySlab">
                        {item.description}
                      </p>
                    </div>
                    <div className="font-bold font-Oswald">{item.price}</div>
                  </div>
                ))
              ) : (
                <p>No menu items available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
