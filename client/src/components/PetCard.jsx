import React from "react";
import {Link} from 'react-router-dom'
function PetCard(props) {
    return (
        <section
            className="bg-lund h-420px flex justify-center items-center gap-x-16 text-white"
        >

            <div
                className=" w-[300px] h-[420px] bg-transparent cursor-pointer group perspective"
            >
                <div
                    className="border-2 border-primaryBrown relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000"
                >
                    <div className=" absolute backface-hidden border-2 w-full h-full">
                        <img src={`http://localhost:5000/uploads/images/${props.img[0]}`} className="w-full h-full" />
                    </div>
                    <div
                        className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-lund overflow-hidden"
                    >
                        <div
                            className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24"
                        >
                            <h1 className="text-3xl font-semibold">{props.name}</h1>
                            <p className="my-2">{props.breed}</p>
                            <p>
                                {props.product.history}
                            </p>
                            <Link to="/listing" state={{product:props.product}} className="mr-44 ml-10">
                            <button
                                className="bg-primaryBrown px-6 py-2 font-semibold text-darkCream rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125"
                            >
                                Give a home!
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default PetCard;