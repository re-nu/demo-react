import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';

export function MovieDetails() {
  const { id } = useParams();
  //const movie = movies[id];
  const [movie,setMovie]=useState({});

  async function getMovies() {
    const data=await fetch(`https://6166c4e513aa1d00170a6713.mockapi.io/movies/${id}`);
    const mvs= await data.json();
    setMovie(mvs);
  }
  //getMovies();
  useEffect(getMovies,[]);

  return (
    <div>
      <iframe width="100%" height="450" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <h1>{movie.name}</h1>
      <p>{movie.rating}</p>
      <p>{movie.summary}</p>
    </div>
  );
}
