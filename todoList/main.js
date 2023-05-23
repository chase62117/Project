var todolist = [];

renderTodoList();
renderDoneList();

var contentsEl = document.getElementById("todo-contents");
var inputBtnEl = document.getElementById("todo-input");
inputBtnEl.onclick = function () {
    if(!contentsEl.value) {
        alert("할 일을 입력해주세요");
        return;
    }

    todolist.push({
        id: crypto.randomUUID(),
        contents: contentsEl.value,
        done: false,
    })

    renderTodoList();
    contentsEl.value = '';
    contentsEl.focus();
}


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
    var liEl = document.createElement("li");

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
    var delBtn = document.createElement("button");
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