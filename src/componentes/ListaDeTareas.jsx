import React, {useState} from 'react';
import TareaFormulario from './TareaFormulario';
import '../hojas-de-estilo/ListaDeTareas.css'
import Tarea from './Tarea';

const ListaDeTareas = ()=> {

  const [tareas, setTareas] = useState ([]);

  const agregarTarea = tarea => {
    console.log(tarea)
    if (tarea.texto.trim()) {
      tarea.texto=tarea.texto.trim();
      const tareasActualizadas=[tarea, ...tareas];
      setTareas(tareasActualizadas);
    }

    console.log("tarea agregada")
    console.log(tarea)
  };
  
  const eliminarTarea = id =>{
    const tareasActulizadas = tareas.filter( tarea => tarea.id !== id);
    setTareas(tareasActulizadas);
  };

  const CompletarTarea = id =>{
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = ! tarea.completada;
      }
       return tarea;
    }) ;
    setTareas (tareasActualizadas);
  };

  return (
    <>
     <TareaFormulario onSubmit={agregarTarea} />
      <div className='tareas-lista-contenedor'>
        {
        tareas.map((tarea) =>
          <Tarea
          key={tarea.id}
          id={tarea.id}
          texto= {tarea.texto}
          detail={tarea.detalle}
          completada={tarea.completada}
          completarTarea={CompletarTarea}
          eliminarTarea={eliminarTarea}
          />
        )
      }
      </div>
    </>
  )
};

export default ListaDeTareas;
