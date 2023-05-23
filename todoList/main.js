var todolist = [];
var todoListEl;
var doneListEl;

render();

function render() {
    var root = document.getElementById("contents");
    var div = Widget.div("container", { parent: root });

    div.append(Widget.input("todoInput", {}));
    div.append(Widget.button("btnSave", { content: "입력", onClick: onClickSave }));

    todoListEl = Widget.list("todoList", {
        //datas: getSortedTodoList({ done: false }),
        datas: todolist.filter(function(item) {return !item.done}),
        columns: [
            { id: "done", render: renderColumnDone },
            { id: "todo", render: renderColumnTodo },
            { id: "delete", render: renderColumnDelete },
        ],
    });

    doneListEl = Widget.list("todoListDone", {
        //datas: getSortedTodoList({ done: true }),
        datas: todolist.filter(function(item) {return item.done}),
        columns: [
            { id: "done", render: renderColumnDone },
            { id: "todo", render: renderColumnTodo },
            { id: "delete", render: renderColumnDelete },
        ],
    })

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

    todoListEl.reload(todolist.filter(function(item) {return !item.done}));
}


function checkboxOnChange (e) {
    
}

function delBtnOnClick () {

}
