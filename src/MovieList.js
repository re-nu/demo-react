import { Msg } from './Msg';
import { useState,useEffect } from 'react';

export function MovieList() {
  const [movies,setMovie]=useState([]);
  async function getMovies() {
    const data=await fetch("https://6166c4e513aa1d00170a6713.mockapi.io/movies");
    const mvs= await data.json();
    setMovie(mvs);
    console.log(mvs);
    console.log("movies",movies);
  }
  //getMovies();
  useEffect(getMovies,[]);
  return (
    <div className="movielist">
      {movies.map(({ name, poster, rating, summary,id }) => (
        <Msg name={name} poster={poster} rating={rating} summary={summary} id={id} />
      ))}
    </div>
  );
}
