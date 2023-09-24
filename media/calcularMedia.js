alert(calcularMedia())
function calcularMedia() {
    let nota1 = Number(prompt('Informe primeira nota: '))
    let nota2 = Number(prompt('Informe segunda nota: '))
    let nota3 = Number(prompt('Informe terceira nota: '))

    let media = (nota1 + nota2 + nota3) / 3
    console.log(media)
    return media
}