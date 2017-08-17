/*
Bubble SORT

*** Description

Iterate over array, comparing adjacent items and swap if in incorrect order.
Largest elements bubble to the end of the array

*** Exercises

- Implement bubble sort
- Identify time complexity

Optimizations:
- Make algorithm adaptive (if at any point array is already sorted, exit function early). After doing this, what is time complexity for nearly sorted arrays?
- For each pass through the array, are you doing any unnecessary checking of elements? Minimize checking and consider the effect on time complexity.


Adaptability: If the algorithm is almost sorted, an adaptable sorting
algorithm does not need to run a program on each item, because it checks
if two items are already sorted be for doing the sorting logic.

Stability:
*maintaing the original sorted order when some elements have the same value
If we need to sort by different conditions, we store the sorting condition
and compromise common orders for the next condition.
ex: [a={price: 300, weight: 20}, b={price: 300, weight: 15}, c={price: 500, weight 25}]
=> by increasing weight[b, a, c]
=> by decreasing price [c, a, b]
(a and b are the same price so we should maintain the sort by weight)

Variants:
- Implement cocktail sort (for each pass find both min and max values and sort in both directions). How does this impact performance?
(https://en.wikipedia.org/wiki/Cocktail_sort)

*/

function bubbleSort (arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var n = 0; n < arr.length; n++) {
            if (arr[n] > arr[n+1]) {
                var greater = arr[n];
                arr[n] = arr[n+1];
                arr[n+1] = greater;
            }
        }
    }
    return arr;
}
