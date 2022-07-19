import Loading from "./Loading";
import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
import MovieSearchForm from "./MovieSearchForm";
import { getMoviesByName } from "./utils";
import MoviePickerModal from "./MoviePickerModal";




export default function Home(){

  const [movies, setMovies] = useState([]);
  const [moviesExist, setMoviesExist] = useState(0);
  const [movieName, setMovieName] = useState("")
  const [loading, setLoading] = useState(false);
  const [movieId, setMovieId] = useState("");
  const [movieInfo, setMovieInfo] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
    
  useEffect(() => {
    getMoviesByName(setLoading,movieName,setMovies,setMoviesExist);
  }, [movieName]) 

    return(
      <div className="Home">

        <h1 style={{textDecoration: "underline"}}> Movie Search </h1>
        <h2> Search for movies by name </h2>

        <MovieSearchForm movieName={movieName} setMovieName={setMovieName}/>
        <br />

        {!loading ? (
          <div className="FlexContainer">
            {moviesExist ? (
              movies.Search.map((movie, index)=> (
                <MovieCard key={index} title = {movie.Title} poster={movie.Poster} year={movie.Year} id={movie.imdbID}
                  setMovieId={setMovieId} setIsModalOpen={setIsModalOpen} />
              ))
            ) : (
              <h3> No Movies Found </h3>
            )}
          </div>
        ):(
          <Loading />
        )}

        <MoviePickerModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} movieId={movieId} 
          setMovieInfo={setMovieInfo} movieInfo={movieInfo}/>
 
      </div>
  );
}