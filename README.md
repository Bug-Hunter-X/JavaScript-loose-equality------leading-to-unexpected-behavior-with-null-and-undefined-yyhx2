# JavaScript Loose Equality Bug

This repository demonstrates a common but subtle bug in JavaScript related to loose equality (==) when dealing with null and undefined values.

## The Bug

The `foo` function intends to return 0 if either `a` or `b` is null or undefined, and the sum of `a` and `b` otherwise. However, due to the use of loose equality, the function produces unexpected results in some cases.  For example, `foo(undefined, 0)` will return 0, even though mathematically it should be undefined.

## The Solution

The solution involves replacing the loose equality check with a strict equality check (===).  Strict equality ensures that the types of the operands are also compared. This eliminates the ambiguity and produces the expected results.

## How to run
1. Clone this repo
2. Open `bug.js` and `bugSolution.js` to view the buggy and corrected code.
3. Open your browser's developer console and run the JavaScript files to observe the output.