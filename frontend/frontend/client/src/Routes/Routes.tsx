import { createBrowserRouter } from "react-router-dom";
import { IndexPage } from "../Components/Layout/IndexPage";
import { Home } from "../Components/Layout/Home";
import { ProductDetailPage } from "../Components/Pages/ProductPages/ProductDetailPage";
import { CartDetailPage } from "../Components/Pages/CartPages/CartDetailPage";
import { RegisterPage } from "../Components/Pages/AuthPages/RegisterPage";
import { LoginPage } from "../Components/Pages/AuthPages/LoginPage";

export const routes = createBrowserRouter([
    {
      path: "",
      element: <IndexPage/>,
      children: [
        {
          path:"",
          element: <Home/>
        },

        {
          path: "/register",
          element: <RegisterPage/>
        },
        {
          path: "/login",
          element: <LoginPage/>
        },


        {
          path: "/products/:category/all/:id",
          element: <ProductDetailPage/>
        },
        {
          path: "/cart",
          element: <CartDetailPage/>
        }
      ]
    }
  ])