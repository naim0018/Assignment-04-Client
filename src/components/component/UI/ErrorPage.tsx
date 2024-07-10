import { FaFaceFrown } from "react-icons/fa6"
import { NavLink } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div>
        <div className="grid h-screen place-content-center bg-white px-4">
  <div className="text-center">
    <div className="text-7xl flex items-center justify-center text-gray-200 ">
    <FaFaceFrown />
    </div>
    <h1 className="text-7xl font-black text-gray-200 tracking-widest">404 | Not Found</h1>
   
    <NavLink to="/home"
      
      className="mt-6 inline-block rounded btn  px-5 py-3 text-sm font-medium text-white  focus:outline-none "
    >
      Go Back Home
    </NavLink>
  </div>
</div>
    </div>
  )
}
export default ErrorPage