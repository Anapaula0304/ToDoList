import React, {useState} from 'react';
import { v4 as uuidv4} from 'uuid';
import '../hojas-de-estilo/TareasFormulario.css';


const TareaFormulario = (props) => {

    const [input, setInput] = useState('');
    const [, setDet] = useState('')
   
    const manejarCambio = e =>{
        setInput(e.target.value);
        console.log(e.target.value);

    };

    const detHandler = e => { 
        setDet(e.target.value)
        
      }
    const manejarEnvio = e => {
        e.preventDefault();
        console.log("sending form...")   
       
        const tareaNueva= {
            id: uuidv4(),
            texto: input,
            completada:false,
        }
        props.onSubmit(tareaNueva);
    };
    return (
        <form 
        className='tarea-formulario'
        onSubmit={manejarEnvio}>
            <input
               className='tarea-input'
               type='text'
               placeholder='Escribe tus tareas por hacer'
               name='texto'
               onChange={manejarCambio}
            />
            <input className="todo-input-detalle"
              type='text'
              placeholder='description'
              name='text'
              onChange={detHandler}
      />
            <button className='tarea-boton'>
            Agregar Tarea </button>
        </form>
    );
};

export  default TareaFormulario;


