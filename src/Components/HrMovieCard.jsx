import React from 'react'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"


function HrMovieCard({movie}) {
  return (
    <section className='hover:scale-110 transition-all duration-150 cursor-pointer ease-in'>
    <img src={IMAGE_BASE_URL+movie.backdrop_path} className='w-[110px] md:w-[260px] rounded-lg hover:border-[3px] border-gray-400
    '/>
    <h2 className='w-[110px] text-white mt-2  md:w-[260px]'>{movie.title}</h2>
</section>
  )
}

export default HrMovieCard