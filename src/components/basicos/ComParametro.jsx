export default function ComParametro(props) {
  const status = props.nota >= 5 ? 'Aprovado' : 'Reprovado';
  const arredondado = Math.ceil(props.nota)
  return (
    <div>
      <h2>{props.titulo}</h2>
      <h3>{props.aluno} tem nota {arredondado} e foi {status}</h3>
    </div>
  )
}