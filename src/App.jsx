import './App.css';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';

import Card from './components/layout/Card';

export default _ => 
    <div className="App">
      <h1>Fundamentos React</h1>
      <div className="Cards">
        <Card titulo="#4 - Desafio Aleatório" color="#080">
          <Aleatorio max={100} min={10}/>
        </Card>

        <Card titulo="#3 - Fragmento" color="#008">
          <Fragmento />
        </Card>

        <Card titulo="#2 - Parametro" color="#080">
          <ComParametro titulo="Segundo Componente" aluno="Gabriel" nota={8.5} />
        </Card>

        <Card titulo="#1 - Primeiro" color="#008">
          <Primeiro />
        </Card>
      </div>
    </div>