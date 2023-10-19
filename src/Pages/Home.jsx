
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import BrandSection from "../Components/BrandSection";
import WhyAutoCar from "../Components/WhyAutoCar";
import CustomerReview from "../Components/CustomerReview";



const Home = () => {
   
    return (
      <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <WhyAutoCar></WhyAutoCar>
            <BrandSection></BrandSection>
            <CustomerReview></CustomerReview>
        <h1>this is the homme</h1>
      </div>
    );
};

export default Home;