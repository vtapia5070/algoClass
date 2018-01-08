/*
QUICK SORT

*** Description

Like merge sort, quick sort employs a divide and conquer strategy.

It has a partitioning step, in which you pick an element (called a pivot) and
partition the array so that all smaller elements come before pivot and all larger
elements come after. The pivot will be in its final position.
Recursively apply this to the subarray of smaller elements and the subarray of
larger elements.

*** Exercises

- Write a partition helper function. For choice of pivot, for a basic implementation,
we recommend choosing either the first or last element in the subarray. If you need
hints, look up the Lumoto partiton scheme. Test this out before moving forward!

- Implement quicksort
- Identify time complexity

- Consider implications for choice of pivot (https://en.wikipedia.org/wiki/Quicksort#Choice_of_pivot)

*** Extra Credit

Variants:
- Implement a multi-pivot quicksort (ex: partition into 3 subarrays using 2 pivots)

*/

function swap (arr, i1, i2) {
    var temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
    return arr;
}

function partition (arr, lo, hi) {
    var pivot = arr[hi];
    var pivotLoc = lo;

    for (var i = lo; i < hi; i++) {
        if (arr[i] < pivot) {
            swap(arr, pivotLoc, i);
            pivotLoc++;
        } else {
            pivotLoc++;
        }
        swap(arr, pivotLoc, hi);
    }
    return pivotLoc;
}

function quickSort (arr, lo, hi) {
    var lo = lo || 0;
    var hi = hi || arr.length-1;

    if (lo < hi) {
        var p = partition(arr, lo, hi)
        quickSort(arr, lo, p-1);
        quickSort(arr, p+1, hi);
    }

    if (hi-lo === arr.length-1) {
        return arr;
    }

}


function quicksort(array, lo, hi) {
  if (lo === undefined) lo = 0;
  if (hi === undefined) hi = array.length-1;

  if (lo < hi) {
    // partition array
    var p = partition(array, lo, hi);
    console.log('partitioning from', lo, 'to', hi, '=> partition:',  p);
    // sort subarrays
    quicksort(array, lo, p-1);
    quicksort(array, p+1, hi);
  }

  // for initial call, return sorted array
  if (hi-lo === array.length-1) return array;
}

// Lomuto partition scheme
function partition(arr, lo, hi) {
  // choose last element as pivot
  var pivot = arr[hi];
  // keep track of index to put pivot at
  var pivotLoc = lo;
  // iterate through subarray and if element <= pivot, place element before pivotLoc
  for (var i=lo; i<hi; i++) {
    if (arr[i] <= pivot) {
      swap(arr, pivotLoc, i);
      pivotLoc++;
    }
  }
  // move pivot to its proper location
  swap(arr, pivotLoc, hi);
  return pivotLoc;
}

function swap (arr, i1, i2) {
  if (i1 === i2) return;
  var temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
  console.log('swapped', arr[i1], arr[i2], 'in', arr);
  return arr;
}
