var startbtn = document.getElementById('start-button'); // 시작 버튼

var comEl = document.getElementById('com');
var item = ['가위', '바위', '보'];
var currentIndex = 0;

var timerId;

// 시작 버튼 눌렀을 때
startbtn.onclick = function () {
    timerId = setInterval(function () {        
        currentIndex = ++currentIndex % 3; // << item index 출력
        comEl.textContent = item[currentIndex];

    }, 100);
};

var scissorbtn = document.getElementById('scissor');
var rockbtn = document.getElementById('rock');
var paperbtn = document.getElementById('paper');

// 가위, 바위, 보 버튼을 눌렀을 떄
scissorbtn.onclick = function () {
    clearInterval(timerId); // setInterval 함수 멈추기 single thread로 돌기 때문에 이 함수가 실행되는 동안 인터벌이 돌지 않음

    // 띄워주는 가위 바위 보와 비교해서 결과 출력 alert
    if (currentIndex === 0) alert("비겼습니다"); // 가위
    else if (currentIndex === 1) alert("졌습니다"); // 바위
    else alert("이겼습니다"); // 보
}

rockbtn.onclick = function () {
    clearInterval(timerId);

    // 띄워주는 가위 바위 보와 비교해서 결과 출력 alert
    if (currentIndex === 0) alert("이겼습니다"); // 가위
    else if (currentIndex === 1) alert("비겼습니다"); // 바위
    else alert("졌습니다"); // 보
}

paperbtn.onclick = function () {
    clearInterval(timerId);

    // 띄워주는 가위 바위 보와 비교해서 결과 출력 alert
    if (currentIndex === 0) alert("졌습니다"); // 가위
    else if (currentIndex === 1) alert("이겼습니다"); // 바위
    else alert("비겼습니다"); // 보
}
