# Type Level Programming - Servant

Learn about Type Level Programming by implementing a simple version of Servant (follows Andres Löh's tutorial).

type-level literals (become types)
type operators
type equality `~`
KnownSymbol - value-level string corresponding to the type-level string with `symbolVal`. All concrete literals in GHC are an instance of `KnownSymbol`.

Type-Literals can be numeric or string. Numeric literals are of kind Nat and string literals are of kind Symbol. `GHC.TypeLits`. Calculate types that result in strings or numerics.

Operator symobls become type constructors rather than type variables.
Operator sybmols in types can be writtent infix

## Language Pragmas

```Haskell
{-# LANGUAGE DataKinds, PolyKinds, TypeOperators #-}
{-# LANGUAGE TypeFamilies, FlexibleInstances, ScopedTypeVariables #-}
{-# LANGUAGE InstanceSigs #-}
```

#####Type level definition
- DataKinds: type-level strings.
- PolyKinds: kind polymorphism (use a letter such as `k` to represent any kind `*`, `* -> *`, `* -> * -> *`, etc.).
- TypeOperators: type-level infix operators.

#####Interpretation definition
- TypeFamilies: type-level functions.
- FlexibleInstances: type class programming.
- ScopedTypeVariables: type annotations to guie the type checker.

#####Documentation
- InstanceSigs:


## Module Header

```Haskell
module TinyServant where

import Control.Applicative
import GHC.TypeLits
import Text.Read
import Data.Time -- for our example
```

`GHC.TypeLits`

## API specifications

Define datatypes used for API specification.

```Haskell
data Get (a :: *)

data a :<|> b = a :<|> b
infixr 8 :<|>

data (a :: k) :> (b :: *)
infixr 9 :>

data Capture (a :: *)
```

#####Four constructors

1. `Get` is an endpoint of type `a` which is kind `*`. Ignore content types for simplicity (they exist in Servant).
- `a :<|> b` is a choice between two routes.
- `item :> rest` is for nested routes. `item` is the first path component and `rest` are the remaining. `item` may be a type-level string or a `Capture`, which is of kind `*`. The first argument of `:>` is kind-polymorphic (it can accept any kind).
- `Capture` is a route component that is captured, parsed and then exposed to the handler as a paratemer of type `a`.

With kind polymorphism in `:>` we can write:

```Haskell
"person" :> Get Person

Capture Curreny :> Get Amount
```

## Example API

```Haskell
type MyAPI = "date" :> Get Day
        :<|> "time" :> Capture TimeZone :> Get ZonedTime
```

## Interpretation as server

```Haskell
serve :: HasServer layout => Proxy layout -> Server layout -> Application
```

`server` takes a proxy for the API type and a handler mathcing the API type `Server layout` to an `Application`. `Application` is from WAI, but in this tutorial we use a simulated server type

```Haskell
[String] -> IO String
serve :: HasServer layout => Proxy layout -> Server layout -> [String] -> IO String
```

`HasServer` class has instances for all the different constructs of the type-level DSL. `Proxy` is used to help the type checker when we are not passing a concrete value of a type we need.

## The Server type family

The handler for a `Get a` endpoint is an IO action

```Haskell
type family Server layout :: *
type instance Server (Get a) = IO a
``` 

`a :<|> b` is a pair of handlers

```Haskell
type instance Server (a :<|> b) = Server a :<|> Server b
```

Literal strings in the routes do not affect the type of the handler:

```Haskell
type instance Server ((s :: Symbol) :> r) = Server r
```

`Capture` means that the handler expects an additional argument of the type to be captured

```Haskell
type instance Server (Capture a :> r) = a -> Server r
```

## Computing the handler type of the example API

Expanded form of `Server MyAPI`. `~` means type equality.

```
   Server MyAPI

~  Server (     "date" :> Get Day
           :<|> "time" :> Capture TimeZone :> Get ZonedTime
          )

~       Server ("date" :> Get Day)
   :<|> Server ("time" :> Capture TimeZone :> Get ZonedTime)

~       Server (Get Day)
   :<|> Server ("time" :> Capture TimeZone :> Get ZonedTime)

~       IO Day
   :<|> Server ("time" :> Capture TimeZone :> Get ZonedTime)

~       IO Day
   :<|> Server (Capture TimeZone :> Get ZonedTime)

~       IO Day
   :<|> TimeZone -> Server (Get ZonedTime)

~       IO Day
   :<|> TimeZone -> IO ZonedTime
```

Handlers

```
handleDate :: IO Day
handleDate = utctDay <$> getCurrentTime

handleTime :: TimeZone -> IO ZonedTime
handleTime tz = utcToZonedTime tz <$> getCurrentTime

handleMyAPI :: Server MyAPI
handleMyAPI = handleDate :<|> handleTime
```

## The HasServer class

```Haskell
class HasServer layout where
  route :: Proxy layout -> Server layout -> [String] -> Maybe (IO String)
```

Similar to serve but allows for failure. This helps handle the choice `:<|>` between handlers.

```Haskell
serve :: HasServer layout => Proxy layout -> Server layout -> [String] -> IO String
serve p h xs = case route p h xs of
  Nothing -> ioError (userError "404")
  Just m  -> m
```

If no routes match, then the server returns 404.

## The HasServer instances

```Haskell
type instance Server (Get a) = IO a
```

Turn the result of `Get a` into a `String`. In Servant, it gets converted by content types (JSON, HTML, etc.).

```Haskell
instance Show a => HasServer (Get a) where
  route :: Proxy (Get a) -> IO a -> [String] -> Maybe (IO String)
  route _ handler [] = Just (show <$> handler)
  route _ _       _  = Nothing
  
instance (HasServer a, HasServer b) => HasServer (a :<|> b) where
  route :: Proxy (a :<|> b) -> (Server a :<|> Server b) -> [String] -> Maybe (IO String)
  route _ (handlera :<|> handlerb) xs =
        route (Proxy :: Proxy a) handlera xs
    <|> route (Proxy :: Proxy b) handlerb xs
```

Handle literal strings `KnownSymbol`.

```Haskell
instance (KnownSymbol s, HasServer r) => HasServer ((s :: Symbol) :> r) where
  route :: Proxy (s :> r)
        -> Server r -> [String] -> Maybe (IO String)
  route _ handler (x : xs)
    | symbolVal (Proxy :: Proxy s) == x = route (Proxy :: Proxy r) handler xs
  route _ _       _                     = Nothing
```

`Capture`, handler is a function that expects an `a`.

```Haskell
instance (Read a, HasServer r) => HasServer (Capture a :> r) where
  route :: Proxy (Capture a :> r)
        -> (a -> Server r) -> [String] -> Maybe (IO String)
  route _ handler (x : xs) = do
    a <- readMaybe x
    route (Proxy :: Proxy r) (handler a) xs
  route _ _       _        = Nothing
```

## Tests

```
λ> serve (Proxy :: Proxy MyAPI) handleMyAPI ["time", "CET"]
"2015-11-01 20:25:04.594003 CET"

λ> serve (Proxy :: Proxy MyAPI) handleMyAPI ["time", "12"]
*** Exception: user error (404)

λ> serve (Proxy :: Proxy MyAPI) handleMyAPI ["date"]
"2015-11-01"

λ> serve (Proxy :: Proxy MyAPI) handleMyAPI []
*** Exception: user error (404)
```

## References

### Something

[GHC 8.0.1 - User's Guide - 9.13. Type-Level Literals](https://downloads.haskell.org/~ghc/8.0.1/docs/html/users_guide/glasgow_exts.html#type-level-literals)

[GHC 8.0.1 - User's Guide - 9.4.4. Type operators](https://downloads.haskell.org/~ghc/8.0.1/docs/html/users_guide/glasgow_exts.html#type-operators)

### Language Pragmas

### Servant

- [Stack Overflow - What are all the mechanisms used to enable Servant's type-based API?](http://stackoverflow.com/questions/33456040/what-are-all-the-mechanisms-used-to-enable-servants-type-based-api)

- [Type-level Web APIs with Servant – An exercise in domain-specific generic programming ](https://www.andres-loeh.de/Servant/)

- [Github Gist - kosmiskus/TinyServant](https://gist.github.com/kosmikus/03b6ec4a66bceb49b85d)