// 변수와 메모리 2 -- 1 2 3 4 5 출력으로 고치기

var list = [1,2,3,4,5];
var list2 = [];
//var item;

for (var i = 0; i < list.length; i++) {
    //item = list[i];
    list2.push(function () {
        var item = list[i]; // item을 내부로 들고 감. 함수가 선언될 당시에 내부 환경에 item이 저장되어 있기 때문에 item을 찍으면 내부환경에서 찾아서 사용
        console.log(item);
    })
}

for (var i = 0; i < list2.length; i++) {
    list2[i](); // 1 2 3 4 5
}