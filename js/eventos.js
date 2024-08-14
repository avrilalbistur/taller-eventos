let div = document.getElementById('div');

div.addEventListener('click', () => {
    alert('Hola! Soy el div');
});

function saludar(event) {
    event.stopPropagation(); // Detiene la propagación del evento hacia el div
    alert('Hola!');
}