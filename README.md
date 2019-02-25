# getCopy(array): any[]

Returns an identical but independent copy of `array`, not linked by reference to the original.

## Example
```
let arr = [1,2,3,4,5];  
let copy = getCopy(arr);  
copy.push(10); // copy is now [1,2,3,4,5,10]

// But the original is still the same:
console.log(arr);
// --> '[1,2,3,4,5]'
```
## Installation
`npm i  @writetome51/array-get-copy`


## Loading
```
// if using TypeScript:
import {getCopy} from '@writetome51/array-get-copy';
// if using ES5 JavaScript
var getCopy = require('@writetome51/array-get-copy').getCopy;
```
