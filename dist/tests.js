"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var arr = [1, 2, 3, 4, 5];
// Test 1: make sure copy is not linked by reference to original array:
var copy = index_1.getCopy(arr);
copy.length = 2;
if (arr.length === 5)
    console.log('test 1 passed');
else
    console.log('test 1 failed');
// Test 2: should trigger error:
var errorTriggered = false;
try {
    index_1.getCopy({});
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 2 passed');
else
    console.log('test 2 failed');
