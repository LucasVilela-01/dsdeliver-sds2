function StepsHeader() {
    return (
        <header className="orders-steps-container">
                <div className="orders-steps-content">
                    <h1 className="steps-title">
                        SIGA AS <br/> ETAPAS
                    </h1>
                    <ul className="steps-items">
                        <li>
                            <span className="steps-number">1</span>
                            Selecione os produtos e localização.
                        </li>
                        <li>
                        <span className="steps-number">2</span>
                        Depos clique em <strong>"ENVIAR PEDIDO"</strong>
                        </li>
                    </ul>
                </div>
        </header> // Tag criada que se comporta como uma div, mas com objetivo de coloca-la em cabeçalhos
// tag ul - como se fosse um bloco de uma lista
// tag li - representa cada item dessa lista
// tag strong - deixa o texto em negrito
    )
}

export default StepsHeader;