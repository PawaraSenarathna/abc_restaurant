import Order from "../models/Order.js";
import User from "../models/User.js";

// fetch all orders
export const getAllOrders = async (req, res) => {
  const orders = await Order.find();
  if (!orders) return res.status(204).json({ message: "No orders found" });
  res.json(orders);
};

// create a new order
export const createNewOrder = async (req, res) => {
  // create auto generated user Id
  const orderId = `ORD${Math.floor(100000 + Math.random() * 900000)}`;
  try {
    
    // Create new reservation
    const order = new Order({
      id: orderId,
      user_id: "USR423099",
      menu_items: req.body.items,
      total: req.body.total,
    });

    const response = await order.save();
    res.status(201).json({ message: `Order created ID: ${response.id}.` });
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: error.message });
  }
};

export const deleteOrders = async (req,res) =>{
  const rsvId = req.query.id;
  try {
    const response = await Order.findOneAndDelete({ id: rsvId });
    if (!response) {
      return res.status(404).send("Order not found");
    }
    res.json(`Order ${rsvId} deleted.`);
  } catch (error) {
    res.status(400).send(error.message);
  }
}