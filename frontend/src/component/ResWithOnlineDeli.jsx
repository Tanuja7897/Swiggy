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
            <div className='mb-2'>
                <h1 className='font-bold text-xl'>Restaurants with online food delivery in Noida 1</h1>
                <div className="mt-7 grid grid-cols-3 gap-4" >
                    {data.map((restaurant, index) => (
                        <ResCards index={index} restaurant = {restaurant} w={10} h={10}></ResCards>
                    ))}
                </div>
            </div>
        </>
    )
}
export default ResWithOnlineDeli;