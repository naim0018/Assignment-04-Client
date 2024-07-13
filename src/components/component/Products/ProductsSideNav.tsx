import { MdOutlineChevronRight } from "react-icons/md";

import { useState } from "react";
import { useGetAllProductsQuery } from "../../../redux/api/productsApi";
import { TProduct } from "../../../types";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  setCategory,
  setSortOption,
} from "../../../redux/features/productsSlice";

const ProductsSideNav = () => {
  const [show, setShow] = useState(false);
  const [checkBox, setCheckBox] = useState(0);
  const dispatch = useAppDispatch();
  const {category} = useAppSelector(state=>state.product)
 
  // dispatch(setSortOption(checkBox === 0 ? "price" : "-price"));
  const { data, isLoading } = useGetAllProductsQuery({});

  if (isLoading) {
    return <p>Loading</p>;
  }
  const categories = data?.data?.map((product: TProduct) => product.category);
  const navItems = Array.from(new Set(categories));

  const options = ["price low to high", "price high to low"];



  const handleCheckBox=(inx:number)=>{
    setCheckBox(inx)
    dispatch(setSortOption(checkBox === 0 ? "-price" : "price"));
  }
  return (
    <div className=" text-center  pt-10 space-y-3  w-72 mx-auto md:w-full">
      {/* <p className="text-xl text-black/80 font-bold"></p> */}

      <div className="relative ">
        <div
          onClick={() => setShow(!show)}
          className="  flex items-center justify-between "
        >
          <p className="text-black font-medium">Sort by Price</p>
          <div
            className={
              show
                ? `rotate-90 sm:rotate-0 duration-200 ease-in border bg-black text-white rounded-full`
                : "rotate:0 sm:rotate-90 duration-200 ease-out  rounded-full"
            }
          >
            <MdOutlineChevronRight className="text-xl" />
          </div>
        </div>

        {show && (
          <div className="opacity-100 duration-1000 ease-in bg-white absolute z-10 right-0 sm:top-0 sm:-right-44 space-y-3 p-4 border ">
            {options?.map((option, inx) => (
              <div className="flex items-center justify-start gap-2" key={inx}>
                <input
                  type="checkbox"
                  checked={checkBox === inx}
                  defaultChecked={checkBox === inx}
                  onChange={() => handleCheckBox(inx)}
                />
                <label className="text-start hover:text-black">{option}</label>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="space-y-1  relative group">
        {/* All Category */}
        <div
          onClick={() => dispatch(setCategory(''))}
          className="flex items-center justify-between p-2 "
        >
          <p className="text-black font-medium">All</p>
          <div
            className={
              Object.keys(category).length === 0
                ? `rotate-90 sm:rotate-0 duration-200 ease-in border bg-black text-white rounded-full`
                : "rotate:0 sm:rotate-90 duration-200 ease-out rounded-full"
            }
          >
            <MdOutlineChevronRight className="text-xl" />
          </div>
        </div>
        {/* Filter by Category */}
        {navItems?.map((item, inx) => (
          <div
            onClick={() => dispatch(setCategory(item))}
            key={inx}
            className="flex items-center justify-between p-2"
          >
            <p className="text-black font-medium">{item as string}</p>
            <div
              className={
                category === item
                  ? `rotate-90 sm:rotate-0 duration-200 ease-in border bg-black text-white rounded-full`
                  : "rotate:0 sm:rotate-90 duration-200 ease-out rounded-full"
              }
            >
              <MdOutlineChevronRight className="text-xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductsSideNav;
