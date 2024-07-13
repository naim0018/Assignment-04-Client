/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import ProductsTabData from "./ProductsTabData";
import { useGetAllProductsQuery } from "../../../../redux/api/productsApi";
import { TProduct } from "../../../../types";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("Flowers");
  const {data,isLoading} = useGetAllProductsQuery({})
  
  if(isLoading){
    return<p>Loading</p>
  }

  const category = data?.data?.reduce((acc:[{category:string,img:string}], product:TProduct) => {
    if (!acc.some(item => item.category === product.category)) {
        acc.push({ category: product.category, img: product.img });
    }
    return acc;
}, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-medium text-center py-10">Latest Products</h1>
      <div className=" flex justify-end ">
        {category.map((product : any) => (
          <div  key={product.category}
              onClick={() => setActiveTab(product.category)}
              role="tab"
              className={`font-semibold ${
                activeTab === `${product.category}`
                  ? "border-b-blue-500 text-blue-600 "
                  : ""
              } tab text-lg border-b-2 `}
            >
              {product.category}
            
          </div>
        ))}
      </div>

      <ProductsTabData  productCategory={activeTab} />
    </div>
  );
};
export default Tab;

