const products = [
  { name: "Vegetable Salad", price: 1000.0, image: "image-10.jpg" },
  { name: "Vegetable Salad", price: 2000.0, image: "image-9.jpg" },
  { name: "Vegetable Salad", price: 1100, image: "image-8.jpg" },
  { name: "HamBurger", price: 3000, image: "image-2.jpg" },
  { name: "HamBurger", price: 4000, image: "image-12.jpg" },
  { name: "HamBurger", price: 2000, image: "image13.jpg" },
  { name: "Frenchfries", price: 50, image: "image-15.jpg"},
  { name: "Frenchfries", price: 55, image: "image-16.jpg"},
  { name: "Strawberry Smoothie", price: 550, image: "image-19.jpg"},
  { name: "Chocolate Smoothie", price: 500, image: "image-20.jpg"},
  { name: "Sandwich", price: 1400, image: "image-4.jpg"},
  { name: "Fried Chicken", price: 1600, image: "image-18.jpg"},
  { name: "Cheese Pzza", price: 15000, image: "image-22.jpg"},
  { name: "Pepperony Pizza", price: 10000.0, image: "image-24.jpg"},
  { name: "Chicken pepperony pizza", price: 20000, image: "image-25.jfif"},
  { name: "Fruit Salad", price: 16000, image: "image-5.jpg"},
  { name: "Fruit Salad", price: 20000, image: "image-3.jpg"},
  { name: "Fruit Salad", price: 25000, image: "image.jpg"},
  { name: "Parfait", price: 30000, image: "image-7.jpg"},
  { name: "Parfait", price: 30000, image: "imag-6.jpg"},
  { name: "Fried Chicken with source", price: 1650, image: "image-17.jpg"},

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
  orderbutton.classList.add("order-btn")
  orderbutton.textContent = "Order";
  itemDiv.appendChild(orderbutton );
});
