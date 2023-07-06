export function renderOrders(orders) {
    // orders와 동기화
    const ordersEl = document.getElementById("orders");
    ordersEl.innerHTML = "";
    orders.forEach(function (order) {
        let liEl = document.createElement("li");
        liEl.textContent = order.name;
        ordersEl.append(liEl);
    });
}
export function renderCookings(cookings) {
    // cookings와 동기화
    const cookingsEl = document.getElementById("cookings");
    cookingsEl.innerHTML = "";
    cookings.forEach(function (cooking) {
        let liEl = document.createElement("li");
        liEl.textContent = cooking.name;
        cookingsEl.append(liEl);
    });
}
export function renderServings(servings) {
    // servings와 동기화
    const servingsEl = document.getElementById("servings");
    servingsEl.innerHTML = "";
    servings.forEach(function (serving) {
        let liEl = document.createElement("li");
        liEl.textContent = serving.name;
        servingsEl.append(liEl);
    });
}
