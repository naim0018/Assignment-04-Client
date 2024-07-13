
import ProductsData from "./ProductsData"
import ProductsSideNav from "./ProductsSideNav"

const ProductsLayout = () => {
 
  return (
    <div className="grid justify-center sm:flex gap-5 md:justify-between  mt-20 container mx-auto min-h-screen ">
        <div className="w-72">
      <ProductsSideNav/>
        </div>
      <div className="">
        <ProductsData/>
      </div>
    </div>
  )
}
export default ProductsLayout