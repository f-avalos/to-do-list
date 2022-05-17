import React, { useState } from 'react'
import TareaFormulario from './TareaFormulario'
import Tarea from './Tarea'
import '../styles/ListaTareas.css'

function ListaTareas () {

    const [tareas, setTareas] = useState([])

    // ! FUNCION QUE VA HACIA TareaFormulario PARA OBTENER OBJETO CON DATOS DEL INPUT
    const agregarTarea = tarea => {
        //tarea como objeto de form
        if(tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim()
            const tareasActualizadas = [tarea, ...tareas]
            setTareas(tareasActualizadas)
        }
    }

    const eliminarTarea = id => {
        //almacena/actualiza tareas con id que sean DISTINTAS al id a evaluar
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
        setTareas(tareasActualizadas)
    }

    const completarTarea = id => {
        //Mapea lista de tareas actual y verifica cual concuerda con la id a evaluar
        const tareasActualizadas = tareas.map(tarea => {
            if (tarea.id === id) {
                //Cambio de estado completado a true o false (su inverso)
                tarea.completada= !tarea.completada
            }
            return tarea
        })
        setTareas(tareasActualizadas)
    }

    return (
        <>
            {/* Componente que manda función agregarTarea para ser utilizada en TareaFormulario.js */}
            <TareaFormulario onSubmit={agregarTarea}/>
            <div className='tareas-lista-contenedor'>
                {
                    tareas.map((tarea) =>
                        <Tarea
                            key={tarea.id}
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            completarTarea={completarTarea}
                            eliminarTarea={eliminarTarea} />
                    )
                }
            </div>
        </>
    )
}

export default ListaTareas