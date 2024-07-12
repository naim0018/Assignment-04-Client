import { MdOutlineChevronRight } from "react-icons/md"
import SidebarHover from "./SidebarHover"
import { useState } from "react";
import { useGetAllProductsQuery } from "../../../redux/api/productsApi";

const ProductsSideNav = () => {
    const [show, setShow] = useState(false);
    const {data,isLoading} = useGetAllProductsQuery({})
    const [subCategory,setSubCategory] = useState();
    const {data:filtered} = useGetAllProductsQuery({category:subCategory})
    if(isLoading){
        return <p>Loading</p>
    }

    const categories = data?.data?.map(product => product.category);
    const navItems = Array.from(new Set(categories));
    
    
    // const [subCategory,setSubCategory] = useState('');
    const options = [
      "price low to high",
      "price high to low",
      "ratings",
    ];
    
    



  return (
    
    <div className=" text-center  pt-10">
    <p className="text-xl text-black/80 font-bold">{}</p>

    <div  className="relative ">
      <div onClick={()=>setShow(!show)} className="  flex items-center justify-between">
      <p className="text-black font-medium">Sort by Price</p>
      <div className={show ? `rotate-0 duration-200 ease-in` : 'rotate-90 duration-200 ease-out'}>
      <MdOutlineChevronRight className="text-xl"/>
      </div>

      </div>

      {show &&
      <div className="opacity-100 duration-1000 ease-in bg-white absolute z-10 top-0 -right-44 space-y-3 p-4 border ">
        {options?.map((option, inx) => (
          <SidebarHover key={inx} option={option} />
        ))}
      </div>
      }
    </div>
   
    <div className="space-y-1  relative group">
      {navItems?.map((category, inx) => (
        <div onClick={()=>setSubCategory(category)} key={inx} className="flex items-center justify-between p-2 ">
          <p className="text-black font-medium">{category}</p>
          <div className={  category === subCategory ? `rotate-0 duration-200 ease-in` : 'rotate-90 duration-200 ease-out'}>
      <MdOutlineChevronRight className="text-xl"/>
      </div>
        </div>
      ))}
    </div>
  </div>
  )
}
export default ProductsSideNav