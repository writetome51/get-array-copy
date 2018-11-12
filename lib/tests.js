"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getCopy_1 = require("./getCopy");
var arr = [1, 2, 3, 4, 5];
// Test 1: make sure copy is not linked by reference to original array:
var copy = getCopy_1.getCopy(arr);
copy.length = 2;
if (arr.length === 5)
    console.log('test 1 passed');
else
    console.log('test 1 failed');
// Test 2: should trigger error:
getCopy_1.getCopy({});
