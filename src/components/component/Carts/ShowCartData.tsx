// import { FaEquals } from "react-icons/fa6"
// import { VscChromeClose } from "react-icons/vsc"

// const ShowCartData = () => {


//     const handleCartDelete = async () => {
//         try {
//         //   await handleDelete(_id);
//         } catch (error) {console.log(error)}
//       };
//   return (
//     <div className="">
//       <div
//         className={
//           admin
//             ? "grid sm:grid-cols-5 items-center"
//             : ""
//         }
//       >
//         {/* {admin && <p className="text-center ">{item.email}</p>} */}
//         <div className={admin ? "col-span-3 border-x border-x-black p-3" : ""}>
//           <ul className="space-y-4">
//             <li className="flex items-center gap-4">
//               <img
//                 src={image}
//                 alt=""
//                 className="h-24 w-24 rounded-full object-cover bg-gray-200"
//               />
//               <div>
//                 <h3 className="text-sm text-gray-900">{title}</h3>
//                 <dl className="mt-0.5 space-y-1 text-[10px] text-gray-600">
//                   <div>
//                     <dt className="inline">Height : </dt>
//                     <dd className="inline">{height}</dd>
//                   </div>

//                   <div>
//                     <dt className="inline">Width : </dt>
//                     <dd className="inline">{width}</dd>
//                   </div>
//                 </dl>
//               </div>

//               <div className="flex flex-1 items-center justify-end gap-2">
//                 <dl className="flex items-center justify-center  space-x-2   text-gray-600">
//                   <div>
//                     {discountPrice ? (
//                       <dd className="inline text-red-400 text-sm">
//                         <del>{price}</del>
//                       </dd>
//                     ) : (
//                       <dd className="inline ">{price}</dd>
//                     )}
//                   </div>
//                   <div>
//                     <dd className="inline">{discountPrice}</dd>
//                   </div>
//                 </dl>
//                 <div className="">
//                   <VscChromeClose />
//                 </div>
//                 <form>
//                   <label htmlFor="Line1Qty" className="sr-only">
//                     {" "}
//                     Quantity{" "}
//                   </label>

//                   <input
//                     type="number"
//                     min="1"
//                     value={amount}
//                     readOnly
//                     id="Line1Qty"
//                     className="h-8 w-12 rounded border-gray-200 bg-gray-200 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
//                   />
//                 </form>
//                 <div className="">
//                   <FaEquals />
//                 </div>
//                 <div className="">
//                   <p>{totalPrice}</p>
//                 </div>
//                   <button
//                     onClick={handleCartDelete}
//                     className="text-gray-600 transition hover:text-red-600"
//                   >
//                     <span className="sr-only">Remove item</span>

//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth="1.5"
//                       stroke="currentColor"
//                       className="h-4 w-4"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
//                       />
//                     </svg>
//                   </button>
                
//               </div>
//             </li>
//           </ul>
//         </div>
//         {/* {admin && (
//           <div className="place-self-center">
//             <button
//               onClick={openPendingModal}
//               className="btn btn-warning text-black/70"
//             >
//               Pending
//             </button>
//             {openModal && (
//               <PendingModal openModal={openModal} setOpenModal={setOpenModal} />
//             )}
//           </div>
//         )} */}
//       </div>
//     </div>
//   )
// }
// export default ShowCartData