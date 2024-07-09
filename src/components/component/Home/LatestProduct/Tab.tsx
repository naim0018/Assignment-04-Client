import { useState } from "react";
import ProductsTabData from "./ProductsTabData";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("");

  const plantCategory = [
    "Flowers",
    "Fruits",
    "Bamboo",
    "Fertilizers",
    "Plants Pot",
    "Gardening Tools",
    "Soils",
  ];
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-medium text-center py-10">Products</h1>
      <div className=" flex justify-end ">
        {plantCategory.map((category) => (
          <div className="">
            <a
              onClick={() => setActiveTab(category)}
              role="tab"
              className={` ${
                activeTab === `${category}`
                  ? " border-b-blue-500 text-blue-700   "
                  : ""
              } tab text-lg border-b-2 p-2 `}
            >
              {category}
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
