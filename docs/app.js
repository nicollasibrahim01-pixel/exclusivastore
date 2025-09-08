// Contador do carrinho
let cartCount = 0;

const cartCountElement = document.getElementById('cart-count');
const buyButtons = document.querySelectorAll('.comprar');

buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartCountElement.textContent = cartCount;
        alert('Produto adicionado ao carrinho!');
    });
});
