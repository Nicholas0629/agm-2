
  document.addEventListener("DOMContentLoaded", () => {
    // Select all "Buy Now" buttons
    const buyNowButtons = document.querySelectorAll(".buy-now");

    // Add a click event listener to each button
    buyNowButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Get product details from the product card
        const productCard = button.closest(".product-card");
        const productName = encodeURIComponent(productCard.querySelector(".product-title").textContent);
        const productPrice = encodeURIComponent(productCard.querySelector(".product-price").textContent);

        // Redirect to the checkout page with product details as query parameters
        window.location.href = `checkout.html?product=${productName}&price=${productPrice}`;
      });
    });
  });

