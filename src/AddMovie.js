import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router';

export function AddMovie() {
  const [name, setname] = useState("");
  const [poster, setpic] = useState("");
  const [rating, setrating] = useState("");
  const [summary, setsummary] = useState("");
  const [trailer, settrailer] = useState("");
  const history=useHistory();

  function addmovie(){
    console.log("movie added");
    const newMovie = {
      name,
      poster,
      rating,
      summary,
      trailer,
    };
    async function add() {
      const data=await fetch(
        "https://6166c4e513aa1d00170a6713.mockapi.io/movies",
        {method:"POST",
         body:JSON.stringify(newMovie),
         headers:{"Content-Type":"application/json",}
      }
        );
        history.push("/movies");
    }
    add();
  };
  return (
    <div className="addMovie">
          <TextField 
        onChange={(event) => setname(event.target.value)}
        id="standard-basic"
         label="Name"
          variant="standard" />

         <TextField 
        onChange={(event) => setpic(event.target.value)}
        id="standard-basic" 
        label="Poster" 
        variant="standard" />

        <TextField 
        onChange={(event) => setrating(event.target.value)}
        id="standard-basic" 
        label="ratting" 
        variant="standard" />

        <TextField 
        onChange={(event) => setsummary(event.target.value)}
        id="standard-basic" 
        label="Summary" 
        variant="standard" />
        <TextField 
        onChange={(event) => settrailer(event.target.value)}
        id="standard-basic" label="trailer" variant="standard" />
      <button onClick={addmovie}>Add movie</button>
    </div>
  );
}
