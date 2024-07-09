import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import Carts from "../pages/Carts";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children:[
            {
                path:'home',
                element:<Home/>
            },
            
            {
                path:'products',
                element:<Products/>
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