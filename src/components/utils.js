const API_KEY = process.env.REACT_APP_MOVIES_API_KEY;
export let getMoviesByName = async(setLoading,movieName,setMovies,setMoviesExist) => {
    setLoading(true);
    console.log(movieName);
    let url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${movieName}&type=movie`;
    const response = await fetch(url);
    const data = await response.json();
    data.totalResults ? (setMoviesExist(true)) : (setMoviesExist(false))
    console.log(data);
    setMovies(data);
    setLoading(false);
  }

  export let getMovieById = async(movieId, setMovieInfo) => {
    console.log(movieId);
    let url = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}&type=movie`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setMovieInfo(data);
  }