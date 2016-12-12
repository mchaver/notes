Typed λ-calculus: Concepts and Syntax
P.B. Levy
University of Birmingham

$x \in y$

2 Notations for Sets and Elements
2.1 Sets


integers: $\mathbb{Z}$ as the set of integers

booleans: $\mathbb{B}$ as the set of booleans

cartesian product: A and B are sets. A x B for the set of ordered pairs {<x,y>x | x 
\in A, y \in B}
disjoint union: A and B are sets. A + B for the set of ordered paris {inl x | x \in A} \union {inr x | x \in B}
inl and inr as tags, you can define 
inl x \def <0,x>
inr x \def <1,x>
function space: A and B ars sets. A -> B is the set of functions from A->B (B^A)
A x B has mn elements
A + B has m + n elements
A -> B has n^m elements

2.2 Integers and Booleans

2.3 Cartesian Product

projections: If x in an ordered pair, πx for its first component and π'x for its second component
  let <3,7+2> be x. (πx) * (π'x) + (π'x)
pattern-match: let <3,7+2> be x. case x of <y,z>. y * z + z

2.4 Disjoint Union
can pattern-match an element of A + B
let inl 3 be x. let 7 be y.
case x of {inl z. z + y, inr z. z * y}

2.5 Function Space
λ-abstraction: A is a set. λx_A "the function that takes each x \in A to"
λx_Z.(2*x+1) is a function that takes an integer x to 2 * x + 1

application: If f is a function from A to B and x \in A then Fx means f aplied to x
(λx_Z.(2 * x + 1))7

3 A Calculus For Integers and Booleans
3.1 Calculus of Integers
calculi are defined inductively
- n_ is an integer epxressions for every n \in Z
- If M is an integer expressions, and N is an integer expression, then M + N is an integer expression
- If M is an integer expressions, and N is an integer expression, then M + N is an integer expression

an integer expression is a finite tree of symbols.
(3 + 4) * 2 and 3 + 4 * 2 are different. 

an object of this cateogyr is an algebra consisting of a set X, equipieed with an element $n \in X$, for each $n \in Z$ and two binary operations $+$ $x$. A morphism is an algebra homorphism:  a function between sets that preserves all this stucture. Then the set of integer expressions (trees of symbols) is an initial algebra. An initial object in this category of algebras.

$T M : int$ means "M is an integer expression"
inductive definitions are abbreviated as follows

$\frac{}{T n : int} n \in Z$
n is an integer expression
M is an integer expression, N is an integer expression, M+N is an integer expression
M is an integer expression, N is an integer expression, M*N is an integer expression

proof tree
3 : int  4 :int
3 + 4 : int       2 : int
(3 + 4) * 2 : int

3.2 Calculus of Integers and Booleans
Set of types as {int,bool}
M :A to mean that M is an expression of type A

true : bool  false : bool
M : int N: int
M > N bool

M : bool N:B N':B
case M of {true. N, false. N'} : B

T let 3 bex. x + 4 : int
x : int T x + 4 : int

1. A, B and C range over types
2. M and N range over terms (free variable, not bound)
3. x,y and z are idetifiers
4. typing context : (it is a set) finite set of distinct identifiers with associated types
x : int, y : int, z : bool
5. $\Gamma$ $\Delta$ range over typing contexts
6. If $\Gamma$ is a typing context, x an identifier and A a type
  $\Gamma,x : A$
to mean $\Gamma$ extended with the dclaration $x : A$. what is x already appears in $\Gamma$? then that declaration is over writtine
x : bool, y: int, z : bool, x :int
7. Any term that that can be provd in the empty context T M : A is said to be closed

$\vdash$ can be read as then
$x : int \vdash x + 4 : int$ x is of type integer, then $x + 4$ is function that returns an integer
"once x has been defined to be some integer, x + 4 is an integer expression"

$x : int, y : int \vdash x + y : int$
"once x and y have been set as integers, then x + y is an integer expression"


The $+$ rule
$\frac{\Gamma \vdash M : int \Gamma \vdash N : int}{\Gamma \vdash M + N : int}$
extend typing context gamma with (M : int), extend typing context gamma with (N : int), extend typing context gamme with (M + N : int)

identifiers
$x : int, y :int \vdash x : int$
$\frac{}{\Gamma \vdash x : A}(x:A) \in \Gamma$

`let`
$\frac{\Gamma \vdash M : A  \Gamma,x : A \vdash N : B}{\Gamma \vdash let M be x. N : B}$
N could be a different type from A depending on the behavior of N

empty context: $\vdash M : A$
any term that can be proved in the empty context is said to be closed. 



$\vdash$ can be read as then
$x : int \vdash x + 4 : int$ x is of type integer, then $x + 4$ is function that returns an integer
"once x has been defined to be some integer, x + 4 is an integer expression"

$x : int, y : int \vdash x + y : int$
"once x and y have been set as integers, then x + y is an integer expression"

$\Gamma$ is a typing context, x is an identifier, A is a type
$\Gamma,x: A$ means insert x of type A into the typing context $\Gamma$. When we see $\Gamma$ again we can access the identifier x

Gamm is a set or ordered list of pairs <x,r>, usually written as x:t, x is identifier and t is type

free variable (substitution may take place)
bound variable (previously free, but has been bound )

closed term contains no free variables
In the lambda calculus, x is a bound variable in the term M = λ x . T, and a free variable of T. We say x is bound in M and free in T. If T contains a subterm λ x . U then x is rebound in this term. This nested, inner binding of x is said to "shadow" the outer binding. Occurrences of x in U are free occurrences of the new x.

Lisa found her book.
her is a free variable. it my refer to Lisa (coreference) or any other female.

composite morphism
$frac{x:C \vdash f(x) : B     y:B \vdash g(y):A}{x:C \vdash g(f(x)): A}$
horizontal bar indicates we have a rule, the rule that the judgement on the valid is valid
"x is of type C, then apply f to x and get a value of type B"
"y is of type B, then apply g to y and get a value of type A"
"then x is of type C, then apply f to x, then apply g to its result and get a value of type A"


identify morphism
$frac{}{x:A \vdash x:A}$

4 Bound Identifiers

4.1 Scope and Shadowing

4.2 alpha-equivalence

5 The λ-calculus

[Typed λ-calculus: Concepts and Syntax
](http://www.cs.bham.ac.uk/%7Epbl/mgs/lam/mgsbegin.pdf)

[type theory in nLab](https://ncatlab.org/nlab/show/type+theory)
[term in nLab](https://ncatlab.org/nlab/show/term)


```
data Models.2016.01.01 where
[persist|
User
  name Text
|]
```

```
data Models.2016.02.01 where
[persist|
User
  name Text
  password Text Maybe
|]
```

```
data Models.2016.03.01 where
[persist|
User
  name Text
  password Text Maybe
  email    Text
|]
```

```
data Models.2016.04.01 where
[persist|
User
  name Text
  password Text Maybe
Email
  name Text
  user UserId
|]

```

```
module Migrate.2016-03-01.To.2016-04-01
import qualified Models.2016.03.01 as Old
import qualified Models.2016.04.01 as New

migrateUser :: Old.User -> (New.User,New.Email
```