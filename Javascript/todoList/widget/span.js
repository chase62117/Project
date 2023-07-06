export function createSpan(id, option) {
    var el = document.createElement("span");
    el.id = id;
    el.textContent = option.content;

    return {
        el: el,
    }
}