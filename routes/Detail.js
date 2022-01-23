import { useParams } from "react-router-dom"
import { useEffect, useState } from "react/cjs/react.development"
import Movie from "../components/Movie";

function Detail(){
    const {id} =useParams()
    const[loading, setLoading]=useState(true);
    const[movie,setMovie]=useState([])
    const getMovieDetail=async()=>{
        const json = await(  
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
       ).json()
       console.log(json)
       setMovie(json.data.movie)
       setLoading(false)
    }
    useEffect(()=>{
        getMovieDetail()
      },[])

    return(<div>
        {loading ? (<h1>Loading...</h1>):(
            <div>
            <img src={movie.medium_cover_image} alt={movie.title}/>
            <h2>{movie.title}</h2>
            <p>{movie.description_full}</p>
            <ul>
              {movie.genres.map(g=>
              <li key={g}>{g}</li>)}
            </ul>
         </div>
        )}
        </div>
    )
}

export default Detail