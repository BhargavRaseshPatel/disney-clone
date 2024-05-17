import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import HrMovieCard from './HrMovieCard';

function MovieList({ genreId, index_ }) {
    const [movieList, setMovieList] = useState([])
    const elementRef = useRef(null);
    const screenwidth = window.innerWidth;

    useEffect(() => {
        getMovieByGenreId()
    }, [])

    const getMovieByGenreId = () => {
        GlobalApi.getMovieByGenreId(genreId).then(resp => {
            // console.log(resp.data.results)
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
        <div className='relative'>
            <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer' onClick={() => sliderLeft(elementRef.current)} />
            <div ref={elementRef} className='flex scroll-smooth overflow-x-auto gap-8 scrollbar-hide pt-5 pb-5 px-3'>
                {movieList.map((item, index) => (
                    <>
                        {index_%3 == 0 ? <HrMovieCard key={index} movie={item}/> : <MovieCard key={index} movie={item} />}
                    </>
                ))}
            </div>
            <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0' onClick={() => sliderRight(elementRef.current)} />
        </div>
    )
}

export default MovieList