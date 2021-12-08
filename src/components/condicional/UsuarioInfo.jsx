import {If, Else} from './If'

export default props => {
  const usuario = props.usuario|| {};
  return (
    <div>
      <If condition={usuario && usuario.nome}>
        Seja Bem Vindo  {usuario.nome}!
        <Else>
          Seja Bem Vindo Anônimo!
        </Else>
      </If>
    </div>
  )
}