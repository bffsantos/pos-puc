import { useState } from 'react'
import './App.css'
import { AloMundo } from './components/AloMundo';
import { AloMundoColorido } from './components/AloMundoColorido';
import { MeuBotao } from './components/MeuBotao';
import { MeuBotao2 } from './components/MeuBotao2';
import { Contador } from './components/Contador';
import { Contador2 } from './components/Contador2';
import { Relogio } from './components/Relogio';
import { UncontrolledForm } from './components/UncontrolledForm.jsx';
import { ControlledForm } from './components/ControlledForm';

function App() {

  const handleClick = (event) => {
    alert(`Clicou no ${event.currentTarget.id}`);
  };

  return (
    <>
      <AloMundo  />
      <AloMundoColorido nome= "Bruno Santos" cor="red"/>

      <div id='divApp' onClick={handleClick}>
        <MeuBotao />
        <MeuBotao2 />
      </div>

      <div>
        <Contador />
      </div>
      <div>
        <Contador2 />
      </div>
      <div>
        <Relogio />
      </div>
      <div>
        <UncontrolledForm />
        <ControlledForm />
      </div>
    </>
  );
}

export default App
