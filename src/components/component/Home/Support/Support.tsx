import { IoPricetags } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSupportAgent } from "react-icons/md";
const Support = () => {
  return (
    <div className="flex items-center justify-center gap-2 lg:gap-10 2xl:max-w-[1600px] 2xl:mx-auto 2xl:my-5 p-2 lg:p-5">
        <div className="flex items-center justify-center md:gap-2 px-3 md:px-10 md:text-xl xl:font-medium lg:text-2xl lg:p-8 2xl:p-10  py-5 border "><IoPricetags /> Best Price</div>
        <div className="flex items-center justify-center md:gap-2 px-3 md:px-10 md:text-xl xl:font-medium lg:text-2xl lg:p-8 2xl:p-10  py-5 border"><TbTruckDelivery />Fast Delivery</div>
        <div className="flex items-center justify-center md:gap-2 px-3 md:px-10 md:text-xl xl:font-medium lg:text-2xl lg:p-8 2xl:p-10  py-5 border"><MdSupportAgent />24/7 Support</div>
    </div>
  )}
export default Support