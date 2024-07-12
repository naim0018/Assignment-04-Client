/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import ProductsTabData from "./ProductsTabData";
import { useGetAllProductsQuery } from "../../../../redux/api/productsApi";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("Flowers");
  const {data,isLoading} = useGetAllProductsQuery({})
  
  if(isLoading){
    return<p>Loading</p>
  }

  const category = data?.data?.reduce((acc, product) => {
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
          <div className="font-semibold" key={product._id}>
            <a
              onClick={() => setActiveTab(product.category)}
              role="tab"
              className={` ${
                activeTab === `${product.category}`
                  ? "border-b-blue-500 text-blue-600 "
                  : ""
              } tab text-lg border-b-2 `}
            >
              {product.category}
            </a>
          </div>
        ))}
      </div>

      <ProductsTabData productCategory={activeTab} />
    </div>
  );
};
export default Tab;

{
  /* <div role="tab-list" className="tabs ">
<a
  onClick={() => setActiveTab("Books")}
  role="tab"
  className={` ${
    activeTab === "Books" ? " border-b-blue-500 text-blue-700   " : ""
  } tab text-lg border-b-2 `}
>
  Books
</a>
<a
  onClick={() => setActiveTab("Stationary")}
  role="tab"
  className={`tab text-lg border-b-2  ${
    activeTab === "Stationary"
      ? " border-b-blue-500 text-blue-700    "
      : ""
  } `}
>
  Stationary
</a>
<a
  onClick={() => setActiveTab("Macrame Crafts")}
  role="tab"
  className={`tab text-lg  border-b-2  ${
    activeTab === "Macrame Crafts"
      ? " border-b-blue-500 text-blue-700    "
      : ""
  }`}
>
  Macrame Crafts
</a>
<a
  onClick={() => setActiveTab("Electronics")}
  role="tab"
  className={`tab text-lg  border-b-2 ${
    activeTab === "Electronics"
      ? " border-b-blue-500 text-blue-700    "
      : ""
  }`}
>
  Electronics
</a>
<a
  onClick={() => setActiveTab("Gifts")}
  role="tab"
  className={`tab text-lg border-b-2  ${
    activeTab === "Gifts"
      ? " border-b-blue-500 text-blue-700    "
      : ""
  }`}
>
  Gifts
</a>
<a
  onClick={() => setActiveTab("Ornaments")}
  role="tab"
  className={`tab text-lg  border-b-2 ${
    activeTab === "Ornaments"
      ? " border-b-blue-500 text-blue-700    "
      : ""
  }`}
>
  Ornaments
</a>
</div> */
}
