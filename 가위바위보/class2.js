// 변수와 메모리 1

var list = [{ value: 1 }, { value: 2 }];

list.forEach(function (item) {
    // 변환... (아래에 작성)
    item.value2 = ++item.value;
    delete item.value;
});

console.log(list);
// list -> [{ value2: 2 }, { value2: 3 }]