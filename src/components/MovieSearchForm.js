import { useState } from "react";

export default function MovieSearchForm({movieName,setMovieName}) {

    return(
        <div>
            <form >
                <label htmlFor="search"> <b>Search</b> </label>
                <input name="search" type="text" value={movieName} autocomplete="off" onChange={(event) => setMovieName(event.target.value)} />
            </form>
        </div>
    );
}