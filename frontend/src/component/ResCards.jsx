function ResCards({ index, restaurant }) {
    return (
        <>
            <div key={index} className="transform transition-transform duration-300 hover:scale-105" >
                <div className="w-[285px] h-[182px] relative">
                    <img className="h-[100%] min-w-full object-cover rounded-3xl bg-gradient-to-br relative" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restaurant?.info?.cloudinaryImageId} alt={""} />
                    <div className="top-0 bg bg-gradient-to-t from-black from-1% to-transparent to-50% rounded-3xl w-full h-full absolute"></div>

                    <p className="absolute bottom-0 pl-[6%] pb-[5%] text-white font-bold text-[100%]">{restaurant[index]?.info?.aggregatedDiscountInfoV3?.header + " " + restaurant[index]?.info?.aggregatedDiscountInfoV3?.subHeader}</p>

                </div>
                <div className="mt-[1%] pl-[6%] w-[285px]">
                    <div>
                        <p className="font-bold font-black overflow-hidden truncate">{restaurant?.info?.name}</p>
                    </div>
                    <div className="flex gap-0.5 items-center">
                        <i className="fi fi-sr-circle-star text-green-600 font-bold mt-0.5"></i>
                        <span className="font-bold font-black ">{restaurant?.info?.avgRating}</span>
                        <p>&#x2022;</p>
                        <p>{restaurant?.info?.sla?.slaString}</p>

                    </div>
                    <div className="w-[75%]">
                        <p className="overflow-hidden truncate text-gray-500">{restaurant?.info?.cuisines.join(' ')}</p>
                        <p className="text-gray-500">{restaurant?.info?.areaName}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ResCards