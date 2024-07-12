import { useGetAllProductsQuery } from "../../../redux/api/productsApi"
import { TProduct } from "../../../types"
import ProductCard from "../UI/Card/ProductCard"

const ProductsData = () => {
    const {data,isLoading} = useGetAllProductsQuery({})
    if(isLoading){
        return <p>Loading</p>
    }
  return (
    <div className="grid grid-cols-5 gap-5">
        {data.data.map((product:TProduct)=><ProductCard key={product?._id} product={product}/>)}
    </div>
  )
}
export default ProductsData