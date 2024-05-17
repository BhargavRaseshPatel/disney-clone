import React from 'react'
import disney from './../assets/image/disney.png'
import marvel from './../assets/image/marvel.png'
import nationalG from './../assets/image/nationalG.png'
import pixar from './../assets/image/pixar.png'
import starwar from './../assets/image/starwar.png'

import disneyV from './../assets/Videos/disney.mp4'
import marvelV from './../assets/Videos/marvel.mp4'
import nationalGV from './../assets/Videos/national-geographic.mp4'
import pixarV from './../assets/Videos/pixar.mp4'
import starwarV from './../assets/Videos/star-wars.mp4'

function ProductionHouse() {
    const ProductionHouseList = [
        { id: 1, image: disney, video: disneyV },
        { id: 2, image: pixar, video: pixarV },
        { id: 3, image: marvel, video: marvelV },
        { id: 4, image: starwar, video: starwarV },
        { id: 5, image: nationalG, video: nationalGV },
    ]
    return (
        <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16 '>{ProductionHouseList.map((item ,index) => (
            <div key={index} className='border-[2px] hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer border-gray-600 rounded-lg relative shadow-xl shadow-black'>
                <video src={item.video} autoPlay loop playsInline className='absolute auto top-0 rounded-md z-0 opacity-0 hover:opacity-50'/>
                <img src={item.image} className='w-full z-[1]' />
            </div>
        ))}</div>
    )
}

export default ProductionHouse