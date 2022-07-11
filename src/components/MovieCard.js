export default function MovieCard(props){
    return (
        <div className="MovieCard" style={{color: "#ae01ae"}}>
            <div className="MovieCard-Title"> <h3>{props.title}</h3> </div>
            <div className="MovieCard-Year"> {props.year} </div>
            <div className="MovieCard-Plot"> <p> {props.plot} </p> </div>
            <div className= "MovieCard-Rating"> {props.rating} </div>
        </div>
    );
}