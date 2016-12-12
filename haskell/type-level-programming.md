# Type Level Programming

## GADT (Generic Algebraic Data Types)

[Haskell/GADT](https://en.wikibooks.org/wiki/Haskell/GADT)

Allow you to explicitly write down the types of the constructor. Start with the traditional data type definition

```Haskell
data Expr = I Int
          | Add Expr Expr
          | Add Expr Expr

eval :: Expr -> Int
eval (I n)       = n
eval (Add e1 e2) = eval e1 + eval e2
eval (Mul e1 e2) = eval e1 * eval e2

eval $ (I 5 `Add` I 1) `Mul` I 7 :: Expr -- (5 + 1) * 7
```

Extend `Expr` type

```
data Expr = I Int
          | B Bool
          | Add Expr Expr
          | Mul Expr Expr
          | Eq  Expr Expr
```

```
eval :: Expr -> Either Int Bool
eval (I n)       = Left n
eval (B b)       = Right b
-- the rest doesn't type check
eval (Add e1 e2) = eval e1 + eval e2
eval (Mul e1 e2) = eval e1 * eval e2
eval (Eq e1 e2)  = eval e1 = eval e2
```

It is possible to do `eval Expr -> Maybe (Either Int Bool)`, but unpleasent.

### Phantom Types

```
data Expr a = I Int
            | B Bool
            | Add (Expr a) (Expr a)
            | Mul (Expr a) (Expr a)
            | Eq  (Expr a) (Expr a)
```

`a` is a dummy variable (phantom type). Use `a` to track the type of the expression in smart constructors.

```
add :: Expr Int -> Expr Int -> Expr Int
add = Add

i :: Int -> Expr Int
i = I

b :: Bool -> Expr Bool
b = B

eval :: Expr a -> a
eval (I n) = n
```

### GADT - Restrict Return Type of the Constructors

```
{-# LANGUAGE GADTs #-}
data Expr a where
  I   :: Int -> Expr Int
  B   :: Bool -> Expr Bool
  Add :: Expr Int -> Expr Int -> Expr Int
  Mul :: Expr Int -> Expr Int -> Expr Int
  Eq  :: Expr Int -> Expr Int -> Expr Bool
```

List the type signatures of all the constructors. `a` is specialized to `Int` or `Bool`

```
eval :: Expr a -> a
eval (I n) = n -- a=Int
eval (B b) = b -- a=Bool
eval (Add e1 e2) = eval e1 + eval e2  -- a=Int
eval (Mul e1 e2) = eval e1 * eval e2  -- a=Int
eval (Eq  e1 e2) = eval e1 == eval e2 -- a=Bool
```

GADTs allows us to restrict the return types of constructors.

```
-- there is no restriction on the return type
data FakeGadtMaybe a where
  FakeGadtNothing :: FakeGadtMaybe a
  FakeGadtJust    :: a -> FakeGadtMaybe a

-- the return type is restricted, and they can be different for each constructor
data TrueGadtMaybe a where
  TrueGadtNothing :: FakeGadtMaybe Bool
  TrueGadtJust    :: a -> FakeGadtMaybe Int

```

## Type Families

[GHC/Type families](https://wiki.haskell.org/GHC/Type_families)
(Indexed type families)
data families
type synonym families
overloaded functions

partial function at the type level
applying the function to parameter (type indices) yields a type
compute data constructors it will operate on rather than relying on fixed statically (Int, Bool, String) or opaque unknowns (a, b, c)

GADTs must be defined in one place
type families can be extended
functional dependencies are similar to type families

normal type classes define partial functions from types to a collection of named values by pattern matching on the input types

type families define partial functions from types to types by pattern matching on the input types.
associated types

```
{-# LANGUAGE TypeFamilies #-}
data familiy XList a

data instance XList Char = XCons !Char !(XList Char) | XNil

data instance XList () = XListUnit !Int
```

```
class ArrayElem e where
  data Array e
  index :: Array e -> Int -> e
  
instance ArrayElem Bool where
  data Array Bool = BoolArray BitVector
  index (BoolArrya ar) = indexBitVector ar i
  
instance ArrayElem Int where
  data Array Int = IntArray UIntArr
  index (IntArray ar) i = indexUIntArr ar i

instance (ArrayElem a, ArrayElem b) => ArrayElem (a, b) where
  data Array (a, b) = PairArray (Array a) (Array b)
  index (PairArray ar br) = (index ar i, index br i)

class Collects c where
  type Elem c
  empty :: c
  insert :: Elem c -> c -> c
  toList :: c -> [Elem c]
  
instance Collects [e] where
  type Elem [e] = e
  empty = []
  insert = (:)
  toList = id
```


[Type Family vs Functional Dependency](https://ghc.haskell.org/trac/ghc/wiki/TFvsFD)


## cleanup below

Type level programming presentation

Array 
Collection
Heterogenous Collection

https://en.wikipedia.org/wiki/Type_family
https://wiki.haskell.org/GHC/Type_families

Implementing a minimal version of servant

http://www.well-typed.com/blog/2015/11/implementing-a-minimal-version-of-haskell-servant/

https://www.reddit.com/r/haskell/comments/3o9f22/ann_the_typecombinators_library_a_collection_of/

union type

Applying Type-Level and Generic Programming in Haskell
https://www.reddit.com/r/haskell/comments/3j3by9/applying_typelevel_and_generic_programming_in/


data kinds
kind polymorphism
open type families
open type classes
type equality (~)
new kinds via datatype promotion (closed)
two open kinds: 
  *
  Constrain (special purpose)

kind polymorphic

domain-specific generic programming

associated type

KnownSymbol