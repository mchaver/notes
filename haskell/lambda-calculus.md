# Lambda Calculus

## Reduction

- α-conversion: change bound variables.
- β-reduction: apply functions to their arguments.
- η-conversion: capture a notion of extensionality.


### Alpha-Conversion (α-conversion)
The renaming of bound variables. Rename the bound variables in this function `\x y -> 2 * x * x + y` to `\a b -> 2 * a * a + b`, but it remains the same function. The challenge is avoiding name capture, for example, if we rename `x` to `y` in `\x -> x + y` then it will be `\y -> y + y` which is not the same function. `\x -> \x -> x` could result in `\y -> \x -> x` but not in `\y -> \x -> y`, since the latter is a different function. 

Terms that differ only by alpha-conversion are alpha-equivalent. In De Brujin index notation, any two alpha-equivalent terms are identical.

### Beta-Reduction (β-reduction)

The process of calculating a result from the application of a function to an expression. Apply the function `(\x -> 2 * x * x + y)` to the value `7`, substitute `7` for every `x`, we get `2 * 7 * 7 + y`. Further reductions can be applied because lambdas exist in the `(*)` operator.

### Eta-Conversion (η-conversion)

The adding or dropping of abstraction over a function. These two function are equivalent under eta-conversion: `\x -> abs x` and `abs`. Converting from the first to the second is eta-reduction.  Converting from the second to the first is eta-abstraction. Extensive use of eta-reduction leads to Pointfree programming.

Two functions are the same if and only if they give the same results for all arguments.

### Beta normal form

A term is in beta normal form is no beta reduction is possible. A term is beta-eta normal form if neither beta nor eta reduction is possible. In abstract rewriting, normal form means it cannot be rewritten any further.

## References

[Haskell Wiki - Lambda Calculus](https://wiki.haskell.org/Lambda_calculus)

[Wikipedia - Lambda Caculus](https://en.wikipedia.org/wiki/Lambda_calculus)