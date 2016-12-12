f-algebra
type Algebra f a = f a -> a
reduce the notion of an algebra to the bare minimum
ingredients: a functor, a type and a function

ability to form expressions
ability to evaluate those expressions

data Expr = Const Int
          | Add Expr Expr
          | Mul Expr Expr
recursively defined

ExprF a = Const Int
        | Add a a
        | Mul a a

ExprF (ExprF (ExprF a))

express the fix point of a type constructor f as
newtype Fix f = Fx (f (Fix f))
Fix f is the type you get by apply f to itself
  it's a fix point of f

view type constructor as a function
Fx :: f (Fix f) -> Fix f

type Expr = Fix ExprF

inhabited type

val :: Fix ExprF
val = Fx (Const 12)

testExpr = Fx $ (Fx $ (Fx $ Const 2) `Add`
                (Fx $ Const 3)) `Mul` (Fx $ Const 4)

evaluation is a recipe for extraciting a single value from an expressions
f-algebra is built on a functor (endofunctor - same category)

alg :: ExprF Int -> Int
alg (Const i) = i
alg (x `Add` y) = x + y
alg (x `Add` y) = x * y

alg' :: ExprF String -> String
alg' (Const i) = [chr (ord 'a' + i)]
alg' (x `Add` y) = x ++ y
alg' (x `Mul` y) = concat [[a,b] | a <- x, b <- y]

F-algebra
1. an endofunctor F in a category C
2. an object A in that category
3. a morphism from F(A) to A

functor f, carrier type a, funciont from f a to a

catamorphism

cata :: Functor f => (f a -> a) -> (Fix f -> a)

eval :: Fix ExprF -> Int
eval = alg . fmap eval . unFix

phantom type is a paraterized type that does not appear on the right side

bivariant means covariant and contravariant
can only occur with phatom type
data Phantom a = Phantom
instance Functor Phantom where
  fmap _ Phantom = Phantom
instance Contravariant Phantom where
  contramap _ Phantom = Phantom

data WithInt a = WithInt (Int -> a) -- covariant
data MakeInt a = MakeInt (a -> Int) -- contravariant

Positive position: the type variable is the result/output/range/codomain of the function
Negative position: the type variable is the argument/input/domain of the function

newtype Callback a = Callback { runCallback :: ((a -> IO ()) -> IO ())}  
-- can derive functor 
