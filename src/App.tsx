import { Outlet } from "react-router-dom"
import Navbar from "./components/component/UI/Navbar/Navbar"
import Footer from "./components/component/UI/Footer/Footer"


function App() {
 

  return (
    <>
    <div className="min-h-screen">
      <Navbar/>
      <Outlet/>
    </div>
      <Footer/>
    </>
  )
}

export default App
