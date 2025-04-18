import { useState, useEffect, useContext } from "react";
import ResCards from "./ResCards.jsx";
import { UserContext } from '../utils/context.jsx';
function ResWithOnlineDeli() {
    const baseData = useContext(UserContext);
    const [data, setData] = useState([]);
    useEffect(() => {
        if (baseData[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
            {
                setData(baseData[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            }
        }
    }, [baseData]);

    function Sort(){

    }
    
    return (
        <>
            <div className='mb-2'>
                <h1 className='font-bold text-xl'>Restaurants with online food delivery in Noida 1</h1>
                <div>
                    <div className="mt-[3%]">
                        <div className="flex justify-items-start items-center gap-2">
                            <button class="bg-white  py-1.5 px-3 text-[13px] font-medium border border-gray-300 rounded-4xl">Filter
                                <i className="fi fi-rr-settings-sliders"></i>
                            </button>
                            <button class="bg-white py-1.5 px-3 text-[13px] font-medium border border-gray-300 rounded-4xl " onClick={Sort}>Sort By
                                <i className="fi fi-sr-angle-small-down"></i>
                            </button>
                            <button class="bg-white py-1.5 px-3 text-[13px] font-medium border border-gray-300 rounded-4xl ">Fast Delivery</button>
                            <button class="bg-white py-1.5 px-3 text-[13px] font-medium border border-gray-300 rounded-4xl ">New On Swiggy</button>
                            <button class="bg-white py-1.5 px-3 text-[13px] font-medium border border-gray-300 rounded-4xl ">Rating 4.0+</button>
                            <button class="bg-white py-1.5 px-3 text-[13px] font-medium border border-gray-300 rounded-4xl ">Pure Veg</button>
                            <button class="bg-white py-1.5 px-3 text-[13px] font-medium border border-gray-300 rounded-4xl ">Offers</button>
                            <button class="bg-white py-1.5 px-3 text-[13px] font-medium border border-gray-300 rounded-4xl ">Rs.300-Rs.600</button>
                            <button class="bg-white py-1.5 px-3 text-[13px] font-medium border border-gray-300 rounded-4xl ">Less than Rs.300</button>
                        </div>
                        <div className="mt-7 grid grid-cols-4 gap-7" >
                            {data.map((restaurant, index) => (
                                <ResCards index={index} restaurant={restaurant} w={220} h={150}></ResCards>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ResWithOnlineDeli;