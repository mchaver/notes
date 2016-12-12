# When to use Monads

https://wiki.haskell.org/All_About_Monads
http://www.mjoldfield.com/atelier/2014/08/monads-reader.html
[What is the purpose of the Reader Monad?](http://stackoverflow.com/questions/14178889/what-is-the-purpose-of-the-reader-monad)

common monads
https://github.com/bitemyapp/exference-exference/blob/acc090db8b71c4f4844e1252a440c110977c0864/environment/Monad.hs
https://github.com/lspitzner/exference/blob/3fb15bdb454132f1db49655cbea0c0ba302cc717/environment/Monad.hs

coding standards
https://www.reddit.com/r/haskell/comments/58d0s1/coding_standards_in_haskell/


look at recommended libraries, find monad implementations
https://haskell-lang.org/libraries

continuation pattern

[What is the “Free Monad + Interpreter” pattern?](http://softwareengineering.stackexchange.com/questions/242795/what-is-the-free-monad-interpreter-pattern)

[Why do we need monads?](http://stackoverflow.com/questions/28139259/why-do-we-need-monads)

[Lambda the Ultimate - What is a monad, why should I use it, and when is it appropriate?](http://lambda-the-ultimate.org/node/1276)

[Quora - Functional Programming - What aare monads and why are they useful](https://www.quora.com/Functional-Programming-What-are-monads-and-why-are-they-useful)

[You Could Have Invented Monads! (And Maybe You Already Have.)](http://blog.sigfpe.com/2006/08/you-could-have-invented-monads-and.html)

[Why Do Monads Matter?](https://cdsmith.wordpress.com/2012/04/18/why-do-monads-matter/)

[Functors, Applicatives, And Monads in Pictures](http://adit.io/posts/2013-04-17-functors,_applicatives,_and_monads_in_pictures.html)

https://en.wikibooks.org/wiki/Haskell/Understanding_monads

https://cse.sc.edu/~mgv/csce330f16/wadler_monadsForFP_95.pdf


data type
continuation type
restricted form of existing monads (simple implementation)


## Text

https://github.com/bos/text/blob/bb3d8623d83b327f99d0520237e5ab44dbb5a9d8/Data/Text/Internal/Read.hs

https://github.com/bos/text/blob/bb3d8623d83b327f99d0520237e5ab44dbb5a9d8/Data/Text/Lazy/Read.hs

simple parser with reader for 

doesn't depend on outside parser (attoparsec, parsec, etc.)
```
type IReader t a = t -> Either String (a,t)

newtype IParser t a = P {
      runP :: IReader t a
}

instance Functor (IParser t) where
    fmap f m = P $ fmap (first f) . runP m

instance Applicative (IParser t) where
    pure a = P $ \t -> Right (a,t)
    {-# INLINE pure #-}
    (<*>) = ap

instance Monad (IParser t) where
    return = App.pure
    m >>= k  = P $ \t -> case runP m t of
                           Left err     -> Left err
                           Right (a,t') -> runP (k a) t'
    {-# INLINE (>>=) #-}
    fail msg = P $ \_ -> Left msg

```

## Vector

util

https://github.com/haskell/vector/blob/49396e1e54084ce9fd3982b99030ca316ad05856/Data/Vector/Fusion/Util.hs

primmonad

https://github.com/haskell/vector/blob/49396e1e54084ce9fd3982b99030ca316ad05856/Data/Vector/Generic/Base.hs

https://hackage.haskell.org/package/primitive

## Containers
Tree structure

https://github.com/haskell/containers/blob/71e293eb0849dee89dbabc6bd7fa258094b4db6c/Data/Tree.hs

Set structure

https://github.com/haskell/containers/blob/71e293eb0849dee89dbabc6bd7fa258094b4db6c/Data/Graph.hs

# optparse-applicative

P monad instance
ReadM
https://github.com/pcapriotti/optparse-applicative/blob/20a2328359af0c7b6ce4be632e87c925e9098de1/Options/Applicative/Internal.hs

Parser EDSL
ParserM parsercontainer (not acutally used)
continuation
https://github.com/pcapriotti/optparse-applicative/blob/20a2328359af0c7b6ce4be632e87c925e9098de1/Options/Applicative/Types.hs