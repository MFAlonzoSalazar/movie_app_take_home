export default function MovieCard(props){
    return (
        <div className="MovieCard" style={{color: "#ae01ae"}}>
            <div className="MovieCard-Title"> {props.title} </div>
            <br />

            {props.poster==="N/A" ? (
                <img className="MovieCard-Poster" src="https://ia.media-imdb.com/images/M/MV5BMTczNjM0NDY0Ml5BMl5BcG5nXkFtZTgwMTk1MzQ2OTE@._V1_.png" 
                alt="imdb has no pic for it" width="150" height="150"/>
            ):(
                <img className="MovieCard-Poster" src={props.poster} alt="imdb has no pic for it" width="150" height="150"/>
            )}
            <br />

            <div className="MovieCard-Year"> {props.year} </div>
        </div>
    );
}