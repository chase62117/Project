// 실행 컨텍스트 -- bind를 통한 해결

var obj = {
    x: 1,
    add1: function(value){
        return value + this.x;
    },
};

console.log("obj.add1(1) = ", obj.add1(1)); // 2

function a(callback){
    return callback(1);
}

// 오류가 나타나지 않게 수정
console.log("a(obj.add1) = ", a(obj.add1.bind(obj))); // bind를 통한 해결