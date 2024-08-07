import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Who from "../components/Who";
import Shoecarousel from "../components/Shoecarousel";
import Outlet from "../components/Outletcarousel";
import Footer from "../components/Footer";
import Imagegrid from "../components/Imagegrid"

export default function Men(){

    return(
        <>
        
        <div className="fluid-container position-relative mb-4">
           <img className="w-100" src="https://www.adidas.sa/dw/image/v2/BFNL_PRD/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/default/dw1ec3dacd/MENA_Local_Activations/em-emc-football-fw24-f50-launch-hp-mglp-mh-d.jpg" alt="" />
                <div className="position-absolute bottom-0 text-white pb-4 ps-3 pe-2">
                    <h1>Men's Shoes </h1>
                    <p>Men’s adidas shoes are there when you need them most. From hitting your stride out on the track in running trainers, to relaxing after a hard day’s work – comfort, performance, energy, and power are everything you can expect from adidas. Not just shoes, experiences. Added game to help your performance in any sport or social setting.</p>  
                </div>
            </div>
        <Outlet title="Originals"></Outlet>
        <Imagegrid></Imagegrid>

        <Footer></Footer>
        </>
    )
}