import { Menu } from "./object/Menu.js";
import { Chef } from "./object/Chef.js";
import { Server } from "./object/Server.js";
import { orderToCooking, cookingToServing, deleteOrder } from "./moveItem.js";
import { renderOrders, renderCookings, renderServings } from "./render.js";
let orders = []; // 주문 목록 관리
let cookings = []; // 요리 목록 관리
let servings = []; // 서빙 목록 관리
let chefs = [new Chef(), new Chef()]; // 두명의 요리사
let servers = [new Server(1000), new Server(2000)]; // 두명의 서버
// 버튼을 누르면 메뉴 생성
const three = document.getElementById("three");
const five = document.getElementById("five");
three.onclick = function () {
    run(new Menu("삼겹살", 1000));
};
five.onclick = function () {
    run(new Menu("오겹살", 2000));
};
// forEach를 돌며 요리사를 찾는 함수
function findReadyChef() {
    let readyChef = null;
    chefs.forEach(function (chef) {
        if (!readyChef && chef.isAvailable()) {
            readyChef = chef;
        }
    });
    return readyChef;
}
function findReadyServer() {
    let readyServer = null;
    servers.forEach(function (server) {
        if (!readyServer && server.isAvailable()) {
            readyServer = server;
        }
    });
    return readyServer;
}
// 주문, 요리, 서빙의 메인 프로세스는 이 함수 안에서 처리 (따로 함수 빼지 말 것)
function run(menu) {
    // 메뉴 버튼을 누르면(run 실행) 주문 목록에 넣어주기
    orders.push(menu);
    renderOrders(orders);
    let chef;
    let server;
    // 대기 중인 요리사 찾기
    function findChef() {
        // 화면이 반응할 수 있도록 여유 시간 주기 -- 버튼이 먹통이 되면 안됨
        return new Promise(function (resolve, reject) {
            let timerId = setInterval(function () {
                chef = findReadyChef();
                if (chef) {
                    clearInterval(timerId);
                    chef.status = "cooking";
                    //resolve(alert("요리사를 찾았습니다"));
                    resolve();
                }
            }, 1000); // 1초마다 실행
        });
    }
    findChef().then(function () {
        // 요리 목록으로 이동
        orderToCooking(menu, orders, cookings);
        renderOrders(orders);
        renderCookings(cookings);
        // 요리사가 찾아지면 요리 시키기 (요리 시간만큼 대기)
        return new Promise(function (resolve) {
            // menu가 가지고 있는 시간 동안 기다리기
            setTimeout(resolve, menu.time);
        });
    }).then(function () {
        // 요리 목록에서 빼고 서빙 목록으로 이동
        cookingToServing(menu, cookings, servings);
        renderCookings(cookings); // 목록 재생성
        renderServings(servings);
        chef.status = "ready"; // 요리사 상태 대기로 바꿔주기
        // 대기 중인 서버 찾기
        return new Promise(function (resolve, reject) {
            let timerId = setInterval(function () {
                server = findReadyServer();
                if (server) {
                    clearInterval(timerId);
                    server.status = "serving";
                    //resolve(alert("서버를 찾았습니다"));
                    resolve();
                }
            }, 1000); // 1초마다 실행
        });
    }).then(function () {
        server.status = "serving"; // 서버 상태 바꾸기
        // 서버가 찾아지면 서빙 (소요 시간만큼 대기)
        return new Promise(function (resolve) {
            // menu가 가지고 있는 시간 동안 기다리기
            setTimeout(resolve, server.time);
        });
    }).then(function () {
        server.status = "ready"; // 서버 상태 바꾸기
        deleteOrder(menu, servings); // 서빙 목록에서 제거
        renderServings(servings); // 목록 렌더링
    });
}
