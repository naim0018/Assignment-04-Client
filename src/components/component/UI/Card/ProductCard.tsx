import { NavLink } from "react-router-dom";
import { TProduct } from "../../../../types";
import { TbCurrencyTaka } from "react-icons/tb";
import { useState } from "react";
import UpdateProduct from "../../Products/UpdateProduct";
import { useDeleteProductMutation } from "../../../../redux/api/productsApi";
import { toast } from "sonner";
import Swal from "sweetalert2";
import Ratings from "../Ratings";

const ProductCard: React.FC<{ product: TProduct }> = ({ product }) => {
  const [openModal, setOpenModal] = useState(false);
  const { img, title, price, rating, _id, category } = product;
  const [deleteProduct] = useDeleteProductMutation();

  const handleDelete = (id: string) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          deleteProduct(id);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    } catch (error) {
      console.log(error);
      toast("Some");
    }
  };
  return (
    <div className="border max-w-full  border-black rounded-xl shadow-lg ">
      <div className="w-full border-b-4 border-r-4 border-transparent  group  hover:border-b-4 hover:border-r-4 hover:border-b-black hover:border-r-black rounded-lg overflow-hidden transition-all  ease-in-out flex flex-col h-full ">
        {/* image  */}
        <div className="grid relative  pr-3  pl-3  pt-2 rounded">
          <img
            className="place-self-center w-80  group-hover:scale-110 transition-all ease-in-out rounded-lg h-60"
            src={img}
            alt=""
          />
        </div>

        {/* title  */}
        <div className="px-5 py-5 text-center space-y-2 flex-grow">
          <h2 className="text-lg font-medium">{title}</h2>

          <p className="text-slate-500">Category: {category}</p>
          <p className="flex items-center justify-center">
            <Ratings rating={rating as number} />
          </p>
          <div className="text-2xl font-medium flex items-center justify-center text-green-500">
            {/* <span className="text-lg font-medium text-black">Price: </span> */}
            <TbCurrencyTaka />
            {price}
          </div>
        </div>

        <div className="px-5">
          <hr className="border border-black" />
        </div>
        <div className="py-3 ">
          <div className="flex items-center justify-center mt-5 gap-5">
            {/* Details Button */}
            <div className=" border rounded-lg border-black">
              <NavLink to={`/product-details/${_id}`}>
                <button className="btn bg-white border border-b-2 border-r-2 border-transparent  hover:bg-white hover:border-r-2 hover:border-b-2 hover:border-r-black hover:border-b-black">
                  Details
                </button>
              </NavLink>
            </div>

            {/* Delete Button */}
            <div className=" border rounded-lg border-black hover:border-r-red-600 hover:border-b-red-600">
              <button
                onClick={() => handleDelete(_id)}
                className="btn border border-b-2 border-r-2 border-transparent  hover:bg-white hover:border-r-2 hover:border-b-2 hover:border-r-red-600 hover:border-b-red-600 bg-red-500 text-white hover:text-red-600"
              >
                Delete
              </button>
            </div>
      {/* UpdateButton */}
            <div className="border rounded-lg border-black">
              <button
                className="btn border border-b-2 border-r-2 border-transparent  hover:bg-white hover:border-r-2 hover:border-b-2 hover:border-r-green-600 hover:border-b-green-600 bg-green-500 text-white hover:text-green-600"
                onClick={() => setOpenModal(true)}
              >
                Update
              </button>

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
                  <UpdateProduct
                    product={product}
                    setOpenModal={setOpenModal}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
