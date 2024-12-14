import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import baseUrl from '../baseUrl';
function Menu() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !description) {
      setMessage('Both name and description are required.');
      return;
    }

    try {
      const response = await fetch(`${baseUrl}menu/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, description }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
        setName('');
        setDescription('');
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || 'Failed to add menu. Please try again.');
      }
    } catch (error) {
      console.error('Error adding menu:', error);
      setMessage('Failed to add menu. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white">
      <div className="bg-gray-900 shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Add Menu</h2>
        {message && <p className="text-center text-red-500 mb-4">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-1">Menu Name:</label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block font-medium mb-1">Description:</label>
            <textarea
              id="description"
              className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Add Menu
          </button>
          <div className='flex justify-center items-center mt-4 '>

          <button className=' bg-blue-500 px-10 py-1 rounded-md hover:bg-blue-800'>
          <Link to={'/'}>
            back
          </Link>
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Menu;
