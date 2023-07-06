import { CircleData } from "./circleData.js";
import { Item } from "./item.js";

var startbtn = document.getElementById('start-button'); // 시작 버튼
var comEl = document.getElementById('com'); // 가위바위보 출력

var items = new CircleData([
    new Item("가위", game),
    new Item("바위", game),
    new Item("보", game)
]);

var currentItem = items.getAll()[0]; // [0]으로 초기화.
var timerId;


// body에 button 추가 (렌더링), disabled 값 설정
var item_buttons = document.getElementById('item_buttons');
items.getAll().forEach(function (item) {
    item.render(item_buttons);
    item.disable(true);
})


// 시작 버튼 눌렀을 때
startbtn.onclick = function () {
    // 버튼 세팅
    startbtn.setAttribute('disabled', true); // 시작 버튼 비활성화

    items.getAll().forEach(function (item) {
        item.disable(false); // 가위, 바위, 보 버튼 활성화
    })

    // action
    timerId = setInterval(function () {
        // 출력(가위 바위 보) 값 변경
        currentItem = items.getNext(currentItem);
        comEl.textContent = currentItem.name;
    }, 100);
};


// 가위, 바위, 보 버튼을 눌렀을 때 호출될 함수 정의
function game(item){
    clearInterval(timerId); // 변환 중지

    // 가위바위보 결과를 알려준다
    var next = items.getNext(item);
    if (item === currentItem) {
        alert("비겼습니다");
    } else if (next === currentItem){
        // 가위 -> 바위 -> 보 -> 가위
        alert("졌습니다");
    } else {
        alert("이겼습니다");
    }

    startbtn.removeAttribute('disabled'); // 시작버튼 활성화
    items.getAll().forEach(function (item) {
        item.disable(true);
    })
}
