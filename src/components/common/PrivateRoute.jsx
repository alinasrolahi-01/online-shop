import { Navigate } from "react-router";
import { userFakeData } from "../../data/userFakeData";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  const isLogin = userFakeData.find(
    (item) => item.token === token
  );

  return isLogin ? children : <Navigate to="/auth" replace />;
};

export default PrivateRoute;