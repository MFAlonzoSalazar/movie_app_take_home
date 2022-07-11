import Loading from "./Loading";
import MovieCard from "./MovieCard";
const movieData = [{
    Title: "The Bad Guys",
    Year: "2022",
    Plot: "After a lifetime of legendary heists, notorious criminals Mr. Wolf, Mr. Snake, Mr. Piranha, Mr. Shark and Ms. Tarantula are finally caught. To avoid a prison sentence, the animal outlaws must pull off their most challenging con yet -- becoming model citizens. ",
    Rating: "⭐⭐⭐⭐"
    
  },
  {
    Title: "Uncharted",
    Year: "2022",
    Plot: "Treasure hunter Victor Sullivan recruits street-smart Nathan Drake to help him recover a 500-year-old lost fortune amassed by explorer Ferdinand Magellan. What starts out as a heist soon becomes a globe-trotting, white-knuckle race to reach the prize before the ruthless Santiago Moncada can get his hands on it.",
    Rating: "⭐⭐⭐"
  },
  { 
    Title: "LightYear",
    Year: "2022",
    Plot: "Legendary space ranger Buzz Lightyear embarks on an intergalactic adventure alongside ambitious recruits Izzy, Mo, Darby, and his robot companion, Sox.",
    Rating: "⭐⭐⭐"
  },
  {
    Title: "Turning Red",
    Year: "2022",
    Plot: "Mei Lee is a 13-year-old girl who is torn between being her mother's obedient daughter and the chaos of her youth. As if that were not enough, when she gets too excited, she turns into a big red panda.",
    Rating:"⭐⭐⭐⭐"
  }
];

export default function Home(){
    return(
        <div className="Home">
          <h1 style={{textDecoration: "underline"}}> MovieQueue </h1>
          <h2> Keep track of what to watch next </h2>
          <div style={{display: "flex", justifyContent:"center"}}>
          { movieData.length > 0 ? ( Math.floor(Math.random()*5) > 2 ? (<Loading />) : (
            movieData.map((movie) => (<MovieCard title = {movie.Title} year={movie.Year} plot= {movie.Plot} rating = {movie.Rating} />)))) : (
            <div> <h3> 0 movies to watch </h3> </div>)
          }
          </div>
        </div>
    );
}