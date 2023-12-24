import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import ProductDetails from "../Pages/ProductDetails";
import Home from "../Pages/Home";
import PrivateRoute from "./PrivateRoute";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/product-details/:id",
    element: (
      <PrivateRoute>
        <ProductDetails></ProductDetails>
      </PrivateRoute>
    ),
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
]);

export default route;
