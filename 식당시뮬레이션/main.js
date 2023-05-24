import { Menu } from "./Menu";
import { Chef } from "./Chef";
import { Server } from "./Server";

var orders = []; // 주문 목록 관리
var cookings = []; // 요리 목록 관리
var servings = []; // 서빙 목록 관리

var chefs = [new Chef(), new Chef()]; // 두명의 요리사
var servers = [new Server(1000), new Server(2000)]; // 두명의 서버


// 버튼을 누르면 메뉴 생성
document.getElementById("three").onclick = function () {
    run(new Menu("삼겹살", 1000));
};

document.getElementById("five").onclick = function () {
    run(new Menu("오겹살", 2000));
};


function renderOrders() {
    // orders와 동기화
    var ordersEl = document.getElementById("orders");
    ordersEl.innerHTML = "";
    orders.forEach(function (order){
        var liEl = document.createElement("li");
        liEl.textContent = order.name;
        ordersEl.append(liEl);
    });
}

function renderCookings() {
    // cookings와 동기화
    var cookingsEl = document.getElementById("cookings");
    cookingsEl.innerHTML = "";
    cookings.forEach(function (cooking){
        var liEl = document.createElement("li");
        liEl.textContent = cooking.name;
        cookingsEl.append(liEl);
    });
}

function renderServings() {
    // servings와 동기화
    var servingsEl = document.getElementById("servings");
    servingsEl.innerHTML = "";
    servings.forEach(function (serving){
        var liEl = document.createElement("li");
        liEl.textContent = serving.name;
        servingsEl.append(liEl);
    });
}


// 주문, 요리, 서빙의 메인 프로세스는 이 함수 안에서 처리 (따로 함수 빼지 말 것)
function run(menu) {
    // 메뉴 버튼을 누르면(run 실행) 주문 목록에 넣어주기
    orders.push(menu);
    renderOrders();

    // 대기 중인 요리사 찾기 (요리사가 있을 때까지 대기해야) -- 대기 Promise 사용
    // 화면이 반응할 수 있도록 여유 시간 주기 -- 버튼이 먹통이 되면 안됨
    var chef = findChef(); // -- 비동기 처리니까 이렇게 쓰는거 아님. 일단 대충 이런식으로. 콜백 지옥처럼 되면 안됨. 노션 참고해서 빠지지 말것.

    // 요리사가 찾아지면 요리 시키기 (요리 시간만큼 대기) -- 요리 목록으로 이동
    chef.cookAsync().then(function (menu) {
        // 요리가 끝나면 실행되는 함수 -- 서빙 part

        // 요리 목록에서 빼고 서빙 목록으로 이동
        renderCookings(); // 목록 재생성
        renderServings();
    })

}