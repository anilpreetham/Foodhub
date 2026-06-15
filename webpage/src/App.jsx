import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import VegItems from "./VegItems";
import NonVegItems from "./NonVegItems";
import Cart from "./Cart";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin routes — no Navbar/Footer */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* Public routes — with Navbar/Footer */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/veg" element={<VegItems />} />
                <Route path="/nonveg" element={<NonVegItems />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;