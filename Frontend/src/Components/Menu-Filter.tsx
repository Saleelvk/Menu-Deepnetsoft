import baseUrl from "../baseUrl"
// MenuFilter Component
import { useState, useEffect } from "react";

interface Menu {
  _id: string;
  name: string;
}

interface MenuFilterProps {
  onMenuSelect: (menuId: string) => void; // Callback function to pass selected menuId
}

function MenuFilter({ onMenuSelect }: MenuFilterProps) {

  const [menus, setMenus] = useState<Menu[]>([]); // State to store fetched menus
  const [message, setMessage] = useState<string>(""); // For error or no data message


  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await fetch(`${baseUrl}/menu`);
        const data = await response.json();

        if (response.ok) {
          if (data.menus) {
            setMenus(data.menus); // Set the fetched menus to state
          } else {
            setMessage("No menus available.");
          }
        } else {
          setMessage("Failed to fetch menus.");
        }
      } catch (error) {
        console.error("Error fetching menus:", error);
        setMessage("Failed to fetch menus.");
      }
    };

    fetchMenus();
  }, []);

  return (
    <div>
 
      {message && <p className="text-center text-red-500 ">{message}</p>}

      <div className="flex justify-center space-x-4 font-poppins">
        {menus.length > 0 ? (
          menus.map((menu) => (
            <button
              key={menu._id}
              className="bg-black focus:bg-blue-600 px-4  mt-8  border-[1px] border-blue-500 font-Oswald text-lg rounded-sm"
              onClick={() => onMenuSelect(menu._id)}
            >
              {menu.name}
            </button>
          ))
        ) : (
          <p>No menus available</p>
        )}
      </div>
    </div>
  );
}

export default MenuFilter;