import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../utils/context.jsx';
function Quizine() {
    const baseData = useContext(UserContext); 
    const [data, setData] = useState([]);
    const [val, setVal] = useState(0);
    useEffect(() => {
        if (baseData[0]?.card?.card?.imageGridCards?.info) {
            setData(baseData[0]?.card?.card?.imageGridCards?.info);
            console.log(data);
        } else {
            console.log("Data not available yet", baseData);
        }
    }, [baseData]);

    

    function slidePrev() {
        setVal((prev) => Math.max(prev - 300, 0)); // prevent going left too far
    }
    function slideNext() {
        setVal((prev) => {
            const maxScroll = (data.length * 150) - 600; // totalWidth - visible width
            return Math.min(prev + 300, maxScroll);
        });
    }
    return (
        <>
            <div className='flex justify-between items-center mb-2'>
                <h1 className='font-bold text-xl'>What's on your mind?</h1>
                <div className='text-2xl flex gap-2'>
                    <div onClick={slidePrev} className='bg-gray-300 rounded-full h-8 w-8 flex items-center justify-center cursor-pointer'>
                        <i className="fi fi-rr-arrow-small-left"></i>
                    </div>
                    <div onClick={slideNext} className='bg-gray-300 rounded-full h-8 w-8 flex items-center justify-center cursor-pointer'>
                        <i className="fi fi-rr-arrow-small-right"></i>
                    </div>
                </div>
            </div>
            <div className="flex transition-transform duration-300 ease-in-out  pb-[5%]" style={{ transform: `translateX(-${val}px)` }}>
                {
                    data.map((res, index) => (
                        <img
                            key={index}
                            className="h-44 w-[150px] mr-4 flex-shrink-0"
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${res.imageId}`}
                            alt=""
                        />
                    ))
                }
            </div>
            <hr className='border-b border-b-neutral-500 ' style={{ color : "#D3D3D3"}}></hr>    {/* it is horizental line */}
        </>
    )
}

export default Quizine;