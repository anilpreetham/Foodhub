import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, incrementQuantity, decrementQuantity } from "./store";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-8 bg-amber-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-amber-900">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-lg">Your cart is empty. Add some delicious food!</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
                <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-amber-900">{item.name}</h3>
                  <p className="text-gray-500 text-sm">₹{item.price} each</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => dispatch(decrementQuantity(item.id))} className="w-8 h-8 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold transition">-</button>
                  <span className="font-bold w-6 text-center">{item.quantity}</span>
                  <button onClick={() => dispatch(incrementQuantity(item.id))} className="w-8 h-8 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold transition">+</button>
                </div>
                <p className="font-bold text-amber-700 w-20 text-right">₹{item.price * item.quantity}</p>
                <button onClick={() => dispatch(removeFromCart(item.id))} className="text-red-500 hover:text-red-700 text-xl transition">×</button>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-white rounded-xl shadow p-5 text-right">
            <h3 className="text-2xl font-bold text-amber-900">Total: ₹{total}</h3>
            <button className="mt-4 bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-semibold transition">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
