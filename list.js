const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const category = urlParams.get("category");
const productList = document.querySelector(".productContainer");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${category}&limit=100`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  const markup = products
    .map(
      (product) => `
        <div class="box ${product.discount ? "onSale" : ""} ${product.soldout ? "soldOut" : ""}">
          <div class="feature">
            ${product.discount ? `<div class="sale-banner">SALE</div>` : ""}
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="Produktbillede" class="productImage" />
            <p class="subtle">${product.brandname}</p>
            <h3 class="productName">${product.productdisplayname}</h3>

            <div class="productDetails">
              <p class="productPrice">
                ${
                  product.discount
                    ? `<span class="originalPrice">${product.price} DKK</span> 
                       <span class="discountPrice">${(product.price * (1 - product.discount / 100)).toFixed(2)} DKK</span>
                       <span class="discount-badge list-page">-${product.discount}%</span>`
                    : `${product.price} DKK`
                }
              </p>
            </div>
            <a href="produkt.html?id=${product.id}" class="buyButton">Se mere</a>
          </div>
        </div>`
    )
    .join("");
  console.log(markup);
  productList.innerHTML = markup;
}
