


const ProductsTabData :React.FC<{productCategory:string}>= ({productCategory}) => {
    console.log(productCategory)
  return (
    <div className="m-5 p-5 ">
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
     
    </div>
  </div>
  )
}
export default ProductsTabData


// {productCategory === "Books" &&
//     books
//       ?.slice(0, 8)
//       .map((item, inx) => <ShowProducts key={inx} item={item} />)}
//   {productCategory === "Stationary" &&
//     books
//       ?.slice(0, 8)
//       .map((item, inx) => <ShowProducts key={inx} item={item} />)}
//   {productCategory === "Macrame Crafts" &&
//     macrameCrafts
//       ?.slice(0, 8)
//       .map((item, inx) => <ShowProducts key={inx} item={item} />)}
//   {productCategory === "Electronics" &&
//     electronics
//       ?.slice(0, 8)
//       .map((item, inx) => <ShowProducts key={inx} item={item} />)}
//   {productCategory === "Gifts" &&
//     electronics
//       ?.slice(0, 8)
//       .map((item, inx) => <ShowProducts key={inx} item={item} />)}
//   {productCategory === "Ornaments" &&
//     electronics
//       ?.slice(0, 8)
//       .map((item, inx) => <ShowProducts key={inx} item={item} />)}