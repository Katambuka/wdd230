const buttons = document.querySelectorAll("div");
for (let i = 0; i < buttons.length; i++) {
  addHandler(buttons[i]);
}
function addHandler(button) {
  button.onclick = function (e) {
    let message = e.target.getAttribute("data-message");
    alert(message);
  };
}
document.onkeydown = function (e) {
  if (e.keyCode === 13) {
    // The Enter/Return key
    document.activeElement.onclick(e);
  }
};
const productCatalogSection = document.querySelector(".product-catalog");

fetch("products.json")
  .then((response) => response.json())
  .then((data) => {
    // Create product cards for each item in the catalog
    data.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");

      const productName = document.createElement("h3");
      productName.textContent = product.name;
      productCard.appendChild(productName);

      const productDescription = document.createElement("p");
      productDescription.textContent = product.description;
      productCard.appendChild(productDescription);

      const productPrice = document.createElement("p");
      productPrice.textContent = `Price: ${product.price}`;
      productCard.appendChild(productPrice);

      const addToCartButton = document.createElement("button");
      addToCartButton.textContent = "Add to cart";
      addToCartButton.addEventListener("click", () => {
        // Add item to cart
        // ...
      });
      productCard.appendChild(addToCartButton);

      productCatalogSection.appendChild(productCard);
    });
  })
  .catch((error) => console.error(error));
