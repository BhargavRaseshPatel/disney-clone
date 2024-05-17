import axios from "axios"

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='c35be592de7418eafa0ac0b34ed8f2cd'
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=c35be592de7418eafa0ac0b34ed8f2cd'

//https://api.themoviedb.org/3/movie/550?api_key=c35be592de7418eafa0ac0b34ed8f2cd
const getTrendingVideos = axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key)
const getMovieByGenreId=(id)=> axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}