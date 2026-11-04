function calcular() {
    event.preventDefault()
    let produto = document.getElementById("produto").value
    let valor = Number(document.getElementById("valor").value)
    let desconto = Number(document.getElementById("desconto").value)

    let valor_desc = valor * (desconto / 100)
    let valor_final = valor - valor_desc

    document.getElementById("resultado1").innerHTML = '<b>Produto: <b>' + produto
    document.getElementById("resultado2").textContent = 'Valor: R$ ' + valor
    document.getElementById("resultado3").innerText = 'Desconto: R$ ' + valor_desc
    document.getElementById("resultado4").innerText = 'Valor Final: R$ ' + valor_final
}


function calc_restaurante() {
    event.preventDefault()
    let valor = Number(document.getElementById("valor").value)
    let pessoas = Number(document.getElementById("Pessoa").value)
    let percentual = valor * (10 / 100)
    let valor_atual = valor + percentual
    let conta = valor_atual / pessoas

    document.getElementById("resultado1").innerHTML = 'valor:R$ ' + valor
    document.getElementById("resultado2").innerHTML = '10%: R$' + percentual
    document.getElementById("resultado3").innerHTML = 'valor atual:' + valor_atual
    document.getElementById("resultado4").innerHTML = 'valor por pessoa' + conta.toFixed(2)
}