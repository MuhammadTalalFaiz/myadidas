import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Who from "../components/Who";
import Shoecarousel from "../components/Shoecarousel";
import Outlet from "../components/Outletcarousel";
import Footer from "../components/Footer";
import Imagegrid from "../components/Imagegrid"

export default function Women(){

    return(
        <>
        
        <div className="fluid-container position-relative mb-4">
           <img className="w-100" src="https://www.adidas.sa/dw/image/v2/BFNL_PRD/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/default/dwea5d90b8/MENA_Local_Activations/em-emc-wGLP-MH-d.jpg" alt="" />
                <div className="position-absolute bottom-0 text-white pb-4 ps-3 pe-2">
                    <h1>Women's Shoes </h1>
                    <p>Sport. Street. Style. Women's adidas shoes caters to every shoe lover on the planet with a varied offering and a special focus on fit, design, and support. Boasting both comfort and style without compromise, adidas is the superior choice in women’s footwear.</p>  
                </div>
            </div>
        <Outlet title="Originals"></Outlet>
        <Imagegrid></Imagegrid>
        <Footer></Footer>
        
        </>
    )
}