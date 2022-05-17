import './App.css';
import Logo from './img/freecodecamp-logo.png'
import ListaTareas from './components/ListaTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo' 
          src={Logo}
          alt='freeCodeCamp Logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;
