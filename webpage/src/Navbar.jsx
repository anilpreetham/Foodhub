import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-amber-900 text-amber-100 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">🍽️ FoodHub</h1>

        <div className="space-x-5 text-sm font-medium">
          <Link to="/" className="hover:text-amber-300 transition">Home</Link>
          <Link to="/about" className="hover:text-amber-300 transition">About</Link>
          <Link to="/veg" className="hover:text-amber-300 transition">Veg Items</Link>
          <Link to="/nonveg" className="hover:text-amber-300 transition">Non-Veg Items</Link>
          <Link to="/contact" className="hover:text-amber-300 transition">Contact</Link>
          <Link to="/cart" className="hover:text-amber-300 transition">🛒 Cart</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;