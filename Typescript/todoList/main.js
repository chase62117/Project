var todolist = [];

var todoListEl;
var doneListEl;

render();


function render() {
    var root = document.getElementById("contents");
    var div = Widget.div("container", { parent: root });

    div.append(Widget.input("todoInput", {}));
    div.append(Widget.button("btnSave", { content: "입력", onClick: onClickSave }));

    todoListEl = Widget.ul("todoList", {
        datas: filterTodoList({ done: false }),
        columns: [
            { id: "done", render: renderColumnDone },
            { id: "todo", render: renderColumnTodo },
            { id: "delete", render: renderColumnDelete },
        ],
    });

    doneListEl = Widget.ul("todoListDone", {
        datas: filterTodoList({ done: true }),
        columns: [
            { id: "done", render: renderColumnDone },
            { id: "todo", render: renderColumnTodo },
            { id: "delete", render: renderColumnDelete },
        ],
    });

    div.append(todoListEl);
    div.append(doneListEl);
}


function onClickSave() {
    // '입력' 버튼이 눌리면 실행될 action

    // 유효성 검사 (input이 비었는지 확인)
    var value = Widget.getInputValue("todoInput");
    if(!value) {
        alert("할 일을 입력해주세요");
        return;
    }

    // todolist에 push
    todolist.push({
        id: crypto.randomUUID(),
        content: value,
        done: false,
    })

    renderTodoList();
}


function renderColumnDone(id, data) {
    var option = { 
        data: data,
        onChange: function (e) { 
        data.done = e.target.checked;

        renderTodoList();
        renderDoneList();
    }};

    var checkboxEl = Widget.checkbox(id, option);

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
        onClick: function (e) {
            // filter 사용
            // todolist = todolist.filter(function (item2) {
            //     return item2 !== item; // filter를 사용하면 todolist의 저장 위치가 바뀐다. 새로운 배열을 만들어 반환하기 때문에
            // })

            // splice 사용
            todolist.splice(todolist.indexOf(data), 1); // 배열 자체 수정. 주소 유지됨
            data.done ? renderDoneList() : renderTodoList();
        },
    };

    return Widget.button(id, option);
}


function renderTodoList() {
    todoListEl.reload(filterTodoList({ done: false }));
}


function renderDoneList() {
    doneListEl.reload(filterTodoList({ done: true }));
}


function filterTodoList(option){
    return todolist.filter(function(item) {return item.done === option.done})
}