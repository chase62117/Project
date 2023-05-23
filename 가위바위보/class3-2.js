// 변수와 메모리 2 -- 1 2 3 4 5 출력으로 고치기

var list = [1,2,3,4,5];
var list2 = [];
//var item;

function getFunc(item){ // 함수로 묶기
    return function() {
      console.log(item); // 함수를 선언할 때 내부 환경에 item 값이 저장되기 때문에 함수 실행시 저장된 item값을 사용한다
    }
}

for (var i = 0; i < list.length; i++) {
    //item = list[i];
    list2.push(function () {
        //console.log(item);
        list2.push(getFunc(item))
    })
}

for (var i = 0; i < list2.length; i++) {
    list2[i](); // 1 2 3 4 5
}
