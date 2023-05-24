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
        //datas: getSortedTodoList({ done: false }),
        datas: todolist.filter(function(item) {return !item.done}),
        columns: [
            { id: "done", render: renderColumnDone },
            { id: "todo", render: renderColumnTodo },
            { id: "delete", render: renderColumnDelete },
        ],
    });

    doneListEl = Widget.ul("todoListDone", {
        //datas: getSortedTodoList({ done: true }),
        datas: todolist.filter(function(item) {return item.done}),
        columns: [
            { id: "done", render: renderColumnDone },
            { id: "todo", render: renderColumnTodo },
            { id: "delete", render: renderColumnDelete },
        ],
    });

    // todoListEl = Widget.ul("todoList");
    // doneListEl = Widget.ul("todoListDone");

    // todolist.filter(function(item) {return !item.done}).forEach(function (item) {
    //     todoListEl.append(Widget.list("list", {
    //         data: item,
    //         columns: [
    //             { id: "done", render: renderColumnDone },
    //             { id: "todo", render: renderColumnTodo },
    //             { id: "delete", render: renderColumnDelete },
    //         ],
    //     }))
    // });

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


function delBtnOnClick (e) {
    //
}


function renderColumnDone(id, data) {
    var option = { 
        data: data,
        onChange: function (e) { 
        data.done = e.target.checked;


        // todoListEl.reload(todolist.filter(function(item) {return !item.done}));
        // doneListEl.reload(todolist.filter(function(item) {return item.done}));
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
            // splice 사용
            todolist.splice(todolist.indexOf(data), 1); // 배열 자체 수정. 주소 유지됨
            data.done ? renderDoneList() : renderTodoList();
        },
    };

    return Widget.button(id, option);
}

function renderTodoList() {
    todoListEl.reload(todolist.filter(function(item) {return !item.done}));
}

function renderDoneList() {
    doneListEl.reload(todolist.filter(function(item) {return item.done}));
}
