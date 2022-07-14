import Loading from "./Loading";
import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
import MovieSearchForm from "./MovieSearchForm";
import { getMoviesByName } from "./utils";



export default function Home(){

  const [movies, setMovies] = useState([]);
  const [moviesExist, setMoviesExist] = useState(0);
  const [movieName, setMovieName] = useState("")
  const [loading, setLoading] = useState(false);
    
  useEffect(() => {
    getMoviesByName(setLoading,movieName,setMovies,setMoviesExist);
  }, [movieName]) 

    return(
      <div className="Home">
        <h1 style={{textDecoration: "underline"}}> MovieQueue </h1>
        <h2> Keep track of what to watch next </h2>
        <MovieSearchForm movieName={movieName} setMovieName={setMovieName}/>
        <br />
        {!loading ? (
          <div className="FlexContainer">
            {moviesExist ? (
              movies.Search.map((movie, index)=> (
                <MovieCard key={index} title = {movie.Title} poster={movie.Poster} year={movie.Year}/>
              ))
            ) : (
              <h3> No Movies Found </h3>
            )}
          </div>
        ):(
          <Loading />
        )}

        
      </div>
  );
}