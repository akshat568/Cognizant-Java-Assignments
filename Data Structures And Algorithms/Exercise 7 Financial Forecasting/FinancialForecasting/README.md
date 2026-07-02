# Exercise 7: Financial Forecasting

## 1. What is Recursion?

Recursion is a programming technique in which a method calls itself to solve a problem. It breaks a large problem into smaller subproblems until a base condition is reached. Recursion makes code simpler and easier to understand for problems that can be divided into similar smaller tasks.

---

## 2. Recursive Approach

The program uses a recursive method `futureValue()` to calculate the future value of an investment.

Formula:

Future Value = Current Value × (1 + Growth Rate)^Years

Instead of using loops, the method calls itself until the number of years becomes zero.

---

## 3. Time Complexity

The recursive method makes one recursive call for each year.

Time Complexity: **O(n)**

where **n** is the number of years.

Space Complexity: **O(n)** because each recursive call is stored on the call stack.

---

## 4. Optimization

The recursive solution can be optimized by:
- Using an iterative loop instead of recursion to reduce memory usage.
- Using Dynamic Programming (Memoization) if recursive calculations overlap.
- Using the mathematical formula directly with `Math.pow()`:
  
  Future Value = Current Value × Math.pow(1 + Growth Rate, Years)

This reduces computation and avoids excessive recursive calls.