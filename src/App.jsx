import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import MyState from "./context/data/myState";
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from './pages/admin/page/AddProduct';
import UpdateProduct from './pages/admin/page/UpdateProduct';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Allproducts from './pages/allproducts/AllProducts';
function App() {

  return (
    <MyState>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/order" element={<ProtectedRoutes><Order/></ProtectedRoutes>} />
        <Route path="/allproducts" element={<Allproducts/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/dashboard" element={<ProtectedRoutesForAdmin><Dashboard/></ProtectedRoutesForAdmin>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<NoPage/>} />
        <Route path="/productinfo/:id" element={<ProductInfo />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/addproduct" element={<ProtectedRoutesForAdmin><AddProduct/></ProtectedRoutesForAdmin>} />
        <Route path="/updateproduct" element={<ProtectedRoutesForAdmin><UpdateProduct/></ProtectedRoutesForAdmin>} />
      </Routes>
      <ToastContainer />
    </Router>
    </MyState>
  )
}

export default App

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('user')) {
    return children;
  } else {
    return <Navigate to='/login' />;
  }
  }



export const ProtectedRoutesForAdmin = ({ children }) => {
  const admin = localStorage.getItem("user");

  if (!admin) {
    return <Navigate to="/login" />;
  }

  try {
    const user = JSON.parse(admin);

    if (
      user?.user?.email === "vani.vashishtha2024@nst.rishihood.edu.in"
    ) {
      return children;
    } else {
      return <Navigate to="/login" />;
    }
  } catch (err) {
    console.error("Error parsing user:", err);
    return <Navigate to="/login" />;
  }
};
