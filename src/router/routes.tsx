import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import Carts from "../pages/Carts";
import ProductDetails from "../components/component/ProductDetails/ProductDetails";
import ErrorPage from "../components/component/UI/ErrorPage";
import Admin from "../pages/Admin";
import AddProduct from "../components/component/Admin/AddProduct";
import AllProduct from "../components/component/Admin/AllProduct";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                index:true,
                path:'home',
                element:<Home/>
            },
            
            {
                path:'product',
                element:<Products/>
            },
            {
                path:'product-details/:id',
                element:<ProductDetails/>
            },
            {
                path:'about',
                element:<About/>
            },
            {
                path:'cart',
                element:<Carts/>
            },
            
        ]
    },
    {
        path:'/admin',
        element:<Admin/>,
        children:[
            {
                path:'add-product',
                element:<AddProduct/>
            },
            {
                path:'all-product',
                element:<AllProduct/>
            }
        ]
    },
])