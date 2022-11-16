import React from 'react'
import './FromInput.css'

const FormInput = (props) => {
  
  return (
    <div className="input">
      <label htmlFor={props.name}>{props.label}</label>
      <input id={props.key} type={props.type} name={props.name}  placeholder={props.placeholder} onChange={props.onChange} />
      </div>
  )
}

export default FormInput