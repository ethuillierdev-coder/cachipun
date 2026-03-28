alert('Juguemos un Cachipún')

let seleccion1 = prompt('Jugador A: Elige 1 para Piedra, 2 para Papel o 3 para Tijera, por favor')
if (seleccion1 !== '1' && seleccion1 !== '2' && seleccion1 !== '3') {
    alert('Opción inválida, debes elegir 1, 2 o 3')
} else {
    let seleccion2 = prompt('Jugador B: Elige 1 para Piedra, 2 para Papel o 3 para Tijera, por favor')
if (seleccion2 !== '1' && seleccion2 !== '2' && seleccion2 !== '3') {
    alert('Opción inválida Jugador B, debes elegir 1, 2 o 3')
} else {
    let resultado = ''
if (seleccion1 === seleccion2) {
    alert('Empate')
}  else if (seleccion1 === '1' && seleccion2 === '2') {
    alert('Felicidades Jugador B, haz ganado!')
}   else if (seleccion1 === '2' && seleccion2 === '1') {
    alert('Felicidades Jugador A, haz ganado!')
} else if (seleccion1 === '3' && seleccion2 === '1') {
    alert('Felicidades Jugador B, haz ganado!')
} else if (seleccion1 === '1' && seleccion2 === '3') {
    alert('Felicidades Jugador A, haz ganado!')
} else if (seleccion1 === '2' && seleccion2 === '3') {
    alert('Felicidades Jugador B, haz ganado!')
} else if (seleccion1 === '3' && seleccion2 === '2') {
    alert('Felicitaciones Jugador A, haz ganado')
} 
console.log('¡Gracias por participar!')
}}