import Swal from "sweetalert2";
import Navbar from "./Navbar";
import { useLoaderData } from "react-router-dom";
import Footer from "./Footer";

const ProductUpdate = () => {
  const product = useLoaderData();

  console.log(product);

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
    const updatedProduct = {
      image_url,
      name,
      type,
      price,
      short_description,
      rating,
      brand_name,
    };

    fetch(`https://automotiv.vercel.app/products/${product._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
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
        <div className="max-w-screen-2xl mx-auto ">
          <div
            className="hero min-h-screen bg-green-50 rounded-xl"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="3000"
          >
            <div className="flex items-center  gap-20 justify-center flex-col lg:flex-row-reverse md:px-10">
              <div className="text-center lg:text-left ">
                {/* hero sectiton */}
                <div
                  className="hero h-[70vh] rounded-xl"
                  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-duration="3000"
                  style={{
                    backgroundImage:
                      "url(https://i.ibb.co/9N2btJd/pexels-screen-post-17632052.jpg)",
                  }}
                >
                  <div className="hero-overlay rounded-xl bg-opacity-40"></div>
                  <div className="hero-content text-center text-neutral-content">
                    <div className="">
                      <h1 className="mb-5 text-5xl text-white font-bold">
                        Need to Update Exciting Car!!!
                      </h1>
                      <p className="mb-5 text-xl font-semibold tracking-widest">
                        Just fill the form and add the super sport cars .You
                        have add the Image_Url and the nae of the car ,the brand
                        name ,the type of the car ,the price of the car , the
                        rating of the car , and a short description of the car
                        .Just click the Update CAR button and add the car.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* form section */}
              <div
                className=" flex-shrink-0 w-1/3  "
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="3000"
              >
                <form onSubmit={handleUpdateSubmit} className="">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xl font-medium text-black">
                        Image URL
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Image url"
                      defaultValue={product.image_url}
                      name="image_url"
                      className="input input-bordered input-success w-full "
                      required
                    />
                  </div>
                  <br />
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xl font-medium text-black">
                        Name
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      defaultValue={product.name}
                      name="name"
                      className="input input-bordered input-success w-full "
                      required
                    />
                  </div>
                  <br />
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xl font-medium text-black">
                        Brand Name
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Brand Name"
                      defaultValue={product.brand_name}
                      name="brand_name"
                      className="input input-bordered input-success w-full "
                      required
                    />
                  </div>
                  <br />
                  <select name="type" className="select select-success w-full ">
                    <option disabled selected>
                      {product.type}
                    </option>
                    <option>Sports Cars</option>
                    <option>Sedan</option>
                    <option>Luxary</option>
                    <option>SUV</option>
                  </select>
                  <br />
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xl font-medium text-black">
                        Price
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Price"
                      defaultValue={product.price}
                      name="price"
                      className="input input-bordered input-success w-full "
                      required
                    />
                  </div>
                  <br />
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xl font-medium text-black">
                        Short description
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Short description"
                      defaultValue={product.short_description}
                      name="short_description"
                      className="input input-bordered input-success w-full "
                      required
                    />
                  </div>
                  <br />
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xl font-medium text-black">
                        Rating
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Rating"
                      defaultValue={product.rating}
                      name="rating"
                      className="input input-bordered input-success w-full "
                      required
                    />
                  </div>
                  <br />
                  <input
                    type="submit"
                    value="UPDATE CAR"
                    className="btn btn-success w-full text-xl tracking-widest font-bold"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ProductUpdate;
