import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Store from "./Pages/Store";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import ProductDetail from "./Component/Body/ProductDetails";
import Auth from "./Pages/Auth";
import AuthSignIn from "./Pages/AuthSignIn";
import ForgotPassword from "./Component/Body/ForgotPassword";
import ProtectedRoute from "./Component/ProtectedRoute";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/store" element={<Store />} /> */}
          {/* <ProtectedRoute path="/store" element={<Store />} /> */}
          <Route
            path="/store"
            element={
              <ProtectedRoute>
                <Store />
              </ProtectedRoute>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route
            path="/product-detail/:productId"
            element={<ProductDetail />}
          />
          <Route path="/auth" element={<Auth />} />
          <Route path="/signin" element={<AuthSignIn />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
