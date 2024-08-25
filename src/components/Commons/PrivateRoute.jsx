import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/authContext";

function PrivateRoute() {
  return useAuth ? <Outlet /> : <Navigate />;
}

export { PrivateRoute };
