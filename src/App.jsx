import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio'

export default _ => 
    <div id="app">
      <h1>Fundamentos React</h1>
      <Aleatorio max={100} min={10}/>
      <Fragmento />
      <ComParametro titulo="Segundo Componente" aluno="Gabriel" nota={8.5} />
      <Primeiro />
    </div>