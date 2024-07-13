
import { useUpdateProductMutation } from "../../../redux/api/productsApi";

import { toast } from "sonner";
import { TProduct } from "../../../types";
import { useForm } from "react-hook-form";

const UpdateProduct = ({product,setOpenModal}) => {
    const { img, title, price, rating, _id, category } = product;
    const [updateProduct,{isLoading}] = useUpdateProductMutation()
    const {register,handleSubmit} = useForm<TProduct>()
    if(isLoading){
        return <p>Loading</p>
    }
    const handleUpdateProduct=(data)=>{
        console.log({register,data})
        updateProduct({id:_id,payload:data})
        toast('Product updated successfully')
        setOpenModal(false)
    }
  return (
    <>
    <div className="">
      <div className=" hero-content flex-col lg:flex-row-revers w-full drop-shadow-[0_40px_45px_rgba(0,0,0,0.40)]">
        <div className="card shrink-0  w-4/5 shadow-2xl bg-white/80">
          <form onSubmit={handleSubmit(handleUpdateProduct)} className="card-body w-full">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Name </span>
              </label>
              <input
                defaultValue={title}
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
                defaultValue={img}
                type="url"
                id="img"
                {...register("img")}
                placeholder="Product Name"
                className="input input-bordered"
                required
              />
            </div>
      

            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                defaultValue={category}
                type="text"
                id="category"
                {...register("category")}
                placeholder="Category"
                className="input input-bordered"
                required
              />
            </div>

           <div className="grid lg:grid-cols-2 gap-5">
           <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                defaultValue={price}
                type="number"
                id="price"
                {...register("price")}
                placeholder="Price"
                className="input input-bordered"
                required
              />
            </div>
        
           </div>
     
            <div className="form-control mt-6">
              <button className="btn bg-yellow-400 hover:bg-transparent">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>
  )
}
export default UpdateProduct