/*
Implement a function that flattens a nested array.

flatten([1,[2],[3, [[4]]]]);
=> [1,2,3,4]
*/

function flatten (arr) {
    var storage = [];
    arr.forEach(function (val) {
        if (Array.isArray(val)) {
            storage.concat(flatten(val));
        } else {
            storage.push(val);
        }
    });
    return storage;
}

/* solution 1 */
function flatten (arr, storage) {
    storage = storage || [];
    arr.forEach(function (val) {
        if (Array.isArray(val)) {
          storage.concat(flatten(val, storage));
        } else {
            storage.push(val);
        }
    });
    return storage;
}

flatten([1,2,3]); // [1, 2, 3]
flatten([1,[2],3]); // [1, 2, 3]
flatten([1, [2, 3, [4]], [[5]]]); // [1, 2, 3, 4, 5]

function reduce (arr, cb) {
    // accumulator
}
