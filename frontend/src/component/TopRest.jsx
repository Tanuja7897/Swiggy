import { useState, useEffect, useContext } from "react";
import { UserContext } from '../utils/context.jsx';
import ResCards from "./ResCards.jsx";
function TopRest() {
    const baseData = useContext(UserContext);
    const [data, setData] = useState([]); // For data coming from context API
    const [val, setVal] = useState(0); // For arrow in the div
    
    
    useEffect(() => {
        if (baseData[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
            {
               setData(baseData[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            }
        }
    }, [baseData]);
    
    function slidePrev() {
        setVal((prev) => Math.max(prev - 1000, 0)); // prevent going left too far
    }
    function slideNext() {
        setVal((prev) => {
            const maxScroll = (data.length * 305) - 600; // totalWidth - visible width
            return Math.min(prev + 1000, maxScroll);
        });
    }
    return (
        <>
            
            <div className='flex justify-between items-center mb-2'>
                <h1 className="font-bold text-xl pt-[5%] pb-[2%]">Top restaurant chains in Noida 1</h1>
                <div className='text-2xl flex gap-2'>
                    <div onClick={slidePrev} className='bg-gray-300 rounded-full h-8 w-8 flex items-center justify-center cursor-pointer'>
                        <i className="fi fi-rr-arrow-small-left"></i>
                    </div>
                    <div onClick={slideNext} className='bg-gray-300 rounded-full h-8 w-8 flex items-center justify-center cursor-pointer'>
                        <i className="fi fi-rr-arrow-small-right"></i>
                    </div>
                </div>
            </div>
            <div className="flex transition-transform duration-400 ease-in-out gap-10 justify-between items-center" style={{ transform: `translateX(-${val}px)` }}>
                {data.map((restaurant,index) => (
                    <ResCards index={index} restaurant = {restaurant}></ResCards>
                ))}
            </div>
            <hr className='border-b border-b-neutral-500 mt-[5%] mb-[5%]' style={{ color : "#D3D3D3"}}></hr>
        </>
    )
}
export default TopRest;