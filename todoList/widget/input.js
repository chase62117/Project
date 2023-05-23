export function createInput(id, option) {
    var el = document.createElement("input");
    el.id = id;

    if(option.onKeyDown){
        el.onkeydown = option.onKeyDown;
    }

    if(option.onChange){
        el.onchange = option.onChange;
    }
    
    return{
        el: el,
    }
}