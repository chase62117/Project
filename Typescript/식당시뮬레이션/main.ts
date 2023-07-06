import { Menu } from "./object/Menu.js";
import { Chef } from "./object/Chef.js";
import { Server } from "./object/Server.js";
import { orderToCooking, cookingToServing, deleteOrder } from "./moveItem.js";
import { renderOrders, renderCookings, renderServings } from "./render.js";


let orders: Menu[] = []; // 주문 목록 관리
let cookings: Menu[] = []; // 요리 목록 관리
let servings: Menu[] = []; // 서빙 목록 관리

let chefs: Chef[] = [new Chef(), new Chef()]; // 두명의 요리사
let servers: Server[] = [new Server(1000), new Server(2000)]; // 두명의 서버


// 버튼을 누르면 메뉴 생성
const three = document.getElementById("three") as HTMLButtonElement;
const five = document.getElementById("five") as HTMLButtonElement;

three.onclick = function () {
    run(new Menu("삼겹살", 1000));
};

five.onclick = function () {
    run(new Menu("오겹살", 2000));
};


// forEach를 돌며 요리사를 찾는 함수
function findReadyChef(): Chef | null {
    let readyChef: Chef | null = null;
    chefs.forEach(function (chef: Chef) {
        if(!readyChef && chef.isAvailable()) {
            readyChef = chef;
        }
    });
    return readyChef;
}

function findReadyServer(): Server | null {
    let readyServer: Server | null = null;
    servers.forEach(function (server: Server){
        if(!readyServer && server.isAvailable()){
            readyServer = server;
        }
    });
    return readyServer;
} 


// 주문, 요리, 서빙의 메인 프로세스는 이 함수 안에서 처리 (따로 함수 빼지 말 것)
function run(menu: Menu) {
    // 메뉴 버튼을 누르면(run 실행) 주문 목록에 넣어주기
    orders.push(menu);
    renderOrders(orders);
    
    let chef: Chef | null;
    let server: Server | null;

    // 대기 중인 요리사 찾기
    function findChef() {
        // 화면이 반응할 수 있도록 여유 시간 주기 -- 버튼이 먹통이 되면 안됨
        return new Promise(function (resolve, reject) {
            let timerId: number = setInterval(function () {
                chef = findReadyChef();
                if(chef){
                    clearInterval(timerId);
                    chef.status = "cooking";
                    //resolve(alert("요리사를 찾았습니다"));
                    resolve();
                }
            }, 1000); // 1초마다 실행
        });
    }

    
    findChef().then(function () { // 대기 중인 요리사에게 요리 시키기
        // 요리 목록으로 이동
        orderToCooking(menu, orders, cookings);
        renderOrders(orders);
        renderCookings(cookings);

        // 요리사가 찾아지면 요리 시키기 (요리 시간만큼 대기)
        return new Promise(function(resolve) { // .then 사용
            // menu가 가지고 있는 시간 동안 기다리기
            setTimeout(resolve, menu.time);
        });

    }).then(function () { // 요리가 끝나면 실행 -- 대기중인 서버 찾기

        // 요리 목록에서 빼고 서빙 목록으로 이동
        cookingToServing(menu, cookings, servings);
        renderCookings(cookings); // 목록 재생성
        renderServings(servings);

        chef.status = "ready"; // 요리사 상태 대기로 바꿔주기

        // 대기 중인 서버 찾기
        return new Promise(function (resolve, reject) {
            let timerId: number = setInterval(function () {
                server = findReadyServer()
                if(server){
                    clearInterval(timerId);
                    server.status = "serving";
                    //resolve(alert("서버를 찾았습니다"));
                    resolve();
                }
            }, 1000); // 1초마다 실행
        });

    }).then(function () { // 서빙하기
        server.status = "serving"; // 서버 상태 바꾸기

        // 서버가 찾아지면 서빙 (소요 시간만큼 대기)
        return new Promise(function(resolve) { // .then 사용
            // menu가 가지고 있는 시간 동안 기다리기
            setTimeout(resolve, server.time);
        });
        
    }).then(function () {
        server.status = "ready"; // 서버 상태 바꾸기
        
        deleteOrder(menu, servings); // 서빙 목록에서 제거
        renderServings(servings); // 목록 렌더링
    });
}