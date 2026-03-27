let contadorDeProdutos = 0;

let botonesAgregar = document.querySelectorAll('.order-btn');
let mensajeToast = document.getElementById('toast');
let spanContador = document.getElementById('cart-count');

function agregarAlCarrito() {
    contadorDeProdutos = contadorDeProdutos + 1;

    spanContador.textContent = contadorDeProdutos;

    mensajeToast.classList.add('show');

    setTimeout(function() {
        mensajeToast.classList.remove('show');
    }, 3000);
}
for (let i = 0; i < botonesAgregar.length; i++) {
    botonesAgregar[i].addEventListener('click', agregarAlCarrito);
}