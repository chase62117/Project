// 리스트 렌더링

function renderOrders(orders) {
    // orders와 동기화
    var ordersEl = document.getElementById("orders");
    ordersEl.innerHTML = "";
    orders.forEach(function (order){
        var liEl = document.createElement("li");
        liEl.textContent = order.name;
        ordersEl.append(liEl);
    });
}

function renderCookings(cookings) {
    // cookings와 동기화
    var cookingsEl = document.getElementById("cookings");
    cookingsEl.innerHTML = "";
    cookings.forEach(function (cooking){
        var liEl = document.createElement("li");
        liEl.textContent = cooking.name;
        cookingsEl.append(liEl);
    });
}

function renderServings(servings) {
    // servings와 동기화
    var servingsEl = document.getElementById("servings");
    servingsEl.innerHTML = "";
    servings.forEach(function (serving){
        var liEl = document.createElement("li");
        liEl.textContent = serving.name;
        servingsEl.append(liEl);
    });
}