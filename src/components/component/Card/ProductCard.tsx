import { Button } from "../../ui/button"
import Rating from "../UI/Ratings"

const ProductCard = () => {
    const product = {
            "title": "Rose Plant",
            "price": 15.99,
            "rating": 4.7,
            "img": "https://nurseryplantsbd.com/wp-content/uploads/2022/02/Flower-Plants.webp",
            "stock": 50,
           
    }
  return (
    <div className="border w-fit text-center space-y-1 px-3 p-5">
        <img src={product.img} alt="" className="size-52"/>
        <h4 className="text-xl font-medium ">{product.title}</h4>
        <p className="font-bold text-green-800"> {product.price}</p>
        <p className="grid items-center justify-center p-1"><Rating rating={product.rating}/></p>
      
        <Button className="">View Details</Button>
    </div>
  )
}
export default ProductCard