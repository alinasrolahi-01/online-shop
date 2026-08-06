import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {

  const isLogin = false;

  return isLogin ? children : <Navigate to="/auth" replace />;
};

export default PrivateRoute;