var todolist = [];

renderTodoList();
renderDoneList();

var contentsEl = document.getElementById("todo-contents");

var containerEl = document.getElementById('container');

var inputBtnControl = Widget.button({
    content: '입력',
    onClick: function () {
        if(!contentsEl.value) {
            alert("할 일을 입력해주세요");
            return;
        }
        
        Widget.getControl("todo-input");

        todolist.push({
            id: crypto.randomUUID(),
            contents: inputControl.getValue(),
            done: false,
        })
        todolistControl.reload(todolist);
    
        contentsEl.value = '';
        contentsEl.focus();
    },
});
containerEl.append(inputBtnControl.el);

function renderTodoList() {
    var todolistEl = document.getElementById("todo-list");
    todolistEl.innerHTML = '';

    todolist
        .filter(function(item) {return !item.done})
        .forEach(function(item){
            var itemEl = createTodoItem(item);
            todolistEl.append(itemEl);
        });
}

function renderDoneList() {
    var donelisttEl = document.getElementById("done-list");
    donelisttEl.innerHTML = '';

    todolist
        .filter(function(item) {return item.done})
        .forEach(function(item){
            var itemEl = createTodoItem(item);
            donelisttEl.append(itemEl);
        });
}

function createTodoItem(item) {
    //var liEl = document.createElement("li");
    var todoList = Widget.list({
        datas: todolist.filter(function(item) {return !item.done}),
        columns: [
            { id: "done", render: renderColumnDone },
            { id: "todo", render: renderColumnTodo },
            { id: "delete", render: renderColumnDelete },
        ]
    })

    // checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.done;
    checkbox.onchange = function (e) {
        item.done = e.target.checked;
        renderTodoList();
        renderDoneList();
    }

    // contents
    var contents = document.createElement("span");
    contents.textContent = item.contents;

    // delete button
    var delBtn = Widget.button({
        content: '삭제',
        onClick
    })
    delBtn.textContent = "삭제";
    delBtn.onclick = function () {
        // filter 사용
        // todolist = todolist.filter(function (item2) {
        //     return item2 !== item; // filter를 사용하면 todolist의 저장 위치가 바뀐다. 새로운 배열을 만들어 반환하기 때문에
        // })

        // splice 사용
        todolist.splice(todolist.indexOf(item), 1); // 배열 자체 수정. 주소 유지됨
        item.done ? renderDoneList() : renderTodoList();
    }

    liEl.append(checkbox);
    liEl.append(contents);
    liEl.append(delBtn);

    return liEl;
}