// 0524
// 비동기

try {
    setTimeout(function() {
      noSuchVariable; // 스크립트는 여기서 죽습니다, 아래 catch 구문이 실행되지 않습니다. -- 비동기로 실행되기 때문에 함수가 실행될때 이미 try-catch문이 끝나기 때문. 에러 처리를 하고 싶다면 함수 내부에서 잡아줘야함
    }, 1000);
  } catch (e) {
    alert( "작동 멈춤" );
  }