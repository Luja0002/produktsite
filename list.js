// const
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const category = urlParams.get("category");
const productList = document.querySelector(".productContainer");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${category}&limit=100`)
  .then((response) => response.json())
  .then((data) => showList(data));

//   funktion

function showList(products) {
  console.log(products);
  const markup = products
    .map(
      (product) => `<div class="box">
          <div class="feature">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="Produktbillede" class="productImage" />
            <p class="subtle">${product.brandname}</p>
            <h3 class="productName">${product.productdisplayname}</h3>
            <div class="productDetails">
              <p class="productPrice">${product.price} DKK</p>
            </div>
            <a href="produkt.html" class="buyButton">Se mere</a>
          </div>
        </div>`
    )
    .join("");
  console.log(markup);
  productList.innerHTML = markup;
}
