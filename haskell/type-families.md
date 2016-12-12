# Type Families

partial function at the type level, applying the function to parameters (type indices) yields a type. Permit a program to compute what data constructors it will operate on. A type class interface declares kind and arity, number of type indices it takes.

Indexed type families = type families
Type families are paramtetric types that can be assigned specialized representations base on the type paramteter they are instantiated with

data families - indexed form of data, newtype definitions
type synonym families - indexed form of type synonyms
standalone or assoicated with a type classe
standalone more general
associated type more clearly express how a type is used and lead to better error messages
Multiparameter type classes
Functional Dependencies

## Multi-parameter type class

A single parameter type class denotes sets of types. A multi-parameter type class denotes relations between types. `{-# LANGUAGE MultiParamTypeClasses #-}`

```
{-# LANGUAGE MultiParamTypeClasses #-}
{-# LANGUAGE FlexibleContexts #-}

class Convertible val val' where
  convert :: val -> val'
  
instance Convertible Int Integer where
  convert = toInteger

instance Convertible Int Char where
  convert = chr
```

## Functional Dependencies
fundep Constrain the parameters of type classes. They let you state that in a 
multi-parameter type class, one of the parameters can be determined by the
others.

```
{-# LANGUAGE FunctionalDependencies #-}
class Mult a b c | a b -> c where
  mult :: a -> b -> c
  
instance Mult Int Int Int where
  mult = (*)
  
data Vector = Vector Int Int deriving (Eq, Show)

instance Mult Vector Vector Int where
  (Vector a1 a2) `mult` (Vector b1 b2) = (a1 * a2) + (b1 * b2) 

instance Mult Int Vector Vector where
  x `mult` (Vector a1 a2) = Vector (x * a1) (x * a2)

λ> let v1 = Vector 2 4
λ> let v2 = Vector 5 8
λ> 
λ> (4 :: Int) `mult` (v1 `mult` v2) 
192
-- multiply to vectors then multiply result with an int
-- all using the same function
λ> 
λ> (2 :: Int) `mult` Vector 3 4 
Vector 6 8
-- multiply both numbers in the Vector by two 
-- return them in a Vector
```

## Type Families

Type families are open like typeclasses, meaning a new instance can be added at any time. Three types: data families, open type synonym families, and closed type synonym families.

### Data Families

(1) they can be defined on the toplevel or (2) they can appear inside type classes (in which case they are known as associated types). The former is the more general variant, as it lacks the requirement for the type-indexes to coincide with the class parameters. However, the latter can lead to more clearly structured code and compiler warnings if some type instances were - possibly accidentally - omitted.



Syntax:

```
-- standalone type family and data family
type family Foo
data family Var

-- typeclass type family and data family
class C where
  type Foo
  data Bar
```

`data family F` creates a new type like `data F = ...`
`type family F` does not create a new type like `type F = Bar Baz` does not create a new type (just a synonym of an existing type).

### Non-Injective Type Family (one-way/non-invertible)

```
import qualified Data.ByteString as S
import qualified Data.ByteString.Lazy as L
import           Data.Word

-- Family of type synonyms called `Element`
-- `Element` has kind `* -> *`
type family Element container

type instance Element S.ByteString = Word8
type instance Element L.ByteString = Word8

-- make a `w` that can be a Word8, Element L.ByteString or Element S.ByteString
λ> let w = 0 :: Word8
λ> :t w
w :: Word8
λ> :t w :: Element L.ByteString
w :: Element L.ByteString :: Word8
λ> :t w :: Element S.ByteString
w :: Element S.ByteString :: Word8
```

### Injective Type Family (invertible)

```
data family XList a
data instance XList Char = XCons Char (XList Char) | XNil
data instance XList () = XListUnit Int
```

type synonyms are abbreviations, but type family synonyms can make a simple type (Kind `*`) become a synonym of a type constructor (kind `* -> *`) applied to an argument.

`type instance F A = B` makes `B` match `F a`.

### Typeclass Data Family

Associated types can describe a family of data structure that have a uniform interface but vary in implementation according to one or more type parameters. Instances define bot the data structure used and the operations on the data structure in a single location. 

```Haskell
class ArrayElem e where
  data Array e
  index :: Array e -> Int -> e
  
instance ArrayElem Bool where
  data Array Bool = BoolArray BitVector
  index (BoolArray ar) i = indexBitVector ar i

instance ArrayElem Int where
  data Array Int = IntArray UIntArr
  index (IntArray ar) i = indexUIntArr ar i

instance (ArrayElem a, ArrayElem b) => ArrayElem (a, b) where
  data Array (a, b) = PairArray (Array a) (Array b)
  index (PairArray ar br) = (index ar i, index br i)
```

### Typeclass Type Family

Class for collection types where the type function maps each collection type to its corresponding element type.

```Haskell
import qualified Data.Set as Set

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

instance Ord e => Collects (Set.Set e) where
  type Elem (Set.Set e) = e
  empty = Set.empty
  insert = Set.insert
  toList = Set.toList
```

### Flexible

`{-# LANGUAGE FlexibleInstances #-}` allows you to distinguish between `[Char]`, `[Bool]`, `[Int]`, etc. for type class instances.

`{-# LANGUAGE FlexibleContexts #-}` allows a type with a type class in a type signature, for example: `Num Int => Int -> Int -> Int` or

```
class Shower a b where
  myShow :: a -> b
  
doSomething :: Shower a String => a -> String
doSomething = myShow
```

## References
[Glasgow Haskell Compiler Users Guide - GHC 8.0.1 Users Guide - 9.9. Type Families](https://downloads.haskell.org/~ghc/8.0.1/docs/html/users_guide/glasgow_exts.html#type-families)

[Wiki Haskell - GHC/Multi-parameter Type Class](https://wiki.haskell.org/Multi-parameter_type_class)

[Wiki Haskell - Functional Dependencies](https://wiki.haskell.org/Functional_dependencies)

[Some interesting features of Haskell’s type system ](https://jeltsch.wordpress.com/2013/02/09/some-interesting-features-of-haskells-type-system/)

[Wiki Haskell - GHC/Type Families](https://wiki.haskell.org/GHC/Type_families)

[24 Days of GHC Extensions: Type Families](https://ocharles.org.uk/blog/posts/2014-12-12-type-families.html)

[stack overflow - type family vs data family, in brief? (Haskell)](http://stackoverflow.com/a/20908500/412417)

[Wikipedia - Type Family](https://en.wikipedia.org/wiki/Type_family)

[Stack overflow - What is the FlexibleContexts extension is good for? Could you please explain it using a simple example?](http://stackoverflow.com/a/31252435/412417)