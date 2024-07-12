import { IoBagAddSharp } from "react-icons/io5";

import { NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {
    return (
        <div className="container mx-auto md:flex min-h-screen">
          {/* Dashborad Side Bar */}
          <div className=" min-h-full bg-black text-green-500">
            <ul className="menu  px-14 py-8 space-y-4 ">
              <li className="text-2xl text-center ">
                Admin Panel
              </li>
              <li >
              <NavLink className="text-2xl  " to='add-product'> 
                <IoBagAddSharp />
                 Add Product
                </NavLink>
              </li>
              <li >
              <NavLink className="text-2xl " to='all-product'> 
                <IoBagAddSharp />
                 All Product
                </NavLink>
              </li>
            </ul>
          </div>
          {/* Dashboard Content Side  */}
          <div className="flex-1 mt-20 md:ml-10"> 
            <Outlet/>
          </div>
        </div>
      );
    };
export default AdminLayout