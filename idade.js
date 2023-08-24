// Desenvolva um programa que recebe do usuário nome completo e ano de nascimento
// que seja entre 1922 e 2021. A partir dessas informações, o sistema mostrará o
// nome do usuário e a idade que completou, ou completará, no ano atual(2022).

// Caso o usuário não digite um número ou apareça um inválido no campo do ano,
// o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido

principal()

function principal() {
    var nome = prompt('Informe seu nome: ')
    var anoNascimento = Number(prompt('Informe o ano de seu nascimento: '))

    if ((anoNascimento < 1922) || (anoNascimento > 2021)) {
        window.alert('Sua idade está fora do intervalo permitido')

    } else {
        var idade = CalculaIdade(anoNascimento)
        window.alert(`Seu nome é: ${nome} e sua idade é: ${idade}`)
    }

}

function CalculaIdade(anoNascimento) {
    let dataAtual = new Date()
    let anoAtual = dataAtual.getFullYear()

    let idade = anoAtual - anoNascimento
    return idade
}
