function hideCard() {
    var card = document.getElementById('special-card');
    card.style.display = 'none';
}
var centerX = 200; // Posición inicial en X del tulipán
var stemHeight = 0; // Altura inicial del tallo

// Función para dibujar el tulipán con un tallo que crece
function drawTulip() {
    var canvas = document.getElementById('flowerCanvas');
    var ctx = canvas.getContext('2d');
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibuja el tallo verde
    ctx.fillStyle = 'green';
    ctx.fillRect(centerX - 10, canvas.height - stemHeight, 20, stemHeight);

    // Dibuja los pétalos de la flor
    ctx.fillStyle = 'pink'; // Color rosa
    ctx.beginPath();
    ctx.moveTo(centerX, canvas.height - stemHeight);
    ctx.bezierCurveTo(centerX + 100, canvas.height - stemHeight - 100, centerX + 100, canvas.height - stemHeight + 100, centerX, canvas.height - stemHeight + 100);
    ctx.moveTo(centerX, canvas.height - stemHeight);
    ctx.bezierCurveTo(centerX - 100, canvas.height - stemHeight - 100, centerX - 100, canvas.height - stemHeight + 100, centerX, canvas.height - stemHeight + 100);
    ctx.fill();

    // Animación: Hace crecer el tallo desde abajo hasta una altura determinada
    var growthSpeed = 1; // Velocidad de crecimiento del tallo
    if (stemHeight < 300) { // Altura máxima del tallo
        stemHeight += growthSpeed;
    }

    requestAnimationFrame(drawTulip);
}

document.getElementById('special-card').addEventListener('click', function() {
    hideCard(); // Oculta la carta

    // Inicia la animación del tulipán
    drawTulip();

    // Muestra el mensaje especial después de un breve retraso
    setTimeout(function() {
        var message = document.getElementById('message');
        message.style.display = 'block';
    }, 2680); // 500 milisegundos (0.5 segundos) de retraso
});
