// 0524
//렉시컬 환경 -- 예제1

function makeCounter() {
    let count = 0; // 함수 내부 변수이기 때문에 외부에서 접근 불가함. 메소드의 필드는 접근 불가 -- 이를 통해 private 효과를 줄 수 있음
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  console.log( counter() ); // 0
  console.log( counter() ); // 1
  
  console.log('------ counter2 -------')
  let counter2 = makeCounter(); // 새로운 환경을 갖고 있는 클로저 함수가 반환됩니다
  console.log( counter2() ); // 0
  console.log( counter2() ); // 1
  
  // 외부에서 count 변수의 존재를 알지 못합니다
  // 이를 통해 클로저로 원하는 값 또는 메서드를 숨길 수 있습니다