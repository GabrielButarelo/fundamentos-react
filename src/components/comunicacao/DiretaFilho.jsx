export default props => {
  return (
    <div>
      <span>{props.nome} </span>
      <span>{props.idade} </span>
      <span>{props.programa ? 'Verdadeiro' : 'Falso'}</span>
    </div>
  )
}