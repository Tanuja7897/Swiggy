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

    return (
        <>
            <div className='flex justify-between items-center mb-2'>
                <h1 className='font-bold text-xl'>Restaurants with online food delivery in Noida 1</h1>
                <div className="flex transition-transform duration-400 ease-in-out gap-10 justify-between items-center" >
                    {data.map((restaurant, index) => (
                        <ResCards index={index} restaurant={restaurant}></ResCards>
                    ))}
                </div>
            </div>
        </>
    )
}
export default ResWithOnlineDeli;