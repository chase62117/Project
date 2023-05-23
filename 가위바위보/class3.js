// 변수와 메모리 2

var list = [1,2,3,4,5];
var list2 = [];
var item;

for (var i = 0; i < list.length; i++) {
    item = list[i];
    list2.push(function () {
        console.log(item);
    })
}

for (var i = 0; i < list2.length; i++) {
    list2[i](); // 5 5 5 5 5 -- item이 전역으로 선언되어있기 때문에 for문을 돌면 item=5가 되고 함수를 호출하면 현재 item의 값이 출력된다
}