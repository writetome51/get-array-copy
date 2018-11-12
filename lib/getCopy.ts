import { errorIfNotArray } from 'basic-data-handling/errorIfNotArray';
import { getMergedArrays } from '@writetome51/array-get-merged-arrays';


// Returns an identical but independent copy, not linked by reference to original array.

export function getCopy(array): any[] {
	errorIfNotArray(array);
	return getMergedArrays([array]);
}
