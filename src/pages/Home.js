import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Who from "../components/Who";
import Shoecarousel from "../components/Shoecarousel"
import Outletcarousel from "../components/Outletcarousel";
import Footer from "../components/Footer";
import {Outlet} from "react-router-dom"

export default function Home(){
    const Banners=[
        {
            image:"https://www.adidas.sa/dw/image/v2/BFNL_PRD/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/default/dw5b439341/MENA_Local_Activations/em-sa-BTS-launch-hp-mh-d.jpg",
            title:"BACK TO SCHOOL",
            description:"Gear Up for Success! Enjoy additional 30% Off on Selected Back to School Essentials!",
            buttons:[{
                link:"kids",
                text:"Shop Now"
            }]
        },
        {
            image:"https://www.adidas.sa/dw/image/v2/BFNL_PRD/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/default/dw72e1e15c/MENA_Local_Activations/em-emc-running-fw24-ub5-hp-mh-d.jpg",
            title:"ULTRABOOST 5",
            description:"More cushion. More comfort. Less weight. Ultra energy. The Ultraboost 5 is here.",
            buttons:[
                {
                    link:"men",
                    text:"Shop Men"
                },
                {
                    link:"women",
                    text:"Shop Women"
                }

            ]
        }
    ]

    return(
        <>
        
       { Banners.map((banner)=>{
            
           return ( <Banner image={banner.image} title={banner.title} description={banner.description} button={banner.buttons}></Banner>)
        })}
        
        
        <Who></Who>
        <Shoecarousel></Shoecarousel>
        <Outletcarousel title="Outlet Deals"></Outletcarousel>
        <Footer></Footer>
        <Outlet/>
        </>
    )
}