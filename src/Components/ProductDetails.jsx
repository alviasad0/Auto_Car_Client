import { useParams } from "react-router-dom";
import Navbar from "./Navbar";


const ProductDetails = () => {
    const {name} = useParams()
    console.log(name);
    return (
        <div>
            <Navbar></Navbar>
            <h1>this is the product details</h1>
        </div>
    );
};

export default ProductDetails;