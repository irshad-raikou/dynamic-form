import { useState } from "react";
import FormInput from "./components/FormInput";
import FormSelect from "./components/FormSelect";
import './components/FromInput.css'

function App() {
  const [values, setValues] = useState({
    username:"",
    email:"",
    dob:"",
    password:"",
    cars:""
  })

  const inputFields = [
    {
      name:"username",
      type:"text",
      placeholder:"Username",
      label:"Username",
      tag:"input"
    },
    {
      name:"email",
      type:"email",
      placeholder:"Email",
      label:"Email",
      tag:"input"
    },
    {
      name:"dob",
      type:"date",
      placeholder:"Birthday",
      label:"Birthday",
      tag:"input"
    },
    {
      name:"password",
      type:"password",
      placeholder:"Password",
      label:"Password",
      tag:"input"
    },
    {
      name:"cars",
      label:"Choose a car:",
      options:["volvo","saab","BMW","Audi"],
      tag:"select"
    },
  ]

  
  const handleChange = (e) => {
    setValues((prev) => ({...prev, [e.target.name]:e.target.value}))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values);

  }

  return (
    <form onSubmit={handleSubmit} >
    {
      inputFields.map((field,index)=>(
        <>
       { (field.tag === 'input')?
         ( <FormInput key={index} value={values[field.name]} onChange={handleChange} placeholder={field.placeholder} type={field.type} name={field.name} label={field.label}   />)
        :
         ( <FormSelect key={index} value={values[field.name]} onChange={handleChange} {...field}/>)}
        </>
      ))
    } 
    <button>Submit</button>
    </form>
  );
}

export default App;
