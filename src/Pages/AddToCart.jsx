import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from './../Providers/AuthProvider';


const AddToCart = () => {
    const {user} = useContext(AuthContext)
    const id = useParams();
    console.log(id, user);
    return (
        <div>
            <h1>This is the add to cart section </h1>
        </div>
    );
};

export default AddToCart;