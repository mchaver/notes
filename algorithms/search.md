# Sorting and Searching

## Tasks

Searching - Binary serach tests whehter an item is in a dictionary in `O(log n)` time if the keys are sorted.

Closest pair - Given a set of `n` numbers, how do you find the pair of numbers that have the smallest difference between them?. `O(n log n)` time including the sorting.

Element uniqueness - Are there any duplicates in a given set of n items? Special case of closest-pair problem, is there a pair separated by a gap of zero. Sorts the number and then does a linear scan thorugh checking all adjacent pairs.

Frequency distribution - Given a set of n items, which element occurs the larget number of times in the set? If items are sorted, can sweep left to right and count them. arbitrary elment k occurs, look up k usin binary search in a sorted array of keys find in `O(log n + c)` time, where c is the number of occurrences of k.

Selection - WHat is the kth largest item in an array? If the keys are sorted, the kth largets cna be found in constant time by simply looking at the kth position.

Convex hulls - what is the polygon of smallest area that contains a given set of n points in two dimensions? Convex hull is like a rubber band stretched over the points. 



Two sets are disjoint (size m and n)
First sort the big set - `O(n log n)` time for sorting. Binary serach with each of the m elments in the second looking to see if it exists in the big set. Total time is `O((n + m) log n)`.

First sort the small set - `O(m log m)` time for sorting. Binary serach with each of the n elements in the big set, looking to see if it exists in the small one. Total time is `O((n + m) log m)`.

Sort both sets - no longer need binary. Compare the smalle elements of the tow sorted sets, discard the smaller one if not identical. `O(n log n + m log m + m + n)`.

BUild a has table for both, collisions are identical.

## Sorting Tasks

- Increasing or decreasing order
- Sorting just the key or an entiner record.
- How to handle equal keys?
- Non-numerical data

### Heapsort: fast sorting via data structures

heap-labeled tree is a binary tree such that the key labeling of each node dominates the key labeling of each of its children

min-heap a node dominates its children by containing a smaller key than they do

max-heap parent node dominate by being bigger

store each key in a node with pointers to its two children. Memory used by the pointers can outweight the size of keys. heap represents binary tress without using any pointers. Store the root of the tree in teh first position of the array and its left and right children in the second and third positions. Store 2^l keys where thh lth level of a complete binary tree from left-to-right in positions 2^(l-1) to 2^(l)-1

```C
typedef struct {
  item_type q[PQ_SIZE+1]; /* body of queue */
  int n;                  /* number of queue elements */
} priority_queue;
```

the left child of k is in 2k, and the right child is in 2k+1, while the parent k is in  `bottom(n/2)`. Move around the tree without pointers. However, if our height h tree was sparese, meaning tha tthe number of nodes `n < 2^h`. All mising internal nodes still take up space in our structure since we must represent a full binary tree to maintain the positional mapping between parents and children. This structure is very inflexible.

binary search does not work on a heap.

heaps can be constructed incrementally by inserting each new element into the left-most open spot in the array. each insertion take at most `O(log n)` time. initial heap of n elements construted in `O(n log n)`


[Heapsort](https://en.wikipedia.org/wiki/Heapsort)
[Heap](https://en.wikipedia.org/wiki/Heap_(data_structure))

[Dynamic Memory Allocation - The Heap (different from heap data structure)](https://en.wikipedia.org/wiki/Memory_management#DYNAMIC)

[Binary heap](https://en.wikipedia.org/wiki/Binary_heap)
[Priority queue](https://en.wikipedia.org/wiki/Priority_queue)


















