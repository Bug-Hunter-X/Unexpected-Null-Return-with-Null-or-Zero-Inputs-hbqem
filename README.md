# Unexpected Null Return with Null or Zero Inputs

This repository demonstrates a common JavaScript bug involving unexpected null returns when dealing with numeric inputs that may be null or zero.  The `foo` function is intended to add two numbers; however, it incorrectly returns null if either input is null or zero, even though zero is a valid numeric value. This can lead to unexpected behavior in applications where zero should be treated as a valid number. The solution demonstrates a more robust approach to handling null and zero inputs.

## Bug
The original `bug.js` file contains the faulty implementation.  Observe how the function returns null even if one of the inputs is 0 instead of performing the addition.

## Solution
The corrected implementation in `bugSolution.js` uses explicit checks for null and handles zero values correctly. This prevents the unexpected null returns and ensures the function operates as intended.