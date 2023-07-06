// 중복제거를 위해 객체를 만든다
// - 생성자를 통해 버튼을 만들고, 클릭이벤트 추가
// - body에 버튼 추가하기 -- render 함수 (prototype에 정의)

export function Item (name, onClick) {
    this.name = name;

    // button 생성
    this.buttonEl = document.createElement('button');
    this.buttonEl.textContent = name;

    // click event
    var _self = this;
    this.buttonEl.onclick = function () {
        //onClick(this); // 이때 this는 click 이벤트가 발생한 버튼 자체가 this가 된다.
        onClick(_self); // 우리가 필요한건 Item 객체이므로 this를 따로 저장해서 넘겨줌
    }
}

Item.prototype.render = function (parentEl) {
    parentEl.append(this.buttonEl);
}

Item.prototype.disable = function (status) {
    if (status) {
        this.buttonEl.setAttribute('disabled', true);
    } else {
        this.buttonEl.removeAttribute('disabled');
    }
}