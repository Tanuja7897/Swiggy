import { useState, useEffect, useContext } from "react";
import { UserContext } from '../utils/context.jsx';

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
                    <div key={index}>
                        <div className="w-[285px] h-[182px] relative">
                            <img className="h-[100%] min-w-full object-cover rounded-3xl bg-gradient-to-br relative" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restaurant?.info?.cloudinaryImageId} alt={restaurant.name} />
                            <div className="top-0 bg bg-gradient-to-t from-black from-1% to-transparent to-50% rounded-3xl w-full h-full absolute"></div>
                        </div>
                        <div className="mt-[1%] pl-[6%] w-[285px]">
                            <div>
                                <p className="font-bold font-black overflow-hidden truncate">{data[index]?.info?.name}</p>
                            </div>
                            <div className="flex gap-0.5 items-center">
                                <i class="fi fi-sr-circle-star text-green-600 font-bold mt-0.5"></i>
                                <span className="font-bold font-black">{data[index]?.info?.avgRating}</span>
                                <p>&#x2022;</p>
                                <p>{data[index]?.info?.sla?.slaString}</p>
                                
                            </div>
                            <div className="w-[75%]">
                                <p className="overflow-hidden truncate text-gray-500">{data[index]?.info?.cuisines.join(' ')}</p>
                                <p className="text-gray-500">{data[index]?.info?.areaName}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <hr className='border-b border-b-neutral-500 mt-[5%] mb-[5%]' style={{ color : "#D3D3D3"}}></hr>
        </>
    )
}
export default TopRest;