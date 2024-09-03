import React, { useState, useEffect } from 'react';

// Initial menu items
const initialMenuItems = [
  { id: 1, name: 'Chess Burger', price: 850, description: 'Juicy chess burger' },
];

function Admin() {
  // State for menu items
  const [menuItems, setMenuItems] = useState(initialMenuItems);
  // State for the selected menu item for editing
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  // State for current menu item being edited or added
  const [currentItem, setCurrentItem] = useState({
    id: 0,
    name: '',
    price: '',
    description: ''
  });
  // State for the new menu item being added
  const [newMenuItem, setNewMenuItem] = useState({
    name: '',
    price: "",
    description: ''
  });

  // Get the currently selected item
  const selectedItem = menuItems[selectedItemIndex];

  // Effect to update current item based on selection
  useEffect(() => {
    if (selectedItem) {
      setCurrentItem(selectedItem);
    }
  }, [selectedItem]);

  // Function to handle adding a new menu item
  const handleAddMenuItem = (e) => {
    e.preventDefault();
    if (newMenuItem.name && newMenuItem.price && newMenuItem.description) {
      const newItem = {
        id: menuItems.length + 1,
        ...newMenuItem,
      };
      setMenuItems([...menuItems, newItem]);
      setNewMenuItem({ name: '', price: 0, description: '' });
    }
  };

  // Function to handle removing a menu item
  const handleRemoveMenuItem = (id) => {
    const updatedMenuItems = menuItems.filter((item) => item.id !== id);
    setMenuItems(updatedMenuItems);
    // Reset selection if necessary
    setSelectedItemIndex(0);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-4">Edite Menu</h1>
      <h2 className="text-2xl font-bold mb-4">Menu Items</h2>
      <ul className="mb-4">
        {menuItems.map((menuItem) => (
          <li key={menuItem.id} className="flex justify-between items-center mb-2">
            <span className="text-lg">{menuItem.name}</span>
            <span className="text-lg">Rs.{menuItem.price.toFixed(2)}</span>
            <button
              className="hover:bg-red-700  font-bold py-2 px-4 rounded"
              onClick={() => handleRemoveMenuItem(menuItem.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <h2 className="text-2xl font-bold mb-4">Add New Menu Item</h2>
      <form className="mb-4" onSubmit={handleAddMenuItem}>
        <div className="mb-4">
          <label className="block text-lg font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="block w-full p-2 pl-10 text-lg border border-gray-400 rounded"
            type="text"
            id="name"
            value={newMenuItem.name}
            onChange={(e) => setNewMenuItem({ ...newMenuItem, name: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            className="block w-full p-2 pl-10 text-lg border border-gray-400 rounded"
            type="number"
            id="price"
            value={newMenuItem.price}
            onChange={(e) => setNewMenuItem({ ...newMenuItem, price: parseFloat(e.target.value) })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="block w-full p-2 pl-10 text-lg border border-gray-400 rounded"
            id="description"
            value={newMenuItem.description}
            onChange={(e) => setNewMenuItem({ ...newMenuItem, description: e.target.value })}
          />
        </div>
        <button
          className="py-2 px-4 rounded"
          type="submit"
        >
          Add Menu Item
        </button>
      </form>
    </div>
  );
}

export default EditMenu;