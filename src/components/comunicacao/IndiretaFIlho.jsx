export default props => {

    const gerarIdade = () => parseInt(Math.random() * (50 - 70)) + 50;

    return (
        <div>
            <button
                onClick={
                    function (e) {
                        props.quandoClicar('Fernando', gerarIdade(), false)
                    }
                }
            >
                Fornecer Informações
            </button>
        </div>
    )
}