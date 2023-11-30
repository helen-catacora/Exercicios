import React from 'react'
import "./style.css"

function Description(props) {
    const ejercicios = props.ejercicios
  return (
    <div className='description'>
        <h2>{ejercicios.title}</h2>
        <p>{ejercicios.repeticion}</p>
    </div>
  )
}

export default Description