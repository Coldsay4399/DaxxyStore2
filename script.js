let cart = [];
let totalPrice = 0;
let cartCount = 0;

const cartItems = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
const cartBtn = document.getElementById('cart-btn');
const checkoutBtn = document.getElementById('checkout');
const closeCartBtn = document.getElementById('close-cart');
const cancelCartModal = document.getElementById('cancel-cart');
const confirmCancelBtn = document.getElementById('confirm-cancel');
const cancelCancelBtn = document.getElementById('cancel-cancel');

// Menambahkan item ke keranjang
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.dataset.product;
        const productPrice = parseInt(button.dataset.price);
        
        // Menambah produk ke keranjang
        cart.push({ productName, productPrice });
        cartCount++;
        updateCart();
    });
});

// Update tampilan keranjang
function updateCart() {
    cartItems.innerHTML = '';
    totalPrice = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.productName} - Rp ${item.productPrice} <span onclick="removeItem(${index})">Hapus</span>`;
        cartItems.appendChild(li);
        totalPrice += item.productPrice;
    });

    totalPriceElement.textContent = totalPrice;
    document.getElementById('cart-count').textContent = cartCount;
}

// Menghapus item dari keranjang
function removeItem(index) {
    cart.splice(index, 1);
    cartCount--;
    updateCart();
}

// Menampilkan keranjang
cartBtn.addEventListener('click', () => {
    document.getElementById('cart').style.display = 'block';
});

// Menutup keranjang
closeCartBtn.addEventListener('click', () => {
    document.getElementById('cart').style.display = 'none';
});

// Checkout
checkoutBtn.addEventListener('click', () => {
    alert("Anda akan diarahkan ke WhatsApp untuk checkout.");
    window