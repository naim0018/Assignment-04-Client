import { useParams } from "react-router-dom"
import { useGetSingleProductsQuery } from "../../../redux/api/productsApi"
import { TbCurrencyTaka } from "react-icons/tb"
import { useState } from "react"
import Rating from "../UI/Ratings"

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const {id} =useParams()
  // console.log(id)
  const {data ,isLoading,isError} = useGetSingleProductsQuery(id)
  
  if(isLoading){
   return <p>Loading</p>
  }
  if(isError){
    return <p>Error</p>
  }
  

  const {title,price,rating,img,stock,category} = data.data

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((count) => count - 1);
    }
  };
  const handleIncrement = () => {
    setQuantity((count) => count + 1);
  };
 
  return (
    <div className="container mx-auto space-y-10 min-h-screen">
 
      <div className=" grid  space-y-10 p-10  md:grid-cols-2">
        <div className="grid">
          <img
          src={img}
            className=" size-[600px] w-full  object-cover mx-auto place-self-center  rounded-lg"
            alt={title}
            
          />
        </div>

        <div className="sticky md:top-10 h-fit px-20">
          <div className="space-y-5">
            <h2 className="text-4xl font-medium">{title}</h2>
            <div className=" flex items-center gap-20">
            <p>
              <span className="text-lg font-semibold">Category : </span>
              <span className="text-lg font-normal text-gray-500 ">
                {category}
              </span>
            </p>
            <p>
              <span className="text-lg font-semibold">Stock : </span>
              <span className="text-lg font-normal text-gray-500 ">
                {stock}
              </span>
            </p>
            </div>
            
            <Rating rating={rating} type={'cardDetails'}/>
            
            
          </div>

        <div className="mt-14">
              <p className="text-4xl font-medium flex items-center text-emerald-500">
                <TbCurrencyTaka />
                {price}
              </p>
            <div className="flex items-center gap-4 mt-8">
              <div className="">
                <div className="border border-black w-fit  flex items-center gap-4">
                  <button
                    onClick={handleDecrement}
                    className="btn btn-ghost text-lg font-bold hover:bg-yellow-300 rounded-none "
                  >
                    -
                  </button>
                  <p className="text-xl font-bold w-5 text-center">
                    {quantity}
                  </p>
                  <button
                    onClick={handleIncrement}
                    className="btn btn-ghost text-lg font-bold hover:bg-yellow-300 rounded-none "
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                // onClick={handelAddToCart}
                className="btn btn-lg  hover:bg-emerald-400 "
              >
                Add to Cart
              </button>
            </div>
          </div> 
        </div>
      </div>
    

  <div className="grid grid-cols-5 py-10">

  </div>
  </div>
  
  )
}
export default ProductDetails