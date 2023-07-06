import { createButton } from "./button";
import { createDiv } from "./div";
import { createInput } from "./input";
import { createCheckbox } from "./inputcheckbox";
import { createUl } from "./ul";
import { createList } from "./list";
import { createSpan } from "./span";

window.Widget = {
    button: createButton,
    div: createDiv,
    input: createInput,
    checkbox: createCheckbox,
    ul: createUl,
    list: createList,
    span: createSpan,
    
    getInputValue: function (id) {
        var el = document.getElementById(id);
        var value = el.value;
        
        // 다시 값을 입력받기 위한 준비
        el.value = '';
        el.focus();

        return value;
    },
};