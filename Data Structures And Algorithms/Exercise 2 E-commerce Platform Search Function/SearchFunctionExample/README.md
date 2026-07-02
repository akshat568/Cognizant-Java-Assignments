# Exercise 3: E-commerce Platform Search Function

## 1. Big O Notation
Big O notation is used to measure the time complexity of an algorithm. It helps us understand how the execution time grows as the input size increases and allows us to compare the efficiency of different algorithms.

## 2. Best, Average and Worst Case

### Linear Search
- Best Case: O(1)
- Average Case: O(n)
- Worst Case: O(n)

### Binary Search
- Best Case: O(1)
- Average Case: O(log n)
- Worst Case: O(log n)

## 3. Time Complexity Comparison

| Algorithm | Best | Average | Worst |
|----------|------|---------|-------|
| Linear Search | O(1) | O(n) | O(n) |
| Binary Search | O(1) | O(log n) | O(log n) |

## 4. Analysis

Linear Search works well for small or unsorted data. Binary Search is much faster for large datasets but requires the array to be sorted. Since an e-commerce platform usually contains thousands of products, Binary Search is more suitable because it provides faster search performance.