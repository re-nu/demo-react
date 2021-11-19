import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router';
import { useFormik } from "formik";
import * as yup from "yup";
import { addMethod } from 'yup';

export function AddMovie() {
 // const [name, setname] = useState("");
 // const [poster, setpic] = useState("");
 // const [rating, setrating] = useState("");
 // const [summary, setsummary] = useState("");
 // const [trailer, settrailer] = useState("");
 // const history=useHistory();

  //function addmovie(){
  //  console.log("movie added");
  //  const newMovie = {
  //    name,
  //    poster,
  //    rating,
  //    summary,
  //    trailer,
  //  };
  //  async function add() {
  //    const data=await fetch(
  //      "https://6166c4e513aa1d00170a6713.mockapi.io/movies",
  //      {method:"POST",
  //       body:JSON.stringify(newMovie),
  //       headers:{"Content-Type":"application/json",}
  //    }
  //      );
  //      history.push("/movies");
 //   }
  //  add();
  //};
  const history=useHistory();
   const validform=yup.object({
     name:yup
     .string().min(2),
     poster:yup
     .string()
     .min(2)
   })

   function addM(values) {
    async function add() {
         const data=await fetch(
            "https://6166c4e513aa1d00170a6713.mockapi.io/movies",
            {method:"POST",
             body:JSON.stringify(values),
             headers:{"Content-Type":"application/json",}
          }
            );
            history.push("/movies");
        }
        add();
      };
   

  const {handleSubmit,values,handleChange,handleBlur,errors,touched}=useFormik({
    initialValues:{
      name:" ",
      poster:" ",
      ratting:" ",
      summary:" ",
      trailer:" "
    },
    validationSchema:validform,
    onSubmit:(values)=>{
      console.log("onsubmit",values)
      addM(values);
    }
  })

  return (
    <form onSubmit={handleSubmit} className="addMovie">
          <TextField 
           id="name"
           name="name"
           value={values.name}
           onChange={handleChange}
           onBlur={handleBlur}
           label="Name"
           variant="standard" 
          />
           {errors.name&&touched.name&&errors.name}
         <TextField 
           id="poster"
           name="poster"
           value={values.poster}
           onChange={handleChange}
           onBlur={handleBlur}
           label="Poster" 
           variant="standard" 
          />
          {errors.poster&&touched.poster&&errors.poster}

        <TextField 
           id="ratting"
           name="ratting"
           value={values.ratting}
           onChange={handleChange}
           onBlur={handleBlur}
           label="ratting" 
           variant="standard" 
          />

        <TextField 
           id="summary"
           name="summary"
           value={values.summary}
           onChange={handleChange}
           onBlur={handleBlur}
           label="Summary" 
           variant="standard" 
        />
        <TextField 
          id="trailer"
          name="trailer"
          value={values.trailer}
          onChange={handleChange}
          onBlur={handleBlur} 
          label="trailer"
           variant="standard" 
        />
      <button type="submit">Add movie</button>
    </form>  
  );
}
