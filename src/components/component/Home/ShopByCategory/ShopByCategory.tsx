import { useGetAllProductsQuery } from "../../../../redux/api/productsApi";
import { TProduct } from "../../../../types";
import Loading from "../../UI/Loading/Loading";

const ShopByCategory = () => {
  const {data,isLoading} = useGetAllProductsQuery({})
  if(isLoading){
    return <Loading/>
  }

  const category = data?.data?.reduce((acc:[{category:string,img:string}], product:TProduct) => {
    if (!acc.some(item => item.category === product.category)) {
        acc.push({ category: product.category, img: product.img });
    }
    return acc;
}, []);
  
  return (
    <div className="max-w-[1400px] mx-auto ">
      <h2 className="text-4xl  font-medium text-center pb-10">Shop By Category</h2>
      <div className="grid grid-cols-4 items-center justify-center  gap-5 ">
        {
            category.map((product:TProduct)=>(
                <div key={product?._id} className="group flex items-center justify-center border  h-40 w-full relative overflow-hidden">
                    <img src={product?.img} alt="" className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-110"/>
                    <div className="absolute inset-0 bg-blue-200 opacity-20"></div>
                    <p className=" text-lg text-center absolute bottom-0 -translate-y-1/2 text-white bg-black/90 font-medium  px-5 py-2 rounded">{product?.category}</p>
                </div>
            ))
        }
      </div>
    </div>
  );
};
export default ShopByCategory;
