#Bifunctor

A bifunctor is a functor whose domain is the product category. The product category includes product types of two items (tuples) , and I think it includes sum types of two elements (either). It is a functor in two arguments.

```Haskell
class Bifunctor f where
  bimap :: (a -> c) -> (b -> d) -> f a b -> f c d
```

There are three inputs: a function from `a` to `c` that operates on the `fst` or `Left` element, a function from `b` to `d` that operates on the `snd` or `Right` element, and some type that takes two types (kind `* -> * -> * -> *`). It returns a the same top level type `f` and converts `a` to `c` and `b` to `d`.

###Tuple example

```Haskell
instance Bifunctor (,) where
  bimap g h (a,b) = (,) (g a) (h b)

λ> bimap (+1) (+5) (1,2)
(2,7)
λ> bimap (show) (*10) (1,2)
("1",20)
```

`bimap` on a tuple in Haskell is equivalent to `(***)` from `Control.Arrow`.

###Either example

```Haskell
instance Bifunctor Either where
  bimap g h = either (Left . g) (Right . h)

λ> bimap (show) (/5) (Left 0)
Left "0"
λ> bimap (show) (/5) (Right 5)
Right 1.0
```
