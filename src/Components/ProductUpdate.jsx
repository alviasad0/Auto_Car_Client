import Swal from "sweetalert2";
import Navbar from "./Navbar";
import { useLoaderData } from "react-router-dom";


const ProductUpdate = () => {
    
    const product = useLoaderData()

    console.log( product);
   
   
   

   
     const handleUpdateSubmit = (event) => {
       event.preventDefault();
       const form = event.target;
       const image_url = form.image_url.value;
       const name = form.name.value;
       const brand_name = form.brand_name.value;
       const type = form.type.value;
       const price = form.price.value;
       const short_description = form.short_description.value;
       const rating = form.rating.value;
       const  updatedProduct = {
         image_url,
         name,
         type,
         price,
         short_description,
         rating,
         brand_name,
       };
       
         
         
       fetch(`http://localhost:5000/products/${product._id}`, {
         method: "PUT",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(updatedProduct),
       })
         .then((response) => response.json())
         .then((data) => {
           console.log(data);
           if (data.modifiedCount>0) {
             Swal.fire(
               "Good job!",
               "Product has Updated in the database!",
               "success"
             );
           }
         });


     };
    return (
      <div>
        <div>
          <Navbar></Navbar>
          <h1 className="text-center text-3xl font-bold">
            this is the add product section
          </h1>
          <div>
            <form action="" onSubmit={handleUpdateSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Image url"
                  name="image_url"
                  className="input input-bordered input-primary w-full max-w-xs"
                  defaultValue={product?.image_url}
                  required
                />
              </div>
              <br />
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered input-primary w-full max-w-xs"
                  defaultValue={product?.name}
                  required
                />
              </div>
              <br />
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Brand Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Brand Name"
                  name="brand_name"
                  className="input input-bordered input-primary w-full max-w-xs"
                  defaultValue={product?.brand_name}
                  required
                />
              </div>
              <br />

              <select
                name="type"
                className="select select-primary w-full max-w-xs"
              >
                <option disabled selected>
                  {product?.type}
                </option>
                <option>Sports Cars</option>
                <option>Sedan</option>
                <option>Luxary</option>
                <option>SUV</option>
              </select>
              <br />
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Price"
                  name="price"
                  className="input input-bordered input-primary w-full max-w-xs"
                  defaultValue={product?.price}
                  required
                />
              </div>
              <br />
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Short description</span>
                </label>
                <input
                  type="text"
                  placeholder="Short description"
                  name="short_description"
                  className="input input-bordered input-primary w-full max-w-xs"
                  defaultValue={product?.short_description}
                  required
                />
              </div>
              <br />
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="text"
                  placeholder="Rating"
                  name="rating"
                  className="input input-bordered input-primary w-full max-w-xs"
                  defaultValue={product?.rating}
                  required
                />
              </div>
              <br />
              <input
                type="submit"
                value="Update Product"
                className="btn btn-secondary"
              />
            </form>
          </div>
        </div>
      </div>
    );
};

export default ProductUpdate;