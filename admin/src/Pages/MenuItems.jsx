import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import baseUrl from "../baseUrl";

function MenuItems() {
  const { Id } = useParams(); // This gets the menu Id from the URL
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");
  const [menuItems, setMenuItems] = useState([]);

  // Fetch existing menu items when the component mounts
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch(
          `${baseUrl}menu/${Id}/menuItem`
        );
        const data = await response.json();
        if (response.ok) {
          setMenuItems(data.menuItems || []);
        } else {
          setMessage(data.message || "menu items added");
        }
      } catch (error) {
        console.error("Error fetching menu items:", error);
        setMessage("menu items added.");
      }
    };

    fetchMenuItems();
  }, [Id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !description || !price) {
      setMessage("Name, description, and price are required.");
      return;
    }

    // Create a temporary new menu item object to add to the UI immediately
    const newMenuItem = { name, description, price };

    // Optimistically update the UI by adding the new item to the list
    setMenuItems((prevItems) => [...prevItems, newMenuItem]);

    try {
      const response = await fetch(
        `${baseUrl}menu/${Id}/menuItem`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, description, price }),
        }
      );

      // Check if the response is okay
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to add menu item.");
      }

      const data = await response.json();

      // Log response from the backend
      console.log("Response from backend:", data);

      if (data.menuItem) {
        setMessage("Menu item added successfully!");
      } else {
        setMessage(" menu items added ");
      }
    } catch (error) {
      console.error("Error adding menu item:", error);
      setMessage(
        error.message || "An error occurred while adding the menu item."
      );
    }

    // Clear the form fields after submission
    setName("");
    setDescription("");
    setPrice("");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-6 px-4 mt-24">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Display Menu Items */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-4">Menu Items</h2>
          <div className="space-y-4">
            {menuItems.length === 0 ? (
              <p className="text-center text-red-500">
                No menu items available
              </p>
            ) : (
              menuItems.map((item, index) => (
                <div
                  key={item._id || index}
                  className="p-4 bg-gray-700 rounded-md"
                >
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p>{item.description}</p>
                  <p className="font-bold text-blue-500">{item.price} USD</p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right Column: Add Menu Item Form */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg h-[500px]  ">
          <h2 className="text-2xl font-bold text-center mb-4">Add Menu Item</h2>
          {message && (
            <p className="text-center text-red-500 mb-4">{message}</p>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium mb-1">
                Name:
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block font-medium mb-1">
                Description:
              </label>
              <textarea
                id="description"
                className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="price" className="block font-medium mb-1">
                Price:
              </label>
              <input
                type="number"
                id="price"
                className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              Add Menu Item
            </button>
            <div className="flex justify-center items-center mt-2 ">
              <button className=" bg-blue-500 px-10 py-1 rounded-md hover:bg-blue-800">
                <Link to={"/"}>back</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MenuItems;
