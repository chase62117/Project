export function createDiv (id, option) {
    var el = document.createElement("div");
    el.id = id;

    option.parent.append(el);

    return {
        el: el,
        append: function (child){
            el.append(child.el);
        }
    };
}