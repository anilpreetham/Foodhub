import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./store";
import api from "./api";

const VegItems = () => {
  const dispatch = useDispatch();
  const [vegItems, setVegItems] = useState([]);

  useEffect(() => {
    api.get("/menu").then((res) => setVegItems(res.data.filter((i) => i.category === "Veg")));
  }, []);

  return (
    <div className="p-8 bg-amber-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-amber-900">🌿 Veg Items</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {vegItems.map((item) => (
          <div key={item._id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
            {item.img && <img src={item.img} alt={item.name} className="w-full h-48 object-cover" />}
            <div className="p-4">
              <h3 className="text-xl font-bold text-amber-900">{item.name}</h3>
              {item.desc && <p className="text-gray-500 text-sm mt-1">{item.desc}</p>}
              <div className="flex items-center justify-between mt-3">
                <span className="text-amber-700 font-bold text-lg">₹{item.price}</span>
                <button
                  onClick={() => dispatch(addToCart({ ...item, id: item._id }))}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full transition text-sm"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
        {vegItems.length === 0 && <p className="text-gray-500">No veg items found.</p>}
      </div>
    </div>
  );
};

export default VegItems;
