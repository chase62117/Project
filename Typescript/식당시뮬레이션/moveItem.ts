// 배열 이동
import { Menu } from "./object/Menu.js";

export function orderToCooking(menu: Menu, orders: Menu[], cookings: Menu[]) {
    // 주문 -> 요리 이동
    orders.splice(orders.indexOf(menu), 1); // orders에서 제거 -- splice 사용
    cookings.push(menu);
}

export function cookingToServing(menu: Menu, cookings: Menu[], servings: Menu[]) {
    // 요리 -> 서빙 이동
    cookings.splice(cookings.indexOf(menu), 1); // cookings에서 제거 -- splice 사용
    servings.push(menu);
}

export function deleteOrder(menu: Menu, servings: Menu[]) {
    servings.splice(servings.indexOf(menu), 1); // cookings에서 제거 -- splice 사용
}
