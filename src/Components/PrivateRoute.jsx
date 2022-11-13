import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  if (!isAuth) {
    return <Navigate to={"/user/login"} />;
  }
  return children;
};
