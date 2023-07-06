export function createButton(id, option) {
    var el = document.createElement("button");
    el.id = id;
    el.textContent = option.content;
    el.onclick = option.onClick; // option에 들어있는 callback 함수 실행

    return {
        // el를 직접적으로 반환하지 않고 래핑해서 보낸다
        // object로 보내기 때문에 사용시 .el로 사용해야 함
        el: el,
    };
}