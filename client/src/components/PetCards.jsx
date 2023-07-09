import React from "react";
import PetCard from "./PetCard";
import HeadingCSS from "../styles/Heading.module.css";
import { useState } from "react";
function PetCards() {
    const [products,setProducts] = useState([]);
    async function fetchData() {
        const response = await fetch('http://localhost:5000/listings');
        const data = await response.json();
        setProducts(data);
    }
    fetchData()
    return (
        <div>
            <div className="bg-lund">
                <h1 className={HeadingCSS.headerH1}><span className={HeadingCSS.spanH1}>Stray Lives.</span> Save One.</h1>

                <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-22 lg:max-w-7xl lg:px-8">

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => {
                            return (
                                <div>
                                    <PetCard img={product.images} name={product.name} breed={product.breed} product = {product}/>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PetCards;