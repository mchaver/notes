#Type Level Programming - Vector


With -XDataKinds, GHC automatically promotes every datatype to be a kind and its (value) constructors to be type constructors. The following types

```Haskell
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE GADTs     #-}
data Nat = Zero | Succ Nat

data Vec :: * -> Nat -> * where
  Nil  :: Vec a 'Zero
  Cons :: a -> Vec a n -> Vec a ('Succ n)
```

[GHC 8.0.1 - User's Guide - DataType promotion](https://downloads.haskell.org/~ghc/8.0.1/docs/html/users_guide/glasgow_exts.html#datatype-promotion)