import ProductsData from "./ProductsData"
import ProductsSideNav from "./ProductsSideNav"

const ProductsLayout = () => {
  return (
    <div className="grid grid-cols-6 gap-5 items-start  mt-20 container mx-auto min-h-screen ">
        <div className="">
      <ProductsSideNav />
        </div>
      <div className="col-span-5 w-full">
        <ProductsData/>
      </div>
    </div>
  )
}
export default ProductsLayout