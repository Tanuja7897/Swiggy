import { useState, useEffect, useContext } from "react";
import ResCards from "./ResCards.jsx";
import { UserContext } from '../utils/context.jsx';
function ResWithOnlineDeli() {
    const baseData = useContext(UserContext);
    const [data, setData] = useState([]);
    const items = [
        {
            name: "Fast Delivery",
        },
        {
            name: "New On Swiggy",
        },
        {
            name: "Rating 4.0+",
        },
        {
            name: "Pure Veg",
        },
        {
            name: "Offers",
        },
        {
            name: "Rs.300-Rs.600"
        },
        {
            name: "Less than Rs.300",
        }
    ]
    useEffect(() => {
        if (baseData[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
            {
                setData(baseData[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            }
        }
    }, [baseData]);

    return (
        <>
            <div className='mb-2'>
                <h1 className='font-bold text-xl'>Restaurants with online food delivery in Noida 1</h1>
                <div>
                    <div>
                        <div className="">

                            <div className="flex justify-items-start items-center gap-2 sticky">
                                <button class="bg-white  py-1.5 px-3 text-[13px] font-medium border border-gray-300 rounded-4xl">Filter
                                    <i className="fi fi-rr-settings-sliders"></i>
                                </button>
                                <button class="bg-white py-1.5 px-3 text-[13px] font-medium border border-gray-300 rounded-4xl ">Sort By
                                    <i className="fi fi-sr-angle-small-down"></i>
                                </button>
                                {items.map((data, index) => (
                                    <button class="bg-white py-1.5 px-3 border text-[13px] font-medium border-gray-300 rounded-4xl ">{data.name}
                                    </button>
                                ))}
                            </div>

                        </div>
                    </div>
                    <div className="mt-7 grid grid-cols-4 gap-7" >
                        {data.map((restaurant, index) => (
                            <ResCards index={index} restaurant={restaurant} w={170} h={182}></ResCards>
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}
export default ResWithOnlineDeli;