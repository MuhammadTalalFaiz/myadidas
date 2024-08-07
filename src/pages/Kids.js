import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Who from "../components/Who";
import Shoecarousel from "../components/Shoecarousel";
import Outletcarousel from "../components/Outletcarousel";
import Footer from "../components/Footer";
import Imagegrid from "../components/Imagegrid"

export default function Kids(){

     
    return(
        <>
        
        <div className="fluid-container position-relative mb-4">
           <img className="w-100" src="https://www.adidas.sa/dw/image/v2/BFNL_PRD/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/default/dw199f68be/MENA_Local_Activations/em-emc-Mickey-hp-MH-d.jpg" alt="" />
                <div className="position-absolute bottom-0 text-white pb-4 ps-3 pe-2">
                    <h1>Kid's Shoes </h1>
                    <p>Unleash the magic of sports</p>  
                </div>
            </div>
        <Outletcarousel title="Back to School- Offer"></Outletcarousel>
        <Imagegrid></Imagegrid>
        <Footer></Footer>
        
        </>
    )
}