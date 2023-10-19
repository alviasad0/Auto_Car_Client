
import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";


const ProductDetails = () => {
    const product = useLoaderData()
    console.log(product);
    return (
        <div>
            <Navbar></Navbar>
            <div>
                
           </div>
        </div>
    );
};

export default ProductDetails;