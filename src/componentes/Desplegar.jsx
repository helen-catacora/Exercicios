import React from 'react'
import Card from './Card'
import { ejercicios } from '../assets/EjerciciosAPI'

function Desplegar() {
  return (
    <>
    <section className='Organismos'>
        <Card ejercicios = {ejercicios} />
    </section>
    </>
  )
}

export default Desplegar