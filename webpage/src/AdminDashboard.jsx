import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api";

const emptyForm = { name: "", price: "", category: "Veg" };

const AdminDashboard = () => {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editId, setEditId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/menu").then((res) => setItems(res.data));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/admin");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.price) return;
    const body = { ...form, price: Number(form.price) };
    if (editId) {
      const res = await api.put(`/menu/${editId}`, body);
      setItems(items.map((i) => (i._id === editId ? res.data : i)));
      setEditId(null);
    } else {
      const res = await api.post("/menu", body);
      setItems([...items, res.data]);
    }
    setForm(emptyForm);
    setShowForm(false);
  };

  const handleEdit = (item) => {
    setForm({ name: item.name, price: item.price, category: item.category });
    setEditId(item._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    await api.delete(`/menu/${id}`);
    setItems(items.filter((i) => i._id !== id));
  };

  const filtered = filter === "All" ? items : items.filter((i) => i.category === filter);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-amber-700 text-white px-8 py-4 flex justify-between items-center shadow">
        <h1 className="text-xl font-bold">🍽️ Admin Dashboard</h1>
        <button onClick={handleLogout} className="bg-white text-amber-700 font-semibold px-4 py-1.5 rounded-lg hover:bg-amber-50 transition text-sm">
          Logout
        </button>
      </div>

      <div className="p-8">
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { label: "Total Items", value: items.length, color: "bg-amber-100 text-amber-800" },
            { label: "Veg Items", value: items.filter((i) => i.category === "Veg").length, color: "bg-green-100 text-green-800" },
            { label: "Non-Veg Items", value: items.filter((i) => i.category === "Non-Veg").length, color: "bg-red-100 text-red-800" },
          ].map((s) => (
            <div key={s.label} className={`${s.color} rounded-xl p-4 text-center shadow`}>
              <p className="text-3xl font-bold">{s.value}</p>
              <p className="text-sm font-medium mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            {["All", "Veg", "Non-Veg"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${filter === f ? "bg-amber-600 text-white" : "bg-white text-gray-700 border hover:bg-amber-50"}`}
              >
                {f}
              </button>
            ))}
          </div>
          <button
            onClick={() => { setForm(emptyForm); setEditId(null); setShowForm(true); }}
            className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            + Add Item
          </button>
        </div>

        {showForm && (
          <div className="bg-white rounded-xl shadow p-5 mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">{editId ? "Edit Item" : "Add New Item"}</h3>
            <form onSubmit={handleSubmit} className="flex gap-3 flex-wrap">
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Item name"
                className="border rounded-lg px-3 py-2 flex-1 min-w-40 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <input
                type="number"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                placeholder="Price (₹)"
                className="border rounded-lg px-3 py-2 w-32 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <option>Veg</option>
                <option>Non-Veg</option>
              </select>
              <button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 rounded-lg transition text-sm font-medium">
                {editId ? "Update" : "Add"}
              </button>
              <button type="button" onClick={() => setShowForm(false)} className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg transition text-sm">
                Cancel
              </button>
            </form>
          </div>
        )}

        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-amber-100 text-amber-900">
              <tr>
                <th className="text-left px-5 py-3">#</th>
                <th className="text-left px-5 py-3">Name</th>
                <th className="text-left px-5 py-3">Category</th>
                <th className="text-left px-5 py-3">Price</th>
                <th className="text-center px-5 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item, idx) => (
                <tr key={item._id} className="border-t hover:bg-amber-50 transition">
                  <td className="px-5 py-3 text-gray-500">{idx + 1}</td>
                  <td className="px-5 py-3 font-medium text-gray-800">{item.name}</td>
                  <td className="px-5 py-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${item.category === "Veg" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                      {item.category}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-gray-700">₹{item.price}</td>
                  <td className="px-5 py-3 text-center space-x-2">
                    <button onClick={() => handleEdit(item)} className="text-amber-600 hover:text-amber-800 font-medium transition">Edit</button>
                    <button onClick={() => handleDelete(item._id)} className="text-red-500 hover:text-red-700 font-medium transition">Delete</button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={5} className="px-5 py-8 text-center text-gray-400">No items found.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
