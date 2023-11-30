import React from 'react'

function Description(props) {
    const ejercicios = props.ejercicios
  return (
    <div>
        <h2>{ejercicios[0].title}</h2>
        <p>{ejercicios[0].repeticion}</p>
    </div>
  )
}

export default Description