export default props => {
  const valor = Math.ceil(Math.random() * (props.max - props.min) + props.min);
  return (
    <div>
      <h2>Desafio Aleatório</h2>
      <p>O número é {valor}</p>
    </div>
  )
}