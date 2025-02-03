let productId = 1164;
let productOverview = document.querySelector(".product-container");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productOverview.innerHTML = `
    <div class="product-image">
<img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" 
             alt="${data.productdisplayname}" />
kea-alt-del.dk        </div>

        <div class="product-info">
          <!-- Product Title and Price -->
          <h3 class="productTitle">${data.productdisplayname}</h3>
          <p class="productPrice">${data.price}</p>

          <!-- Form for selecting color and size -->
          <form class="product-form">
            <div class="form-group">
              <select id="color" name="color">
                <option value="black">COLOR</option>
                <option value="white">GREEN</option>
              </select>
            </div>

            <div class="form-group">
              <select id="size" name="size">
                <option value="ss">SELECT SIZE</option>
                <option value="s">SMALL</option>
                <option value="m">MEDIUM</option>
                <option value="l">LARGE</option>
              </select>
            </div>

            <h4 class="greyed-list-title">PRODUCT DETAILS</h4>
            <ul class="greyed-list">
              <li>BRAND: PUMA</li>
              <li>PRODUCTION YEAR: 2025</li>
              <li>COLOR: GREEN</li>
              <li>INVENTORY NUMBER: 1163</li>
            </ul>

            <div class="add-to-cart-knap">
              <a href="product.html" class="add-to-cart">ADD TO CART</a>
            </div>
    `;
  });
