// 실행 컨텍스트 -- 원본

var obj = {
    x: 1,
    add1: function(value){
        return value + this.x;
    },
};

console.log("obj.add1(1) = ", obj.add1(1)); // 2

function a(callback){
    return callback(1); // (2) add1을 호출하며 this를 지정해주지 않았기 때문에 this가 window가 됨
}

// 오류발생
console.log("a(obj.add1) = ", a(obj.add1)); // (1) 실행컨텍스트를 생각해보면 this가 window가 됨