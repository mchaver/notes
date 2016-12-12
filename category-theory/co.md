co- flip the arrows around
`f :: Int -> Bool`
```
class Functor f where
  fmap :: (a -> b) -> f a -> f b
```
implies that f is a type function of kind `* -> *` it takes a type a and outputs a new type

```
a     - f ->     b
|                |
t                |
                 |
t a - fmap f -> t b
```

```
class Functor f => Pointed f where
  pure :: a -> f a -- aka return
```

`fmap (g . f) == fmap g . fmap f`

```
class Category (~>) where
  (.) :: (b ~> c) -> (a ~> b) -> (a ~> c)
  id  :: a ~> a
```


[Flipping arrows in coBurger King](http://blog.ezyang.com/2010/07/flipping-arrows-in-coburger-king/)

[Duality for Haskellers](http://blog.ezyang.com/2012/10/duality-for-haskellers/)