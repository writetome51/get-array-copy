"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotArray_1 = require("basic-data-handling/errorIfNotArray");
var array_get_merged_arrays_1 = require("@writetome51/array-get-merged-arrays");
// Returns an identical but independent copy, not linked by reference to original array.
function getCopy(array) {
    errorIfNotArray_1.errorIfNotArray(array);
    return array_get_merged_arrays_1.getMergedArrays([array]);
}
exports.getCopy = getCopy;
