// // ProtectedRoute.js
import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
// import { AuthContext } from "./AuthContext"; // Your authentication context
import AccountContext from "../utils/AccountContext";
const PrivateRoute = ({ element, ...rest }) => {
  const { login } = useContext(AccountContext);

  return login ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;

// ProtectedRoutes.js
// import React, { useContext } from "react";
// import { Route, Routes, Navigate } from "react-router-dom";

// const ProtectedRoute = ({ element, ...rest }) => {
//   const { login } = useContext(AccountContext);

//   return login ? (
//     <Route {...rest} element={element} />
//   ) : (
//     <Navigate to="/login" />
//   );
// };

// const ProtectedRoutes = ({ children }) => {
//   return (
//     <Routes>
//       {React.Children.map(children, (child) => {
//         if (React.isValidElement(child) && child.type === ProtectedRoute) {
//           return child;
//         }
//         return null;
//       })}
//     </Routes>
//   );
// };

// export { ProtectedRoute, ProtectedRoutes };
