import React from 'react'

const FormSelect = (props) => {

  const {name,label,options,key,onChange} = props

  return (
    <div>
      <label >{label}</label>

<select name={name} id={key} onChange={onChange} >
{options.map((option,index)=>
  ( <option value={option}>{option}</option>))}
</select>
    </div>
  )
}

export default FormSelect