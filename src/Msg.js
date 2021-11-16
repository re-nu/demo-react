import { useState,useEffect } from 'react';
import { Count } from './Count';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from 'react-router';


export function Msg({ name, poster, rating, summary, id }) {
  const [showb, setshowb] = useState(false);
  const disply = { display: showb ? "block" : "none" };
  const history=useHistory();

  const [movies,setMovie]=useState([]);

  async function getMovies() {
    const data=await fetch("https://6166c4e513aa1d00170a6713.mockapi.io/movies");
    const mvs= await data.json();
    setMovie(mvs);
  }
  
  async function deleteM() {
    const data=await fetch(
      `https://6166c4e513aa1d00170a6713.mockapi.io/movies/${id}`,
      {method:"DELETE"}
      );
      getMovies();
  }
  

  return (
    <div className="movie">
      <div><img src={poster} alt={name} /></div>
      <div className="info">
        <div>
          <h1> {name} </h1>
        <IconButton 
        onClick={deleteM}
        aria-label="delete" color="secondary">
           <DeleteIcon />
         </IconButton>
         <IconButton aria-label="edit" color="secondary">
           <EditIcon/>
         </IconButton>
         <button onClick={() => setshowb(!showb)}>{showb ? "hide" : "show"} summary</button>
        <p style={disply}>{summary}</p>
        </div>
        <IconButton
        onClick={()=>{
          console.log(id)
          history.push("/movie"+id);
        }}
        aria-label="info" color="error">
           < InfoIcon/>
         </IconButton>
        <p>{rating}</p>
        <Count />
      </div>
    </div>
  );
}
