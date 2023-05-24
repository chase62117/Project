// 실행 컨텍스트 -- 함수로 묶기

var obj = {
    x: 1,
    add1: function(value){
        return value + this.x;
    },
};

console.log("obj.add1(1) = ", obj.add1(1)); // 2

function a(callback){
    return callback(1); // (2) b(1) 실행
}

// 오류가 나타나지 않게 수정
console.log("a(obj.add1) = ", a(b)); // (1) 새로운 함수 b로 묶어서 호출. a의 callback으로 b를 보냄

function b(value){
    return obj.add1(value); // (3) obj.add1으로 호출했기 때문에 add1 실행시 this가 obj가 된다
}