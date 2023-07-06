// 배열 이동
function orderToCooking(menu, orders, cookings) {
    // 주문 -> 요리 이동
    orders.splice(orders.indexOf(menu), 1); // orders에서 제거 -- splice 사용
    cookings.push(menu);
}

function cookingToServing(menu, cookings, servings) {
    // 요리 -> 서빙 이동
    cookings.splice(cookings.indexOf(menu), 1); // cookings에서 제거 -- splice 사용
    servings.push(menu);
}

function deleteOrder(menu, servings) {
    servings.splice(servings.indexOf(menu), 1); // cookings에서 제거 -- splice 사용
}