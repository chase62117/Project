function renderColumnDone(id, data) {
    var option = { onChange: checkboxOnChange };

    var checkboxEl = Widget.input(id, option);
    checkboxEl.el.type = "checkbox";

    return checkboxEl
}

function renderColumnTodo(id, data) {
    var option = {
        id: id, 
        content: data.content,
    };

    return Widget.span(id, option);
}

function renderColumnDelete(id, data){
    var option = {
        id: id, 
        content: '삭제', 
        onClick: delBtnOnClick,
    };

    return Widget.button(id, option);
}

