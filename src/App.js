import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Staff from './Pages/Staff';
import OnlineOrder from './Pages/OnlineOrder';
import CustomerFeedback from './Pages/CustomerFeedback';
import Payment from './Pages/Payment';
import Admin from "./Pages/Admin/Admin";
import UpdateUser from "./Pages/Admin/UpdateUser";
import MenuItem from "./Pages/Admin/MenuItem";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/onlineorder" element={<OnlineOrder />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/Feedback" element={<CustomerFeedback />} />
          <Route path="/admin" element={<Admin />}/>
          <Route path="/admin/update-user/:id" element={<UpdateUser />} />
          <Route path="/admin/add-item" element={<MenuItem />} />
          <Route path="/admin/menu-item/:id" element={<MenuItem />} />
          <Route path="/staff" element={<Staff />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
