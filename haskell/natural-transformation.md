# Natural Transformation

Simple explanation: change a container `f a` into another container `g a`, the inside value does not change. For example: change `[]` to `Maybe`, `Maybe` to `Either`, etc.

Keep this in example in mind:
`map even $ maybeToList $ Just 5` is the same as `maybeToList $ fmap even $ Just 5`.

## Theory

The theory might look confusing but if you follow the examples and match it to the diagram it should make sense.

Assume the following:

- `C, D` are categories.
- `Φ, Ψ: C -> D` are functors.
- `X,Y in Ob(C)`.
- `f in Hom_c(X,Y)`.

`η : Φ -> Ψ` is a natural transformation. It associated to each object of C a morphism of D such that: 

- `forall A in Ob(C) implies η_A in Hom_D(Φ,Ψ)` (`η_A` the component of η at A) 
-  `η_Y ⋅ Φ(f) = Ψ(f) ⋅ η_X`

Commuting Diagram of functors and natural transformations:

```
	      Φ(f)
   Φ(X) -----> Φ(Y)
    |           |
η_X |           | η_Y
    |           |
    ˇ           ˇ 
   Ψ(X) -----> Ψ(Y)
          Ψ(f)
```

## Example

### Functors 

#### Φ(f) : Φ(X) -> Φ(Y)

```Haskell
fmap even :: Maybe Int -> Maybe Bool
Nothing -> Nothing
Just 0  -> Just True
Just 1  -> Just False
```

#### Ψ(f) -> Ψ(X) -> Ψ(Y)

```Haskell
fmap even :: [Int] -> [Bool]
[]  -> []
[0] -> [True]
[1] -> [False]
```

### Natural Transformations

#### η_X: Φ(X) -> Ψ(X)

```Haskell
maybeToList :: Maybe Int -> [Int]
Nothing -> []
Just 0  -> [0]
Just 1  -> [1]
```

#### η_X: Φ(Y) -> Ψ(Y)

```Haskell
maybeToList :: Maybe Bool -> [Bool]
Nothing    -> []
Just True  -> [True]
Just False -> [False]
```

### Commutativity of the diagram

`η_Y ⋅ Φ(f) = Ψ(f) ⋅ η_X`

`Φ(X) = Ψ(Y)`

This give the same results
```Haskell
fmap even maybeToList
maybeToList . fmap even

Nothing -> []
Just 0  -> [True]
Just 1  -> [False]
```

## References

- [Wiki Haskell - Category theory/Natural transformation](https://wiki.haskell.org/Category_theory/Natural_transformation)
