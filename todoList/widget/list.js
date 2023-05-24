//export function createList(id, option) {

export function createList(id, option) {
    // var el = document.createElement("ul");
    var el = document.createElement("li");
    el.id = id;

    option.columns.forEach(function (column) {
        var control = column.render(column.id, option.data); // column.render -- callback
        el.append(control.el);
    });



    // element, reload function, getValue function
    return {
        el: el,
    };
}