import { MdOutlineChevronRight } from "react-icons/md";

import { useState } from "react";
import { useGetAllProductsQuery } from "../../../redux/api/productsApi";
import { TProduct } from "../../../types";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  setCategory,
  setSortOption,
} from "../../../redux/features/productsSlice";
import AddProduct from "./AddProduct";
import Loading from "../UI/Loading/Loading";

const ProductsSideNav = () => {
  const [openModal, setOpenModal] = useState(false);
  const [show, setShow] = useState(false);
  const [checkBox, setCheckBox] = useState(0);
  const dispatch = useAppDispatch();
  const {category} = useAppSelector(state=>state.product)
 
  // dispatch(setSortOption(checkBox === 0 ? "price" : "-price"));
  const { data, isLoading } = useGetAllProductsQuery({});

  if (isLoading) {
    return <Loading/>
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
      <div className="">
      <button  onClick={() => setOpenModal(true)} className="btn bg-sky-500 text-xl text-white hover:text-black font-bold">Add Product</button>

      <div
          className={`fixed flex justify-center items-center z-[100] ${
                openModal ? "visible opacity-1 border" : "invisible opacity-0"
                } inset-0 backdrop-blur-sm bg-black/5 duration-100`}
                style={{ boxShadow: "10px 10px 5px 12px white" }}
              >
                <div
                  className={`absolute md:w-1/2 px-8 pb-10 text-center bg-white/50  drop-shadow-2xl rounded-lg  ${
                    openModal
                      ? "scale-1 opacity-1 duration-300"
                      : "scale-0 opacity-0 duration-150 "
                  }`}
                >
                  <svg
                    onClick={() => setOpenModal(false)}
                    className="w-8 mx-auto mr-0 cursor-pointer"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                        fill="#c51636"
                      ></path>
                    </g>
                  </svg>
                  <AddProduct setOpenModal={setOpenModal}/>
                </div>
              </div>

      </div>

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
