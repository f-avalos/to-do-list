import React, { useState } from 'react'
import '../styles/TareaFormulario.css'
import { v4 as uuidv4 } from 'uuid'

function TareaFormulario(props) {

    const [input, setInput] = useState('')

    const manejarCambio = e => {
        // Mostrar texto escrito en input
        setInput(e.target.value)
        // console.log(e.target.value)
    }

    //Datos de form mandados a función
    const manejarEnvio = e => {
        e.preventDefault()
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }

        // ! manda objeto a funcion agregarTarea de ListaTareas.js, ya que este componente esta insertado en ese componente padre

        // ! onSubmit() ES LA FUNCIÓN agregarTarea() !!!!
        props.onSubmit(tareaNueva)
    }


    return (
        <form className='tarea-formulario' onSubmit={manejarEnvio}>
            <input 
                className='tarea-input'
                type='text'
                placeholder='Escribe una tarea'
                name='texto'
                onChange={manejarCambio}
            />
            {/* Cuando se presiona boton se mandaran los datos a manejarEnvio() */}
            <button className='tarea-boton'>
                Agregar Tarea
            </button>
        </form>
    )
}

export default TareaFormulario