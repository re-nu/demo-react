import { useFormik } from "formik";
import * as yup from "yup";

//const validform=(values)=>{
//  const error={};
//  console.log("valied",values);
//
//  if(values.password.length<8){
//    error.password="enter long password";
//  }
//  console.log(error);
//  return error;
//}

const validform=yup.object({
  email:yup
  .string()
  .min(5, "email min 5")
  .require,

  password:yup
  .string()
  .min(8,"psw min 6")
  .max(12)
})

export function Form() {
  const {handleSubmit,values,handleChange,handleBlur,errors,touched}=useFormik({
    initialValues:{email:"renu",password:"sdf"},
    //handlesubmit will call validationSchema
    validationSchema:validform,
    //if validform fun has no error only than onsubmit is callled or else not called
    onSubmit:(values)=>{
      console.log("onsubmit",values)
    }
  })
  return (<div>
    <form onSubmit={handleSubmit}>
    <input 
    id="email"
    name="email"
    value={values.email}
    onChange={handleChange}
    onBlur={handleBlur}
    type="email"
    placeholder="name"
    />
     <input 
     id="password"
     name="password"
     value={values.password}
     onChange={handleChange}
     onBlur={handleBlur}
    type="password"
    placeholder="password"
    />
    <button type="submit">submit</button>
    {/*formik.errors.password&&formik.touched.password ? errors.password:" "   same as this  below is the shortcut*/}
    {errors.password&&touched.password&&errors.password}  
    </form>
  </div>
  );
}
