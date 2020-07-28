import { errorIfNotArray } from 'error-if-not-array';
// Returns an identical but independent copy, not linked by reference to original array.
export function getArrayCopy(array) {
    errorIfNotArray(array);
    return [].concat(array);
}
