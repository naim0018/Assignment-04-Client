import ProductCard from "../components/component/Card/ProductCard"
import Hero from "../components/component/Home/Hero/Hero"
import LatestProduct from "../components/component/Home/LatestProduct/LatestProduct"
import ShopByCategory from "../components/component/Home/ShopByCategory/ShopByCategory"
import Support from "../components/component/Home/Support/Support"

const Home = () => {
  return (
    <div className="">
      <Hero/>
      <Support/>
      <ShopByCategory/>
      <LatestProduct/>
      <ProductCard/>
    </div>
  )
}
export default Home