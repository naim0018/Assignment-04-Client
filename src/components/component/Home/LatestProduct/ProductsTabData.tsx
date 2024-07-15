import { useGetAllProductsQuery } from "../../../../redux/api/productsApi"
import { TProduct } from "../../../../types"
import ProductCard from "../../UI/Card/ProductCard"
import Loading from "../../UI/Loading/Loading"



const ProductsTabData :React.FC<{productCategory:string}>= ({productCategory}) => {
  const {data,isLoading} = useGetAllProductsQuery({category:productCategory})
  if(isLoading){
    return <Loading/>
  }

  return (
    <div className=" py-5 ">
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
     {
      data?.data?.map((product :TProduct)=><ProductCard product={product}/>)
     }
    </div>
  </div>
  )
}
export default ProductsTabData
