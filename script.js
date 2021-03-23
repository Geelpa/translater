const dias = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado']
const days = ['Monday', 'sunday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']




const form = document.getElementById('form')
form.onsubmit = function(event) {
    event.preventDefault()
    console.log(form.day.value)
    const resultado = form.day.value
    const formatado = resultado.toLowerCase()
    document.getElementById('result2').innerHTML= ''

    const found = dias.find(function(day){
    return ( formatado === day)? true : false
})

switch (found){
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
} 




