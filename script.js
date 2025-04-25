// Capturar el evento click en el rectágulo.
document.getElementById("colorines").addEventListener("click", colorAleatorio);


function colorAleatorio() {
    // Obtener el elemento del rectángulo.
    var rectangulo = document.getElementById("colorines");

    // Generar un color aleatorio en formato hexadecimal.
    var colorAleatorio = "#" + Math.floor(Math.random() * 16777215).toString(16);

    // Cambiar el color de fondo del rectángulo al color aleatorio.
    rectangulo.style.backgroundColor = colorAleatorio;

    // Mostrar código de color fondo
    document. getElementById("textoColor").innerHTML = "color: " + colorAleatorio;


}

