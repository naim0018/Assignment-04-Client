import { NavLink } from "react-router-dom"
import { TProduct } from "../../../../types"
import { TbCurrencyTaka } from "react-icons/tb";

import Rating from "../Ratings"


const ProductCard:React.FC<{product:TProduct}> = ({product}) => {
  const {img,title,price,rating,_id,category} =product
    
  return (
    <div className="border border-black  rounded w-fit text-center space-y-1 px-3 p-5">
        <img src={img} alt="" className="size-52 border"/>
        <h4 className="text-xl font-medium ">{title}</h4>
        <div className="flex items-center justify-evenly">
        <p className="font-bold text-green-800"> {category}</p>
        <p className="font-bold text-green-800 flex items-center justify-center"><TbCurrencyTaka /> {price}</p>
        </div>
        <p className="grid items-center justify-center p-1"><Rating rating={rating} type={''}/></p>
      
      <NavLink to={`/product-details/${_id}`}>
        <button className="btn btn-sm btn-outline hover:bg-black hover:text-white">View Details</button>
      </NavLink>
    </div>
  )
}
export default ProductCard