
import { MdOutlinePayment, MdSupportAgent } from "react-icons/md";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BiSolidLike } from "react-icons/bi";
const Support = () => {
  return (
    <div className='my-10 container mx-auto grid md:grid-cols-2 lg:grid-cols-4 items-center justify-center '>

    <div className="w-full h-full flex items-center justify-center gap-5 p-5 text-center place-self-center  border-r-2 border-gray-300">
        <div className="">
            <LiaShippingFastSolid className='text-sky-500 text-5xl'/>
        </div>
        <div className="flex flex-col items-center justify-center">
            <h3>Free Shipping</h3>
            <p>Free Shipping Over $100</p>
        </div>
    </div>
    <div className="w-full h-full flex items-center justify-center gap-5 p-5 text-center place-self-center border-l-2 md:border-l-0  lg:border-r-2 border-gray-300">
        <div className="">
            <MdOutlinePayment className='text-sky-500 text-5xl'/>
        </div>
        <div className="flex flex-col items-center justify-center">
            <h3>Secure Payment</h3>
            <p>100% Secure Payment</p>
        </div>
    </div>
    <div className="w-full h-full flex items-center justify-center gap-5 p-5 text-center place-self-center border-r-2 border-gray-300">
        <div className="">
            <MdSupportAgent className='text-sky-500 text-5xl'/>
        </div>
        <div className="flex flex-col items-center justify-center">
            <h3>24/7 Support</h3>
            <p>Top quality Support</p>
        </div>
    </div>
    <div className="w-full h-full flex items-center justify-center gap-5 p-5 text-center  place-self-center  border-l-2 md:border-l-0 border-gray-300 ">
        <div className="">
            <BiSolidLike  className='text-sky-500 text-5xl'/>
        </div>
        <div className="flex flex-col items-center justify-center">
            <h3>Quality Products</h3>
            <p>We insure Product Quality</p>
        </div>
    </div>
    
    </div>
  )}
export default Support