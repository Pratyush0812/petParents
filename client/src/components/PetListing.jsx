import React from "react";
import Navbar1 from "./Navbar1";
import Footer1 from "./Footer1";
import PetListingHeading from "./PetListingHeading";
import CardCarousel from "./CardCarousel";
import { useLocation } from "react-router-dom";
function PetListing(){
    const location = useLocation();
    const data = location.state?.product;
    return(
        <div>
            <Navbar1 />
            <div className="bg-lund">
                <PetListingHeading product={data}/>
                <CardCarousel product={data}/>
                <Footer1 />
            </div>
            
        </div>
    )
}

export default PetListing;