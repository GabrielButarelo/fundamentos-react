import DiretaFilho from "./DiretaFilho"

export default props => {
  return (
    <div>
      <DiretaFilho nome="Gabriel" idade={20} programa={true} />
      <DiretaFilho nome="Maria" idade={18} programa={false} />
    </div>
  )
}