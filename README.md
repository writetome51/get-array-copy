# getArrayCopy(array): any[]

Returns an identical but independent copy of `array`, not referencing the original.

## Example
```
let arr = [1,2,3,4,5];  
let copy = getArrayCopy(arr);  
copy.push(10); // copy === [1,2,3,4,5,10]

// But the original hasn't changed:
console.log(arr);
// --> '[1,2,3,4,5]'
```

## Installation
`npm i  @writetome51/get-array-copy`


## Loading
```js
import {getArrayCopy} from '@writetome51/get-array-copy';
```
