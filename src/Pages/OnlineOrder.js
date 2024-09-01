import React, { useState } from "react";


function OnlineOrder() {
  // Define the state for orders
  const [orders, setOrders] = useState([
    { id: 1, name: 'Pizza', price: 10.99, photo: 'https://picsum.photos/200', quantity: 1 },
    { id: 2, name: 'Burger', price: 8.99, photo: 'https://picsum.photos/200', quantity: 1 },
    { id: 3, name: 'Salad', price: 7.99, photo: 'https://picsum.photos/200', quantity: 1 },
  ]);

  // Function to handle quantity change
  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    setOrders(orders.map(order => order.id === id ? { ...order, quantity } : order));
  };

  // Function to handle quantity decrease
  const handleDecreaseQuantity = (id) => {
    const order = orders.find(order => order.id === id);
    if (order && order.quantity > 1) {
      handleQuantityChange(id, order.quantity - 1);
    }
  };

  // Function to handle quantity increase
  const handleIncreaseQuantity = (id) => {
    handleQuantityChange(id, orders.find(order => order.id === id).quantity + 1);
  };

  // Function to handle order deletion
  const handleDeleteOrder = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  // Function to calculate the total price
  const calculateTotal = () => {
    return orders.reduce((total, order) => total + order.price * order.quantity, 0);
  };

  const total = calculateTotal();

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
      
      <h1 className="text-3xl font-bold text-gray-900">Online Order</h1>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg shadow-md p-4">
            <img src={order.photo} alt={order.name} className="w-20 h-20 object-cover mb-4" />
            <h2 className="text-lg font-bold text-gray-900">{order.name}</h2>
            <p className="text-lg text-gray-600">${order.price}</p>
            <p className="text-lg text-gray-600">Quantity: {order.quantity}</p>
            <div className="flex justify-between mt-4">
              <button
                className="bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-lg"
                onClick={() => handleDecreaseQuantity(order.id)}
              >
                -
              </button>
              <button
                className="bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-lg"
                onClick={() => handleIncreaseQuantity(order.id)}
              >
                +
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-lg"
                onClick={() => handleDeleteOrder(order.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <p className="text-lg font-bold text-gray-900 mt-8">Total: ${total.toFixed(2)}</p>
    </div>
  );
}

export default OnlineOrder;