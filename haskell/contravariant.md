# Contravariant Functors

## Covariant Functors

Functors let us alter the parametric type in the output. Functors are often declared for container types such as `Maybe`, `Either`, `IO`, etc. Covariant functors are generally called functors.

```Haskell
class Functor f where
  fmap  :: (a -> b) -> f a -> f b

instance Functor (Maybe a) where 
  fmap _ Nothing  = Nothing
  fmap f (Just x) = Just $ f x
  
λ> let x = Just 1 :: (Maybe Int)
λ> x
Just 1

λ> :t x
x :: Maybe Int

λ> (+1) <$> x
Just 2

λ> :t (+1) <$> x
(+1) <$> x :: Maybe Int

λ> :t show <$> x
show <$> x :: Maybe String
```

If we `fmap` a function over `Just 1`, we can maintain or alter the output type of `1`. It is also referred to as a producer of output.


## Contravariant Functors

Contravariant functors are the reverse of Covariant functors. They alter the input of data and do not influence the output. Contravariant functors are described as producers of input. The target of Covariant functors are generally functions that result in some type:

```Haskell
data Predicate a = Predicate { runPredicate :: a -> Bool } 
```

We can make decisions about the value of `a` but we cannot change the fact that it will return `Bool`. 


apply the cmap function first to alter input

```Haskell
class Contravariant f where
  contramap :: (b -> a) -> f a -> f b
```

It takes a function `(b -> a)`, some container `f` with a value `a` and `contramap` changes the contained type `a` to type `b`. In the case of `Predicate`, contramap will return a function that is wrapped in `Predicate` and the new input type is `b`.

```Haskell
instance Contravariant Predicate where
  contramap g (Predicate f) = Predicate (f . g)
 
λ> let divideBy2ThenOdd = contramap (`div` 2) (Predicate odd)
λ> runPredicate divideBy2ThenOdd $ 3
True
λ> runPredicate divideBy2ThenOdd $ 4
False
```

## Category Theory

####Covariant Functor

C and D are categories. A functor F from C to D is a mapping such that:

- associates to each object X in C and object F(X) in D
- associates to each morphism f: X -> Y in C a morphism F(f) : F(X) -> F(Y) in D

####Contravariant Functor

A contravariant functor F from C to D is a mapping such that:

- associates to each object X in C an object F(X) in D
- associates to each morphism f: X -> Y in C a morphism F(f) : F(Y) -> F(X) in D






## References

- [Wikipedia - Functor](https://en.wikipedia.org/wiki/Functor)