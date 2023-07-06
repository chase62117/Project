// 중복제거를 위해 객체를 만든다
// - 생성자를 통해 버튼을 만들고, 클릭이벤트 추가
// - body에 버튼 추가하기 -- render 함수 (prototype에 정의)

export class Item {
    _self: Item;
    name: string;
    onClick: (item: Item) => void;
    buttonEl: HTMLButtonElement;

    constructor (name: string, onClick: (item: Item) => void) {
        this._self = this;

        this.name = name;
        this.onClick = onClick;

        this.buttonEl = document.createElement('button');
        this.buttonEl.textContent = this.name;
        this.buttonEl.onclick = function () { // = onClick(_self) 를 하면 함수가 실행됨. 우리는 함수를 등록하기 위한 것이므로 function으로 한번 감싸서 보낸다
            //onClick(this); // 이때 this는 click 이벤트가 발생한 버튼 자체가 this가 된다.
            onClick(this._self); // 우리가 필요한건 Item 객체이므로 this를 따로 저장해서 넘겨줌
        }
    }

    render(parentEl: HTMLDivElement) {
        parentEl.append(this.buttonEl);
    }

    disable(status: boolean) {
        if(status) {
            this.buttonEl.setAttribute("disabled", true);
        } else {
            this.buttonEl.removeAttribute('disabled');
        }
    }
}
