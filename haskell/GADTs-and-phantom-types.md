# Generalized Algebraic Data Types

The GADTs extension `{-# LANGUAGE GADTs #-}` allows you to explicitly write down the types of the constructor. Here is a simple DSL with a traditional data type definition:

```Haskell
data Expr = I Int
          | Add Expr Expr
          | Mul Expr Expr

eval :: Expr -> Int
eval (I n)       = n
eval (Add e1 e2) = eval e1 + eval e2
eval (Mul e1 e2) = eval e1 * eval e2

eval $ (I 5 `Add` I 1) `Mul` I 7 :: Expr -- (5 + 1) * 7
```

Now extend the `Expr` type to include two new constructors and try to extend the `eval` function:

```Haskell
data Expr = I Int
          | B Bool
          | Add Expr Expr
          | Mul Expr Expr
          | Eq  Expr Expr

eval :: Expr -> Either Int Bool
eval (I n)       = Left n
eval (B b)       = Right b
-- the rest doesn't type check
eval (Add e1 e2) = eval e1 + eval e2   -- Int
eval (Mul e1 e2) = eval e1 * eval e2   -- Int
eval (Eq e1 e2)  = eval e1 = eval e2   -- Bool
```

It is possible to do `eval Expr -> Maybe (Either Int Bool)`, but unpleasent.

## Phantom Types

A phantom type is a dummy variable that can be used to help type check a data type but is not actually used as a value.

```Haskell
data Expr a = I Int
            | B Bool
            | Add (Expr a) (Expr a)
            | Mul (Expr a) (Expr a)
            | Eq  (Expr a) (Expr a)
```

`a` is a dummy variable (phantom type). Use `a` to track the type of the expression in smart constructors.

```Haskell
add :: Expr Int -> Expr Int -> Expr Int
add = Add

i :: Int -> Expr Int
i = I

b :: Bool -> Expr Bool
b = B

eval :: Expr a -> a
eval (I n) = n

-- this doesn't type check either
```

## GADTs

The goal of GADTs is to restrict the return type of the constructors.

```Haskell
{-# LANGUAGE GADTs #-}
data Expr a where
  I   :: Int -> Expr Int
  B   :: Bool -> Expr Bool
  Add :: Expr Int -> Expr Int -> Expr Int
  Mul :: Expr Int -> Expr Int -> Expr Int
  Eq  :: Expr Int -> Expr Int -> Expr Bool
```

List the type signatures of all the constructors. `a` is specialized to `Int` or `Bool`

```Haskell
eval :: Expr a -> a
eval (I n) = n -- a=Int
eval (B b) = b -- a=Bool
eval (Add e1 e2) = eval e1 + eval e2  -- a=Int
eval (Mul e1 e2) = eval e1 * eval e2  -- a=Int
eval (Eq  e1 e2) = eval e1 == eval e2 -- a=Bool
```

GADTs allows us to restrict the return types of constructors.

```Haskell
-- there is no restriction on the return type
data FakeGadtMaybe a where
  FakeGadtNothing :: FakeGadtMaybe a
  FakeGadtJust    :: a -> FakeGadtMaybe a

-- the return type is restricted, and they can be different for each constructor
data TrueGadtMaybe a where
  TrueGadtNothing :: FakeGadtMaybe Bool
  TrueGadtJust    :: a -> FakeGadtMaybe Int

```

Syntax review for common data types:

```Haskell
data Maybe a = Nothing | Just a

data Maybe a where
  Nothing :: Maybe a
  Just    :: a -> Maybe a


data List a = Nil | Cons a (List a)

data List a where
  Nil  :: List a
  Cons :: a -> List a -> List a


data RoseTree a = RoseTree a [RoseTree a]

data RoseTree a where 
  RoseTree :: a ->  [RoseTree a] -> RoseTree a
```

## Another Phantom Types Example
```
-- Peano numbers at the type level.
data Zero = Zero
data Succ a = Succ a
-- Example: 3 can be modeled as the type
-- Succ (Succ (Succ Zero)))

type D2 = Succ (Succ Zero)
type D3 = Succ (Succ (Succ Zero))

data Vector n a = Vector [a] deriving (Eq, Show)

vector2d :: Vector D2 Int
vector2d = Vector [1,2]

vector3d :: Vector D3 Int
vector3d = Vector [1,2,3]

vector2d == vector3d -- cause compiler error because they are different types. You cannot compare them
```

## References

[Wikibooks - Haskell/GADT](https://en.wikibooks.org/wiki/Haskell/GADT)
[Wikibooks - Phantom Types](https://en.wikibooks.org/wiki/Haskell/Phantom_types)