export function createCheckbox(id, option) {
    var el = document.createElement("input");
    el.id = id;
    el.type = "checkbox";
    el.checked = option.data.done;

    if(option.onChange){
        el.onchange = option.onChange;
    }
    
    return{
        el: el,
    }   
}