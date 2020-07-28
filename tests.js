import {getArrayCopy} from './index.js';


let arr = [1, 2, 3, 4, 5];

// Test 1: make sure copy is not linked by reference to original array:
let copy = getArrayCopy(arr);
copy.length = 2;
if (arr.length === 5 && arr[arr.length - 1] === 5) console.log('test 1 passed');
else console.log('test 1 FAILED');


// Test 2: should trigger error:
let errorTriggered = false;
try {
	getArrayCopy({});
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 2 passed');
else console.log('test 2 FAILED');



// Test 3: should trigger error:
errorTriggered = false;
try {
	getArrayCopy("hello");
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 4: should trigger error:
errorTriggered = false;
try {
	getArrayCopy(0);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 4 passed');
else console.log('test 4 FAILED');



// Test 5: should trigger error:
errorTriggered = false;
try {
	getArrayCopy(true);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 5 passed');
else console.log('test 5 FAILED');
