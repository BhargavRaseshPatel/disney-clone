import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function Slider() {
    const [movieList, setMovieList] = useState([])
    const elementRef = useRef();
    const screenwidth = window.innerWidth;

    useEffect(() => {
        getTrendingMovies()
    }, [])

    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos.then(resp => {
            console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }

    const sliderRight = (element) => {
        element.scrollLeft += screenwidth - 110
    }
    const sliderLeft = (element) => {
        element.scrollLeft -= screenwidth - 110
    }
    return (
        <div>
            <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer' onClick={() => sliderLeft(elementRef.current)} />
            <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0' onClick={() => sliderRight(elementRef.current)} />

            <div ref={elementRef} className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth'>{movieList.map((item, index) => (
                <img key={index} src={IMAGE_BASE_URL + item.backdrop_path}
                    className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md 
                    hover:border-[4px] border-gray-400 duration-100 ease-in-out transition-all' />
            ))}
            </div>
        </div>
    )
}

export default Slider