import { useForm } from "react-hook-form"
import { useCreateProductMutation } from "../../../redux/api/productsApi"
import { TProduct } from "../../../types"
import Loading from "../UI/Loading/Loading"


const AddProduct = ({setOpenModal}:{setOpenModal:(value:boolean)=>void}) => {
    
    const {register,handleSubmit} = useForm<TProduct>()
    const [createProduct,{isLoading}]= useCreateProductMutation()
    if(isLoading){
        return <Loading/>
    }
    const AddProduct =(data:TProduct)=>{
        try {
            createProduct(data)
            setOpenModal(false)
         
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className="">
      <div className=" hero-content flex-col lg:flex-row-revers w-full drop-shadow-[0_40px_45px_rgba(0,0,0,0.40)]">
        <div className="card shrink-0  w-4/5 shadow-2xl bg-white/80">
          <form onSubmit={handleSubmit(AddProduct)} className="card-body w-full">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Name </span>
              </label>
              <input
                
                type="text"
                id="title"
                {...register('title')}
                placeholder="Product Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image URL </span>
              </label>
              <input
                
                type="url"
                id="img"
                {...register("img")}
                placeholder="Image URL"
                className="input input-bordered"
                required
              />
            </div>
      
            <div className="grid lg:grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                
                type="text"
                id="category"
                {...register("category")}
                placeholder="Category"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                
                type="number"
                step="any"
                id="rating"
                {...register("rating")}
                placeholder="Rating"
                className="input input-bordered"
                required
              />
            </div>
            </div>

           <div className="grid lg:grid-cols-2 gap-5">
           <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                
                type="number"
                id="price"
                {...register("price")}
                placeholder="Price"
                step='any'
                className="input input-bordered"
                required
              />
            </div>
           <div className="form-control">
              <label className="label">
                <span className="label-text">Stock</span>
              </label>
              <input
                
                type="number"
                id="stock"
                {...register("stock")}
                placeholder="Stock"
                className="input input-bordered"
                required
              />
            </div>
        
           </div>
     
            <div className="form-control mt-6">
              <button className="btn bg-yellow-400 hover:bg-transparent">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default AddProduct