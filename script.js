var cotacaoDolar = prompt('Antes de mais nada. Quanto está a cotação do dólar agora?')
if (cotacaoDolar == 0) {
    alert('Por favor, insira a cotação do dolar.')
} else {
    var cotacaoDolarReal = Number(cotacaoDolar)
    if (isNaN(cotacaoDolarReal)) {
        alert('Valor informado inválido.')
    }
}

function converter() {
    if (cotacaoDolar == 0 || (isNaN(cotacaoDolar))) {
        let conteudo = document.getElementById('secao')
        conteudo.innerHTML = `<p class="paragrafo">Valor fornecido incorreto. Atualize a página e tente novamente.</p>`
    } else {
        let reais = prompt('Quantos R$ (reais) você tem na carteira?')
        if (reais == 0) {
        alert('Por favor, insira um valor.')
        } else {
            let reaisReal = Number(reais)
            if (isNaN(reaisReal)) {
            alert('Valor informado inválido.')
            } else {
                let dolares = reaisReal / cotacaoDolarReal

                conteudo = document.getElementById('secao')
                conteudo.innerHTML = `<p class="paragrafos">Você vai conseguir comprar US$ ${dolares.toLocaleString()} dólares.</p>`
            }
        }
    }
}
