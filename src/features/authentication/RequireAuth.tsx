import { stat } from "fs";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import authSlice from "../../store/authSlice";
import { useAppSelector } from "../../store/storeHooks";

const RequireAuth = () => {
  const token = useAppSelector((state) => state.authSlice.token);
  const location = useLocation();

  return token ? (
    <Outlet></Outlet>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace></Navigate>
  );
};

export default RequireAuth;
