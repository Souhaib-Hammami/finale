let totalPrice = 0;

function addToCart(productPrice) {
    totalPrice += productPrice;
    updateTotalPrice();
}

function updateTotalPrice() {
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
}



function functionzero() {
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = "$0";
    console.log("test");

}