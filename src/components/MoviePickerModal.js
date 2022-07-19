import ReactModal from "react-modal";
import { useEffect } from "react";
import { getMovieById } from "./utils";
export default function MoviePickerModal({isModalOpen, setIsModalOpen, movieId, setMovieInfo, movieInfo}) {
    
    useEffect(() => {
        getMovieById(movieId, setMovieInfo);
    }, [movieId]) 

    let closeModal = () => {
        setIsModalOpen(false);
    }

    return(
        <ReactModal isOpen={isModalOpen}>
            <div> 
                <h1> {movieInfo.Title} </h1>
                <p> Genre: {movieInfo.Genre} </p>
                <p> Rating: {movieInfo.imdbRating} </p>
                <p> Plot: {movieInfo.Plot} </p>
                <hr />
                <p> Language: {movieInfo.Language} </p>
                <p> Country: {movieInfo.Country} </p>
                <p> Year: {movieInfo.Year} </p>
                <p> Runtime: {movieInfo.Runtime} </p>
                <hr />
                <p> Director: {movieInfo.Director} </p>
                <p> Actors : {movieInfo.Actors} </p>
                <p> Writers: {movieInfo.Writer} </p>
                

            </div>
            <button onClick={()=> closeModal()}> Close </button>
        </ReactModal>
    )
}