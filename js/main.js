function desplegar(respuestaFinal) {
    const elemento = document.getElementById(respuestaFinal)
    // console.log(elemento)
    // elemento.style.display = 'block' 
    console.log(elemento.style.display)

    if (elemento.style.display == '' || elemento.style.display == 'none') {
        elemento.style.display = 'block'
    } else {
        elemento.style.display = 'none' 
    }
}