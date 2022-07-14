const API_KEY = process.env.REACT_APP_MOVIES_API_KEY;
export let getMoviesByName = async(setLoading,movieName,setMovies,setMoviesExist) => {
    setLoading(true);
    console.log(movieName);
    let url = `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${movieName}`;
    const response = await fetch(url);
    const data = await response.json();
    data.totalResults ? (setMoviesExist(true)) : (setMoviesExist(false))
    console.log(data);
    setMovies(data);
    setLoading(false);
  }