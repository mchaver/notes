initial algebra is
 an initial object in the cateogry of F-algebras for a given endofunctor F
provides a framework for induction and recursion

endofuncto F : C -> C

1 terminal object
+ coproduct
× product

initial algebra does not reduce anything (nothing lost, not lossy)
unique homomorphism from initial algebra to any other algebra based on the same functor

F : Set -> Set sending X to 1 + X
N set of natular numbers with the functions [zero,succ]: 1 + N -> N
zero: 1 -> N
succ: N -> N
F-algebra (A,[e,f])
e : 1 -> A
f : A -> A

observalble properties of data structure can be captuerd by deifning it as an initial algebra

(tagged unions as coproduct)
data Fruit = Apple Apple
           | Orange Orange
           | Berry Berry
Fruit is coproduct of Apple Orange and Berry and ⊥






initial object is the object that has one and only one morphism
going to any object in the category


product gets things out of a tuple `fst` `snd`
a product of two objects `a` and `b` is object `c`

coproduct is a tagged union of two types

homomorphism structure preserving map between two algebraic structures
isomorphism is a morphism that admits an inverse
Two mathematical objects are isomorphic if an isomorphism exists between them
A morphism f : X → Y in a category is an isomorphism if it admits a two-sided inverse, meaning that there is another morphism g : Y → X in that category such that gf = 1X and fg = 1Y, where 1X and 1Y are the identity morphisms of X and Y, respectively


In category theory the disjoint union is defined as a coproduct in the category of sets.
In set theory, the disjoint union (or discriminated union) of a family of sets is a modified union operation that indexes the elements according to which set they originated in. Or slightly different from this, the disjoint union of a family of subsets is the usual union of the subsets which are pairwise disjoint – disjoint sets means they have no element in common.

initial object Void (takes nothing)


top (unit type ()) (terminal object) and bottom (initial object ) are dual to each other

const is useful for applying to a single argument to yield a function where one is needed (such as passing to map)

function generator' - I use it with one argument, and it gives me a function (taking one argument) that always returns a constant value. So map (const 42) [1..5] results in [42, 42, 42, 42, 42]

humble functions like const and id are really useful as a higher order function for the same reason that they are fundamental in the SKI combinator calculus.
