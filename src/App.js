import { useState } from 'react'
import Input from './components/Input';
import Boton from './components/Boton';


function App() {
  const [desactivado, setDesactivado] = useState(true);

  return (
    <div className="container">
      <div className='content'>
        <h1>Desafío Estado de los componentes y eventos</h1>
        <Input setDesactivado={setDesactivado}/>
        <Boton desactivado={desactivado}/>
      </div>
    </div>
  );
}

export default App;
