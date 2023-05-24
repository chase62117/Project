//export function createUl(id, option){

export function createUl(id, option){
    var el = document.createElement("ul");
    el.id = id;
    el.style.listStyle = "none";
    el.style.padding = "0";

    render(option.datas, option.columns);

    return{
        el: el,
        
        reload: function (datas) {
            el.innerHTML = '';
            render(datas, option.columns); // createList의 option에 접근가능
        },
    }

    function render(datas, columns) {
        datas.forEach(function (data) {
            var liEl = Widget.list(id, {
                data: data, 
                columns: columns
            });
    
            el.append(liEl.el); // ul에 list 붙이기
        });
    }
}