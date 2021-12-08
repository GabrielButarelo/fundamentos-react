import './App.css';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos';
import ListaProdutos from './components/repeticao/ListaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';

import Card from './components/layout/Card';

export default _ => 
    <div className="App">
      <h1>Fundamentos React</h1>
      <div className="Cards">
        <Card titulo="#9 - Comunicação Direta" color="#008">
          <DiretaPai />
        </Card>

        <Card titulo="#8 - Renderização Condicional" color="#080">
          <ParOuImpar numero={20} />
          <UsuarioInfo usuario={{nome: 'Gabriel'}}></UsuarioInfo>
        </Card>

        <Card titulo="#7 - Exercicio Repetição" color="#008">
          <ListaProdutos />
        </Card>

        <Card titulo="#6 - Repetição" color="#080">
          <ListaAlunos />
        </Card>

        <Card titulo="#5 - Componente com Filhos" color="#008">
          <Familia sobrenome="Silva">
            <FamiliaMembro nome="Pedro"/>
            <FamiliaMembro nome="Gabriel"/>
            <FamiliaMembro nome="Paulo"/>
          </Familia>
        </Card>

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