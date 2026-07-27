function saveOrderToFirebase(order) {
  if (!window.db || !window.ref || !window.push) {
    console.log("Firebase not ready");
    return;
  }

  const ordersRef = window.ref(window.db, "orders");

  window.push(ordersRef, order)
    .then(() => {
      console.log("Order Saved");
    })
    .catch((error) => {
      console.log(error);
    });
}

window.saveOrderToFirebase = saveOrderToFirebase;
