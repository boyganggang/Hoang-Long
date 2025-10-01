// lay du lieu tu API DummyJson https://dummyjson.com/
const API_URL_ROOT = "https://dummyjson.com/"
// ham render san pham len giao dien ----------------------
function renderProducts (products) {
    const container = document.getElementById("product_list");
container.innerHTML = ""; //xoa code
// chay vong lap de tao tung san pham
// ?kiem tra neu danh sach khac null -> thuc hien
products?.forEach(p => {
    const productHtML = `
    <div class="col">
              <div class="card shadow-sm">
                <img src="${p.thumbnail}" alt="hinh anh san pham" />
                <div class="card-body">
                  <h3 class="card-title">${p.title}</h3>
                  <div class="card-text">
                    <strong class="text-danger">$${p.price}</strong>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <button type="button" data-id="${p.id}" class="btn btn-sm btn-primary">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            `;
            // them san pham vao container
            container.innerHTML += productHtML;
});
}

// ham lay san pham tu Api
function loadProductsFromAPI() {
    fetch(API_URL_ROOT + "products", { method: "GET"})
    .then(Response => Response.json()) //chuyen thanh object
    .then(data => {
        console.log(data);
        //goi ham load san pham len giao dien
        renderProducts(data.products);
    })
    .catch((err) => console.error("Loi API:" , err));
}

// goi ham khi load wed
document.addEventListener('DOMContentLoaded', function() {
    loadProductsFromAPI();
});
