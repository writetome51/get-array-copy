To include:

import {getCopy} from '@writetome51/array-get-copy';

getCopy(array): any[]

Returns an identical but independent copy, not linked by reference to original array.

Example:

let arr = [1,2,3,4,5];  
let copy = getCopy(arr);  
// copy is now [1,2,3,4,5]