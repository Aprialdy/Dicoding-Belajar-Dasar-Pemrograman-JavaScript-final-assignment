// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}


// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {

    const totalPrice = items.reduce((total, item) => total + item.price, 0);
    const order = {
      id: generateUniqueId(),
      customerName: customerName,
      items: items,
      totalPrice: totalPrice,
      status: 'Menunggu'
    };

    orders.push(order);
    return order;

}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
    const order = orders.find(order => order.id === orderId);
    if (order) {
      order.status = status;
      return order;
    } else {
      return "Order not found.";
    }
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
    return orders
      .filter(order => order.status === "selesai") 
      .reduce((totalRevenue, order) => totalRevenue + order.totalPrice, 0); 
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  const initialLength = orders.length;
  orders = orders.filter(order => order.id !== id); 
  return orders.length < initialLength ? "Order deleted successfully." : "Order not found.";
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
