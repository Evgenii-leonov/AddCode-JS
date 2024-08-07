function calculateOrderTotal(products, discount) {
    return products.reduce((total, product) => total + product.price * product.quantity, 0) * (1 - discount);
}

  const order = [
    { name: "Товар 1", price: 20, quantity: 3 },
    { name: "Товар 2", price: 10, quantity: 2 },
  ];

  const total = calculateOrderTotal(order, 0.15);
  console.log(total);