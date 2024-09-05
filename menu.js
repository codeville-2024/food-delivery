const products = [
  { id:1, name: "Vegetable Salad", price: 1000.0, image: "image-10.jpg" },
  { id:2, name: "Vegetable Salad", price: 2000.0, image: "image-9.jpg" },
  { id:3, name: "Vegetable Salad", price: 1100, image: "image-8.jpg" },
  { id:4, name: "HamBurger", price: 3000, image: "image-2.jpg" },
  { id:5,  name: "HamBurger", price: 4000, image: "image-12.jpg" },
  { id:6,  name: "HamBurger", price: 2000, image: "image13.jpg" },
  { id:7,  name: "Frenchfries", price: 50, image: "image-15.jpg" },
  { id:8,  name: "Frenchfries", price: 55, image: "image-16.jpg" },
  { id:9,  name: "Strawberry Smoothie", price: 550, image: "image-19.jpg" },
  { id:10,  name: "Chocolate Smoothie", price: 500, image: "image-20.jpg" },
  { id:11,  name: "Sandwich", price: 1400, image: "image-4.jpg" },
  { id:12,  name: "Fried Chicken", price: 1600, image: "image-18.jpg" },
  { id:13,  name: "Cheese Pzza", price: 15000, image: "image-22.jpg" },
  { id:13,  name: "Pepperony Pizza", price: 10000.0, image: "image-24.jpg" },
  { id:14,  name: "Chicken pepperony pizza", price: 20000, image: "image-25.jfif" },
  { id:15,  name: "Fruit Salad", price: 16000, image: "image-5.jpg" },
  { id:16,  name: "Fruit Salad", price: 20000, image: "image-3.jpg" },
  { id:17,  name: "Fruit Salad", price: 25000, image: "image.jpg" },
  { id:18,  name: "Parfait", price: 30000, image: "image-7.jpg" },
  { id:19,  name: "Parfait", price: 30000, image: "imag-6.jpg" },
  { id:20,  name: "Fried Chicken with source", price: 1650, image: "image-17.jpg" },
];
const productList = document.getElementById("productList");

products.forEach((product) => {
  const itemImage = document.createElement("img");
  itemImage.setAttribute("class", "productImage");
  itemImage.src = `${product.image}`;
  const itemDiv = document.createElement("div");
  itemDiv.setAttribute("class", "itemContainer");
  itemDiv.appendChild(itemImage);

  const listItem = document.createElement("p");
  listItem.setAttribute("class", "productText");

  listItem.textContent = `${product.name} - $${product.price}`;
  itemDiv.appendChild(listItem);
  productList.appendChild(itemDiv);
  const orderbutton = document.createElement("button");
  orderbutton.classList.add("order-btn");
  orderbutton.textContent = "Order";
  itemDiv.appendChild(orderbutton);

  let productId = product.id;

  orderbutton.addEventListener("click", () => {
    // redirect to the details page with the product ID as a parameter

    window.location.href = `delivery.html?id=${productId}`;
  });
});
