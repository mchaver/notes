#Church Encoding

Church Encoding is a way of representing primitive data types as higher-order functions. The only primitive data type necessary is a function. It is minimal in the sense that it says nothing about the values zero, true or false, but structure provides the meaning of those primitive types. It can be extended to represent common data types for human display. 

##Church Booleans
The boolean primitives in Church encoding.
`true` = λa.λb.a
`false`= λa.λb.b
  
`and`  = λp.λq.p q p  
`or`   = λp.λq.p p q  
`not`  = λp.p false true  
`xor`  = λa.λb.a (not b) b  
`if`   = λp.λa.λb.p a b  

`and true false`  

1. = (λp.λq.p q p) true false  
2. = true false true  
3. = (λa.λb.a) false true  
4. = false  

Evaluation

1. `λp.λq.p q p`  
   p is bound to `true`  
   q is bound to `false`  
2. body is now `true false true`  
3. apply `true` to `false true`  
   look up true, it is `(λa.λb.a)`  
   a is false  
   b is true   
4. body is now `false`  

`or true false`
1. = (λp.λq.p p q) true false
2. = true true false
3. = (λa.λb.a) true false
4. = true

`or false false`
1. = (λp.λq.p p q) false false
2. = false false false
3. = (λa.λb.b) false false
4. = false

## Church Numerals
A way to represent natural numbers in Church Encoding. Church numerals are functions that two parameters.

λf.λx.something  
f is the successor function (+ 1)  
x is the value that represents zero (0)  
$C_0 = λf.λx.x$  
$C_1 = λf.λx.f x$  
$C_2 = λf.λx.f(f x)$  
$C_3 = λf.λx.f(f(f x))$  
$C_4 = λf.λx.f(f(f(f x)))$  
$C_n = λf.λx.f^n x$  


add = λM.λN.λf.λx. N f (M f x)

add  = λm.λn.λf.λx.m f (n f x) = $f^{(m+x)}(x)$ = $f^m(f^n(x))$
succ = λn.λf.λx.f (n f x)  (+ 1)
mult = λm.λn.λf.λx.m (n f)
exp  = λm.λn.n m
pred = λn.λf.λx.n(λg.λh.h (g f)) (λu.x) (λu.u)
apply a function n times, the predecessor return a function that applies its paramter n-1 times.
minus = λm.λn.(n pred) m 

```haskell
type Church a = (a -> a) -> a -> a

church :: Integer -> Church Integer
church 0 = \f -> \x -> x
church n = \f -> \x -> f (church (n-1) f x)

unchurch :: Church Integer -> Integer
unchurch cn = cn (+ 1) 0
```

[Church encoding](https://en.wikipedia.org/wiki/Church_encoding)

[Church numerals and booleans explained](http://www.cs.rice.edu/~javaplt/311/Readings/supplemental.pdf) by Robert Cartwright at Rice University
