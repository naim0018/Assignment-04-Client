import { useGetAllProductsQuery } from "../../../redux/api/productsApi"
import { useAppSelector } from "../../../redux/hooks"
import { TProduct } from "../../../types"
import ProductCard from "../UI/Card/ProductCard"


const ProductsData = () => {
  const {category,sortOption} = useAppSelector(state=>state.product)
 
    const {data,isLoading} = useGetAllProductsQuery({category:category,price:sortOption})
    if(isLoading){
        return <p>Loading</p>
    }
  return (
    <div className="grid justify-center  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5  w-full mx-auto">
        {data?.data?.map((product:TProduct)=><ProductCard key={product?._id} product={product}/>)}
    </div>
  )
}
export default ProductsData