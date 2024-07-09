const ShopByCategory = () => {
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
    <div className="max-w-[1400px] mx-auto ">
      <h2 className="text-4xl  font-medium text-center pb-10">Shop By Category</h2>
      <div className="grid grid-cols-4 items-center justify-center gap-5 border">
        {
            plantCategory.map((category)=>(
                <div className="grid items-center justify-center border  ">
                    <img src="https://nurseryplantsbd.com/wp-content/uploads/2022/02/Flower-Plants.webp" alt="" className="size-24"/>
                    <p className="text-lg text-center ">{category}</p>
                </div>
            ))
        }
      </div>
    </div>
  );
};
export default ShopByCategory;
