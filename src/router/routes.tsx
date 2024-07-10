import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import Carts from "../pages/Carts";
import ProductDetails from "../components/component/ProductDetails/ProductDetails";
import ErrorPage from "../components/component/UI/ErrorPage";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'home',
                element:<Home/>
            },
            
            {
                path:'product',
                element:<Products/>
            },
            {
                path:'product/:id',
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
    }
])