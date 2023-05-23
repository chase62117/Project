import { createButton } from "./button";
import { createDiv } from "./div";
import { createInput } from "./input";
import { createList } from "./list";
import { createSpan } from "./span";

window.Widget = {
    button: createButton,
    div: createDiv,
    input: createInput,
    list: createList,
    span: createSpan,
    
    getInputValue: function (id) {
        var el = document.getElementById('todoInput');
        var value = el.value
        // 다시 값을 입력받기 위한 준비
        el.value = '';
        el.focus();

        return value;
    },
};