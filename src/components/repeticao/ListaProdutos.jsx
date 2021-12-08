import produtos from '../../data/produtos'

export default props => {

  const produtosTabela = produtos.map((produto) => {
    return (
      <tr>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>R$ {produto.valor}</td>
      </tr>
    )
  })

  return (
    <div>
      <table>
        <tr>
          <td><b>ID</b></td>
          <td><b>Nome</b></td>
          <td><b>Valor</b></td>
        </tr>
        {produtosTabela}
      </table>
    </div>
  )

}