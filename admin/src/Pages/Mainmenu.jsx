import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai';
import baseUrl from '../baseUrl';
function Menumenu() {
  const [menus, setMenus] = useState([]);
  const [message, setMessage] = useState('');

  
  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await fetch(`${baseUrl}/menu`);
        const data = await response.json();

        if (response.ok) {
          if (data.menus) {
            setMenus(data.menus); // Set the fetched menus to state
          } else {
            setMessage('No menus available.');
          }
        } else {
          setMessage('Failed to fetch menus.');
        }
      } catch (error) {
        console.error('Error fetching menus:', error);
        setMessage('Failed to fetch menus.');
      }
    };

    fetchMenus();
  }, []);

  // Function to handle menu deletion
  const deleteMenu = async (menuId) => {
    try {
      const response = await fetch(`${baseUrl}menu/menuItem/${menuId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Remove the deleted menu from the state
        setMenus(menus.filter((menu) => menu._id !== menuId));
        setMessage('Menu deleted successfully.');
      } else {
        setMessage('Failed to delete menu.');
      }
    } catch (error) {
      console.error('Error deleting menu:', error);
      setMessage('Failed to delete menu.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white mt-32 md:mt-0">
      <div className="w-full max-w-5xl p-6">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-500">Menu List</h2>

        {message && <p className="text-center text-red-500 mb-4">{message}</p>}

        {/* Display list of menus */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {menus.length > 0 ? (
            menus.map((menu) => (
              <div key={menu._id} className="bg-gray-800 p-4 rounded-lg shadow-lg relative">
                <h3 className="text-xl font-semibold mb-2">{menu.name}</h3>
                <p>{menu.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <Link
                    to={`/Items/${menu._id}`} 
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
                  >
                    Add Items
                  </Link>
                  {/* Delete Icon */}
                  <button
                    onClick={() => deleteMenu(menu._id)}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    <AiOutlineDelete size={24} />
                  </button>
                </div>
              </div>
            ))
          ) : (
          

            <p>No menus available</p>
 
          )}
        </div>
      </div>
    </div>
  );
}

export default Menumenu;
