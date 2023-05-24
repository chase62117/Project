// 0524
// 프라미스

let promise = new Promise(function(resolve, reject) {
    // 프라미스가 만들어지면 executor 함수는 자동으로 바로 실행됩니다.
  
    // 실행할 action을 끝낸 후에 resolve 실행. 아래는 setTimeout을 실행한 것
    
    // 1초 뒤에 일이 성공적으로 끝났다는 신호가 전달되면서 result는 '완료'가 됩니다.
    setTimeout(() => resolve("완료"), 1000);
  });
  
  promise
      .then(function (result) { // promise를 받아서 executor 함수가 끝난뒤 이어서 실행됨.
          alert(result);
          
          // then 내부에서 프라미스 객체를 return 하게 되면 실행이 끝나고 다음 then으로 이어지는게 아니라 return으로 보낸 프라미스가 실행이 완료될때까지 기다렸다가 다음 then이 실행됨
      })
      .catch(function (error) {
          // promise에서 reject가 실행되면 실행이 끝나고 then으로 이어지는게 아닌 catch로 이어짐
      })
      .finally(function () {
          // finally는 어떤 함수(resolve / reject)가 실행되었는지 상관없이 무조건 마지막에 실행됨.
      })