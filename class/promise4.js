// 0524
// 렌더링

var div = document.createElement("div");
document.body.append(div);
div.style.width = 100;

// 렌더링이 끝난 후 실행
// alert("렌더링이 끝났습니다.") // 이렇게 구현하면 렌더링이 끝마치기 전에 코드가 실행됨.
setTimeout(function () {
	alert("렌더링이 끝났습니다.");
}); // setTimeout을 통해 매크로 태스크에 넣어주면 렌더링 이후에 실행됨. -- setTimeout 파라미터로 시간을 넣지 않는 경우는 일부러 실행 순서를 조정한 것.