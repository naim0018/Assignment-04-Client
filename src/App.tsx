import { Outlet } from "react-router-dom"
import Navbar from "./components/component/Navbar/Navbar"
import Footer from "./components/component/Footer/Footer"


function App() {
 

  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
