import { getCopy } from './getCopy';


let arr = [1,2,3,4,5];

// Test 1: make sure copy is not linked by reference to original array:
let copy = getCopy(arr);
copy.length = 2;
if (arr.length === 5) console.log('test 1 passed');
else console.log('test 1 failed');


// Test 2: should trigger error:
let errorTriggered = false;
try{
	getCopy({});
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 2 passed');
else console.log('test 2 failed');
