const dias = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado']
const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

const form = document.getElementById('form')
form.onsubmit = function (event) {
    event.preventDefault()
    const resultado = form.day.value
    const formatado = resultado.toLowerCase()

    document.getElementById('result2').innerHTML = ''

    const found = dias.find(function (day) {
        return (formatado === day) ? true : false
    })
    const pesquisar = days.find(function (dia) {
        return (formatado === dia) ? true : false
    })

    switch (found) {
        case 'domingo':
            document.getElementById('result').innerHTML = `${dias[0]} é `
            document.getElementById('result2').innerHTML = days[0]
            break;
        case 'segunda':
            document.getElementById('result').innerHTML = `${dias[1]} é `
            document.getElementById('result2').innerHTML = days[1]
            break;
        case 'terça':
            document.getElementById('result').innerHTML = `${dias[2]} é `
            document.getElementById('result2').innerHTML = days[2]
            break;
        case 'quarta':
            document.getElementById('result').innerHTML = `${dias[3]} é `
            document.getElementById('result2').innerHTML = days[3]
            break;
        case 'quinta':
            document.getElementById('result').innerHTML = `${dias[4]} é `
            document.getElementById('result2').innerHTML = days[4]
            break;
        case 'sexta':
            document.getElementById('result').innerHTML = `${dias[5]} é `
            document.getElementById('result2').innerHTML = days[5]
            break;
        case 'sábado':
            document.getElementById('result').innerHTML = `${dias[6]} é `
            document.getElementById('result2').innerHTML = days[6]
            break;
        default:
            document.getElementById('result').innerHTML = 'Palavra não suportada'

    }
    switch (pesquisar) {
        case 'sunday':
            document.getElementById('result').innerHTML = `${days[0]} is `
            document.getElementById('result2').innerHTML = dias[0]
            break;
        case 'monday':
            document.getElementById('result').innerHTML = `${days[1]} is `
            document.getElementById('result2').innerHTML = dias[1]
            break;
        case 'tuesday':
            document.getElementById('result').innerHTML = `${days[2]} is `
            document.getElementById('result2').innerHTML = dias[2]
            break;
        case 'wednesday':
            document.getElementById('result').innerHTML = `${days[3]} is `
            document.getElementById('result2').innerHTML = dias[3]
            break;
        case 'thursday':
            document.getElementById('result').innerHTML = `${days[4]} is `
            document.getElementById('result2').innerHTML = dias[4]
            break;
        case 'friday':
            document.getElementById('result').innerHTML = `${days[5]} is `
            document.getElementById('result2').innerHTML = dias[5]
            break;
        case 'saturday':
            document.getElementById('result').innerHTML = `${days[6]} is `
            document.getElementById('result2').innerHTML = dias[6]
            break;

    }
}




