Logical Relations Lecture 1

Predicate Logic

Includes symbolic formal systems like first-order logic, second-order login, many-sorted-logic or infinitary logic. These are distinguished from systems in which variable can be quantified (existensial ∃ and universal ∀).  

Logical Relations  
Unary Logical Predicate  
P_\tau(e)  
type safety  
termination  
Strong Normalization (all terms will terminate)  

Binary Logical Relations  
R_\tau(e,e')  
Observable Equivalence  
Compiler Correctness (can be separate languages)  
Secure Information flow  

Program(V_{HighSecurity1}, L_{LowSecurity}) \congruent_{LowSecurity} Program(_{HighSecurity2}, L_{LowSecurity})
Low security cannot distinguish between low and high

SN for STLC (Logical Relations proof) Simply-Type Lambda Calculus

Type Safety with Logical Relations (STLC and Recursive Types)
Step-Indexed L.R.
Mutable References


SN for STLC

$\vdash e : \tau \entails e \downarrow$
downarrow is converges
if converges, does not diverge

$SN_{bool}(e)$ <=> $\vdash e : bool \up$
e is a closed expressions
satisfy three things  

1. $\vdash e : \tau$
2. condition that e has the property of interest $e \downarrow$ e must terminate
3. condition that logical relation is preserved by evaluation of elim forms

$SN_{\tau \rightarrow \tau_2}(e)$ <=> $\vdash e : \tau_1 \rightarrow \tau_2 \up \forall e_1. SN_{\tau_1}(e_1) \rightarrow SN_{\tau_2}(e,e_1)$
third condition (if you give an argument that is strongly normalizing, then the function applied to that argument will be strongly normalizing)

Weakly Normalizing - For every term, there is ate least one finite reduction sequence ending in a normal form

Strongly Normalizing - There is no term with an infinite reduction sequence.

[Predicate Logic](https://en.wikipedia.org/wiki/Predicate_logic)

[First-order logic](https://en.wikipedia.org/wiki/First-order_logic)