const products = [
  { id: 1, name: "Vegetable Salad", price: 1000.0, image: "image-10.jpg" },
  { id: 2, name: "Vegetable Salad", price: 2000.0, image: "image-9.jpg" },
  { id: 3, name: "Vegetable Salad", price: 1100, image: "image-8.jpg" },
  { id: 4, name: "HamBurger", price: 3000, image: "image-2.jpg" },
  { id: 5, name: "HamBurger", price: 4000, image: "image-12.jpg" },
  { id: 6, name: "HamBurger", price: 2000, image: "image13.jpg" },
  { id: 7, name: "Frenchfries", price: 50, image: "image-15.jpg" },
  { id: 8, name: "Frenchfries", price: 55, image: "image-16.jpg" },
  { id: 9, name: "Strawberry Smoothie", price: 550, image: "image-19.jpg" },
  { id: 10, name: "Chocolate Smoothie", price: 500, image: "image-20.jpg" },
  { id: 11, name: "Sandwich", price: 1400, image: "image-4.jpg" },
  { id: 12, name: "Fried Chicken", price: 1600, image: "image-18.jpg" },
  { id: 13, name: "Cheese Pzza", price: 15000, image: "image-22.jpg" },
  { id: 13, name: "Pepperony Pizza", price: 10000.0, image: "image-24.jpg" },
  {
    id: 14,
    name: "Chicken pepperony pizza",
    price: 20000,
    image: "image-25.jfif",
  },
  { id: 15, name: "Fruit Salad", price: 16000, image: "image-5.jpg" },
  { id: 16, name: "Fruit Salad", price: 20000, image: "image-3.jpg" },
  { id: 17, name: "Fruit Salad", price: 25000, image: "image.jpg" },
  { id: 18, name: "Parfait", price: 30000, image: "image-7.jpg" },
  { id: 19, name: "Parfait", price: 30000, image: "imag-6.jpg" },
  {
    id: 20,
    name: "Fried Chicken with source",
    price: 1650,
    image: "image-17.jpg",
  },
];

const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams);

const productId = urlParams.get("id");
console.log(productId);

// assuming you have a function to retrieve the product details from the array

function getProductDetails(productId) {
  const product = products.find(
    (product) => product.id === parseInt(productId)
  );

  if (product) {
    // display the product details

    const orderinfo = document.getElementById("order-info");

    orderinfo.innerHTML = `<img src=${product.image} alt="" id="order-img"><p id="order-text">${product.name}<br>${product.price}</p>

    `;
  } else {
    // handle the case where the product is not found

    console.error(`Product with ID ${productId} not found`);
  }
}

// call the function to retrieve and display the product details

getProductDetails(productId);
