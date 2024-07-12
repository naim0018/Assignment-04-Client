import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();

  const handleAddProduct = () =>{

  }

  return (
    <>
      <div className="hero min-h-screen -mt-20 pb-24 mb-20">
        <div className=" hero-content flex-col lg:flex-row-revers w-full">
          <div className="card shrink-0  w-4/5 shadow-2xl bg-base-10">
            <form onSubmit={handleSubmit(handleAddProduct)} className="card-body w-full">
              {/* Title */}
              <div
                className="form-control"
              >
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  id="title"
                  {...register('title')}
                  placeholder="Title"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* Image */}
              <div
                className="form-control"
              >
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="text"
                  id="img"
                  {...register('img')}
                  placeholder="Image"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* Category */}
              <div
                className="form-control"
              >
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <input
                  type="text"
                  id="category"
                  {...register('category')}
                  placeholder="Category"
                  className="input input-bordered"
                  required
                />
              </div>
             <div className="grid grid-cols-2 gap-5">
                 {/* Stock */}
              <div
                className="form-control"
              >
                <label className="label">
                  <span className="label-text">Stock</span>
                </label>
                <input
                  type="number"
                  id="stock"
                  {...register('stock')}
                  placeholder="Stock"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* Price*/}
              <div
                  className="form-control"
                >
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="number"
                    id="price"
                    {...register('price')}
                    placeholder="Price"
                    className="input input-bordered"
                    required
                  />
              </div>
             </div>
              
              <div className="form-control mt-6">
                <button className="btn bg-yellow-400">Add Product</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
