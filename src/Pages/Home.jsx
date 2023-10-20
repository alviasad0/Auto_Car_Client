
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import BrandSection from "../Components/BrandSection";
import WhyAutoCar from "../Components/WhyAutoCar";
import CustomerReview from "../Components/CustomerReview";
import Footer from "../Components/Footer";



const Home = () => {
   
    return (
      <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <WhyAutoCar></WhyAutoCar>
            <BrandSection></BrandSection>
            <CustomerReview></CustomerReview>
        <Footer></Footer>
      </div>
    );
};

export default Home;