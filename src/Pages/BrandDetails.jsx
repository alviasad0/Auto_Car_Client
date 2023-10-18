import { Link, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";


const BrandDetails = () => {
    const {brand_name} = useParams()
    console.log(brand_name);
    const [allProducts, setAllProducts] = useState([])

 
    const products = allProducts.filter(
      (product) => product.brand_name === brand_name
    );
    
    console.log(products); 
    useEffect(() => { 
        fetch("http://localhost:5000/products")
        .then(response => response.json())
        .then(data=> setAllProducts(data))
    }, [])
    return (
      <div>
        <Navbar></Navbar>

        <h1>this is the brand details section </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="col-span-1 grid grid-cols-1">
            <img
              src="https://i.ibb.co/k1k95DZ/1200px-Mercedes-Benz-Logo-11.jpg"
              alt=""
            />
            <img
              src="https://i.ibb.co/k1k95DZ/1200px-Mercedes-Benz-Logo-11.jpg"
              alt=""
            />
            <img
              src="https://i.ibb.co/k1k95DZ/1200px-Mercedes-Benz-Logo-11.jpg"
              alt=""
            />
          </div>
          <div className="col-span-2">
            <div>
              {!products.length > 0 ? (
                <div>no data found in this brand</div>
              ) : (
                <div>
                  {products.map((product) => (
                    <div key={product._id}>
                      <div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure>
                          <img src={product.image_url} alt="Album" />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">{product.name}</h2>
                          <p>{product.short_description}</p>
                          <div className="card-actions justify-end">
                            <button className="btn btn-primary">
                              <Link to={`/productDetails/${product._id}`}>
                                Details
                              </Link>
                            </button>
                            <button className="btn btn-primary">
                              <Link to={`/productUpdate/${product._id}`}>
                                Update
                              </Link>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
};

export default BrandDetails;