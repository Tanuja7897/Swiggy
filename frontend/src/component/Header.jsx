import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
function Header() {
    const headerData = [
        { icon: "fi fi-rr-shopping-bag", text: "Swiggy Corporate" },
        { icon: "fi fi-br-search", text: "Search" },
        { icon: "fi fi-br-badge-percent", text: "Offers" },
        { icon: "fi fi-ss-life-ring", text: "Help" },
        { icon: "fi fi-ss-user", text: "User" },
        { icon: "fi fi-ss-order-history", text: "Cart" }
    ]
    return (
        <>
            <nav className='w-full shadow-lg h-20 flex items-center justify-center '>
                <div className=' w-[96%] h-[60%] flex items-center'>

                    <div className="w-[40%] h-[100%] flex items-center gap-3">
                        <Link to={"/"} className="h-full block">
                            <img  className="h-full rounded-lg mr-6" src="https://miro.medium.com/v2/resize:fit:1000/1*TCc6vQVH-3EUiJea76pMbQ.png" alt="" />
                        </Link>

                        <p className='border-b-2 border-black font-bold'>Others</p>
                        <i className="fi fi-ss-angle-small-down text-2xl mt-2 text-orange-400"></i>
                    </div>
                    <div className="w-[60%]  flex justify-between items-center">
                        {headerData.map((item, ind) => (
                            <div key={ind} className='flex gap-1.5'>
                                <i className={item.icon + ' pt-0.5'}></i>
                                <span className='font-medium'>{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </nav>
            <Outlet></Outlet>
        </>
    )
}

export default Header