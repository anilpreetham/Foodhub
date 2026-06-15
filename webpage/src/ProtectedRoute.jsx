import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  return localStorage.getItem("adminAuth") === "true" ? children : <Navigate to="/admin" replace />;
};

export default ProtectedRoute;
