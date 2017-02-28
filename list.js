function arrayToList(array) {
    "use strict";
    if (array.length > 1) {
        return {
            value: array.shift(),
            rest: arrayToList(array)
        };
    } else {
        return {
            value: array.shift(),
            rest: null
        };
    }

}
function listToArray(list){
if (list.next == null) {
    return [list.value];
}

return [list.value].concat(listToArray(list.next));


list1 = listToArray(list);
}
console.log(list1);

function prepend(num, list) {
    return {
        value: num,
        next: list
    };
}
console.log(prepend(0, list));

function nth(list, pos) {
    if (list == null) return undefined;
    else {
        if (1 == pos) return list.value;
        return nth(list.next, --pos);
    }
}
console.log(nth(list, 4));
