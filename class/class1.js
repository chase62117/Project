// 자바스크립트 엔진 -- 실행컨텍스트
// https://cat-antlion-144.notion.site/6122f7bdeb1c41e4848ef1694e7cdca0

var x = 10;

var obj = {
    a: function() {
        console.log('a: x =', x); // (3) (2)와 연결
        console.log('a: this.y =', this.y); // obj.a()로 호출했기 때문에 this는 obj가 됨. 선언하면서 y에 20이 저장되었기 때문에 정상적으로 20이 찍힘
        // console.log(value); // 에러 발생 ReferenceError: value is not defined // value를 가지지 않음. 선언 당시 외부 환경이 b가 아닌 전역이었기 때문
        var result = { value: 1 };
        a_sub(); // 선언시 외부환경은 a. 호출시 this가 없으므로 (~~.a_sub이 아님) this는 window가 됨
        return result;

        function a_sub() {
            console.log('a_sub: result =', result); // (4) a 안에 선언된 함수이기에 외부 환경은 a가 된다 따라서 a에 선언된 result{value: 1}에 접근
            console.log('a_sub: this.y =', this.y); // 현재 this는 window. window에 y가 없기 때문에 undefined
            console.log('a_sub: x =', x); // 외부환경 a에서 x를 찾지 못해 a의 외부환경 전역으로 가서 x를 찾음 (10)
        }
    }, 
    y: 20,
};

function b(value) {
    var aResult = obj.a(); // (2) obj가 선언된 곳은 전역이기에 obj.a() 실행시 외부 환경은 전역이 된다. 따라서 x에 접근이 가능함
    return aResult.value + value; // (5) aResult = return result(안에 value 존재)
}

console.log('결과 =', b(1)); // (1)