import './App.css';
import Admin from './Pages/Admin/Admin';
import AdminMenu from './Pages/Admin/AdminMenu';
import UpdateUser from './Pages/Admin/UpdateUser';
import AdminReport from './Pages/Admin/AdminReport';
import Gallery from './Pages/Gallery';
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Resevation from './Pages/Resevation';
import Staff from './Pages/Staff';
import OnlineOrder from './Pages/OnlineOrder';
import CustomerFeedback from './Pages/CustomerFeedback';
import Payment from './Pages/Payment';
import EditMenu from './Pages/EditMenu.Js';
import Report from './Pages/AdminReport';
import AdminPage from './Pages/Admin/AdminPage';
import Navigation from './Pages/Navigation';
import Contact from './Pages/Contact';



function App() {
  return (
      <div className="App">
       <HomePage/> 
       <Login/>
       <Resevation/>
      //  <Register/>
      //  <Staff/>
      <OnlineOrder/>
      <CustomerFeedback/>
      <Payment/>
      <EditMenu/>
      <AdminPage/>
      <Report/>
      <Contact/>
      <Navigation/>
    </div>
  );
}

export default App;
