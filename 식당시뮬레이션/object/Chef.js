export function Chef() {
    this.status = "ready"; // or cooking
}

// 상태 (대기 중인지 요리 중인지) 확인하고, 요리를 시켜야 함
Chef.prototype.isAvailable = function() {
    return this.status === "ready";
};

// 요리 시키기
Chef.prototype.cookAsync = function(menu) { // 비동기적 함수일때 관습적으로 함수명 마지막에 'Async'를 붙여준다
    // to do -- 무엇을 요리해라!
    return new Promise(function(resolve) { // .then 사용
        // menu가 가지고 있는 시간 동안 기다리기
        setTimeout(resolve, menu.time);
    });
};