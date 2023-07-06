// 리스트 렌더링
import { Menu } from "./object/Menu.js";

export function renderOrders(orders: Menu[]) {
    // orders와 동기화
    const ordersEl = document.getElementById("orders") as HTMLUListElement;
    ordersEl.innerHTML = "";
    orders.forEach(function (order: Menu){
        let liEl: HTMLLIElement = document.createElement("li");
        liEl.textContent = order.name;
        ordersEl.append(liEl);
    });
}

export function renderCookings(cookings: Menu[]) {
    // cookings와 동기화
    const cookingsEl = document.getElementById("cookings") as HTMLUListElement;
    cookingsEl.innerHTML = "";
    cookings.forEach(function (cooking: Menu){
        let liEl = document.createElement("li");
        liEl.textContent = cooking.name;
        cookingsEl.append(liEl);
    });
}

export function renderServings(servings: Menu[]) {
    // servings와 동기화
    const servingsEl = document.getElementById("servings") as HTMLUListElement;
    servingsEl.innerHTML = "";
    servings.forEach(function (serving: Menu){
        let liEl = document.createElement("li");
        liEl.textContent = serving.name;
        servingsEl.append(liEl);
    });
}