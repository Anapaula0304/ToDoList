import React from "react";
import '../hojas-de-estilo/Tarea.css';


function Tarea ({ id, texto, detalle, completada, completarTarea, eliminarTarea}) {
 return (
    <div className={completada ? "tarea-contenedor completada" : "tarea-contenedor" }> 
      <div className="tarea-texto"
        onClick={ () => completarTarea(id)} >
        {texto}
      </div>
      <div className="todo-det">
        {detalle}
      </div>
     <div className="tarea-contenedor-iconos"
       onClick={() => eliminarTarea(id)}
       > delete
      </div>
    </div>
  );
} 

export default Tarea ;