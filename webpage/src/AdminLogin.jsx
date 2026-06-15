import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.username === "admin" && form.password === "admin123") {
      localStorage.setItem("adminAuth", "true");
      navigate("/admin/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm">
        <h2 className="text-2xl font-bold text-amber-900 mb-6 text-center">🍽️ Admin Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              type="text"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="admin"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="••••••••"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
