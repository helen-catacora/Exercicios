import React from 'react'
import Card from './Card'
import { ejercicios } from '../assets/EjerciciosAPI'
import "./style.css"

function Desplegar() {
  return (
    <>
    <section className='Organismos'>
        {
            ejercicios.map(ejercicio=>{
                return(
                    <Card ejercicios={ejercicio}/>
                )
            })
        }
        
    </section>
    </>
  )
}

export default Desplegar