import {errorIfNotArray} from 'error-if-not-array';


// Returns an identical but independent copy, not referencing the original.

export function getArrayCopy(array) {
	errorIfNotArray(array);
	return [].concat(array);
}
