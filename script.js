
function contar() {
    var inicio = parseInt(document.getElementsByClassName('entrada_inicio')[0].value)
    var passo = parseInt(document.getElementsByClassName('entrada_passo')[0].value)
    var fim = parseInt(document.getElementsByClassName('entrada_fim')[0].value)
    var res = document.getElementById('res')
 
    if (isNaN(inicio) || isNaN(passo) || isNaN(fim)) {
        alert('Preencha todos os dados!')
    } else {
        res.innerHTML = 'contando: '

        if (passo == 0){
            alert('No campo "passo" foi digitado "0", será substítuido por "1".')
            passo = 1
        }

        if (inicio < fim) {
            for (inicio; inicio <= fim; inicio += passo) {
                res.innerHTML += `${inicio} \u{1f449} `
            }    
        } else if (inicio == fim) {
            alert('O valor de "fim", na contagem, tem que ser maior ou menor que o valor de "início"')
        } else {
            for (inicio; inicio >= fim; inicio -= passo) {
                res.innerHTML += `${inicio} \u{1f449} `
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}