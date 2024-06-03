import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas.jsx';
import TareaFormulario from './componentes/TareaFormulario.jsx';
/*import  todo-logo from './imagenes/todo-logo.png';*/
/*import Tarea from './componentes/Tarea'
/*import TareaFormulario from './componentes/TareaFormulario.jsx';*/

function App() {
   return (
    <div className='aplicacion-tareas'>
      {/*      <div className='todo-logo-contenedor'>
       <img
        src={todo-logo} 
       className='todo-logo' />
      </div>*/}
      <div className='lista-tareas-principal'>
        <h1> Mis tareas</h1>
       <ListaDeTareas/>
       
      </div>
    </div>
  )
}

export default App;
