'use strict';

// Complete this algo
const binarySearch = (array, target) => {
  const mid = Math.floor(array.length / 2);
  if (array.length % 2 !== 0) {
    if (array[mid] === target) {
      return true;
    } else if (array[mid] < target) {
      const right = array.slice(mid + 1);
      return binarySearch(right, target);
    } else if (array[mid] > target){
      const left = array.slice(0, mid);
      return binarySearch(left, target);
    } else {
      return false;
    }
  } else {
    const midLeft = mid - 1;
    const midRight = mid;
    if (array[midLeft] === target || array[midRight] === target) {
      return true;
    } else if (array[midLeft] < target && array[midRight] > target) {
      return false;
    } else if (array[midRight] < target) {
      const right = array.slice(midRight + 1);
      return binarySearch(right, target);
    } else if (array[midLeft] > target){
      const left = array.slice(0, midLeft);
      return binarySearch(left, target);
    } else {
      return false;
    }
  }
};



/*
  EXTRA CREDIT:

  Can you augment the function above to run in constant O(1) space?
  This means, you cannot edit/copy the original array!
  How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
