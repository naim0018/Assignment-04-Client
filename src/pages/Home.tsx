
import Hero from "../components/component/Home/Hero/Hero"
import LatestProduct from "../components/component/Home/LatestProduct/LatestProduct"
import ShopByCategory from "../components/component/Home/ShopByCategory/ShopByCategory"
import Support from "../components/component/Home/Support/Support"

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero/>
      <Support/>
      <ShopByCategory/>
      <LatestProduct/>
      
    </div>
  )
}
export default Home