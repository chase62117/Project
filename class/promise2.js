// 0524
// 프라미스로 지연 만들기
// https://ko.javascript.info/promise-basics#ref-396

function delay(ms) {
    return new Promise(function (resolve) {
        // setTimeout(resolve, ms); // 아래와 동일한 작동
        setTimeout(function () {
            resolve();
        }, ms);
    })
}
  
delay(3000).then(function () { alert('3초후 실행') } );

