import {   useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdCart } from "react-icons/io";

const Navbar = () => {
    const [dropDownState, setDropDownState] = useState(false);
    

   const navLinks =(
    <>
    <NavLink to="/home">
        <li className="group flex  cursor-pointer flex-col">
        Home<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
      </li>
        </NavLink>
    
      <NavLink to="/product">
        <li className="group flex  cursor-pointer flex-col">
        Products<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
      </li>
        </NavLink>
    
      <NavLink to="/about">
        <li className="group flex  cursor-pointer flex-col">
        About<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
      </li>
        </NavLink>
      <NavLink to="/admin">
        <li className="group flex  cursor-pointer flex-col">
        Admin<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
      </li>
        </NavLink>
      <NavLink to="/cart">
        <li className="group flex  cursor-pointer flex-col">
        <IoMdCart /><span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
      </li>
        </NavLink>
    
    </>
   )


  return (
    <nav className="flex items-center justify-between bg-[#393E46] px-4 py-2 text-white">
      <div className="flex items-center justify-between  w-full container mx-auto">
    <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
      <NavLink to={'home'}>
      <h2>Nursery</h2>
      </NavLink>
    </div>
    <ul className="hidden items-center justify-between gap-10 md:flex">
      {navLinks}
    </ul>
      </div>
    <div  onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer" > <line x1="4" x2="20" y1="12" y2="12" /> <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /> </svg>
      {dropDownState && (
        <ul className=" z-10  gap-2 p-5 bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
         {navLinks}
        </ul>
      )}
    </div>
</nav>
  )
}
export default Navbar