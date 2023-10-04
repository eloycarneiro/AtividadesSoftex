
function realizarOperacao(){
    const operacoes = document.getElementById("operacao")
    const valor1 = document.getElementById("valor1")
    const valor2 = document.getElementById("valor2")
    let opEscolhida = operacoes.options[operacoes.selectedIndex].text
    
    switch (opEscolhida) {
        case '+':
            somar(valor1.value, valor2.value)
            break
        case '-':
            subtrair(valor1.value, valor2.value)
            break
        case '*':
            multiplicar(valor1.value, valor2.value)
            break
        case '/':
            dividir(valor1.value, valor2.value)
            break
        case '%':
            sobrar(valor1.value, valor2.value)
            break
        default:
            break;
    }

}

function somar(val1, val2) {
    let soma = resultado.innerHTML = Number(val1) + Number(val2)
}

function subtrair(val1, val2) {
    let diferenca = resultado.innerHTML = Number(val1) - Number(val2)
}

function multiplicar(val1, val2) {
    let produto = resultado.innerHTML = Number(val1) * Number(val2)
}

function dividir(val1, val2) {
    let quociente = resultado.innerHTML = Number(val1) / Number(val2) 
}

function sobrar(val1, val2) {
    let resto = resultado.innerHTML = Number(val1) % Number(val2) 
}