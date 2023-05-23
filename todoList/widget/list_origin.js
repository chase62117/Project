export function createList(id, option) {
    // var el = document.createElement("ul");
    var el = document.createElement("li");
    el.id = id;

    option.columns.forEach(function (column) {
        var control = column.render(column.id, option.data); // column.render -- callback
        el.append(control.el);
    });

    //render(option.datas, option.columns);


    // element, reload function, getValue function
    return {
        el: el,
        // reload: function (datas) {
        //     el.innerHTML = '';
        //     render(datas, option.columns); // createList의 option에 접근가능
        // },
        // getValue: function () {
        //     return el.value;
        // },
    };


    // function render(datas, columns) {
    //     datas.forEach(function (data) {
    //         var liEl = document.createElement("li");
    
    //         columns.forEach(function (column) {
    //             var control = column.render(column.id, data); // column.render -- callback
    //             liEl.append(control.el);
    //         });
    
    //         el.append(liEl); // ul에 list 붙이기
    //     });
    // }
}