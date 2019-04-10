"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_not_array_1 = require("error-if-not-array");
var array_get_merged_arrays_1 = require("@writetome51/array-get-merged-arrays");
// Returns an identical but independent copy, not linked by reference to original array.
function getCopy(array) {
    error_if_not_array_1.errorIfNotArray(array);
    return array_get_merged_arrays_1.getMergedArrays([array]);
}
exports.getCopy = getCopy;
