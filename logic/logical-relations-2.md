Prove Type Safety

Type Safety: If $\vdash e : \tau$ then

Well typed programs don't get stuck. This definition is insufficient.

Progress and preservation is a method of proving typed safety

What we really want is this:
Type Safety: If $\vdash e : \tau$ and $e \rightarrow * e'$
  then either $e'$ is a value or $\exists e''. e' \rightarrow e''$
  
Progress Lemma: $\vdash e : \tau$ then either val(e) (e is value) or $\exists e'. e \rightarrow e'$
Preservation Lemma: $\vdash e : \tau$ and $e \rightarrow e'$ then $\vdash e' : \tau$

prove that every type is perserved in each step. Have to be able to type check the running programming (intermediate terms). This is problematic for some more complicated languages. Progresss and Preservation might be too much for some languages.

V[\tau] what values of the language belong to that type

$V[bool] = {true,false}$  
$V[\tau_1 \rightarrow \tau_2] = {\lambda x : \tau_1. e | \forall v. \in V[\tau_1]. e [v/x] \in E[\tau_2]}$  
(call by value setting) forall v in v, if we substitue v for in x in e then it acts like an expression in E of \tau_2. (separate value forms from expressions)

$E[\tar] = {e | \forall e'. e \rightarrow * e' \and irred(e') \rightarrow e' V[\tau]}$  (e behaves like type tau, if it reduces to a value of type tau)
(you should have $e$ behaves like a value when it is irreducible)
irred(e') means it cannot take another step

$\Gamma \vdash e : \tau$
$\Gamma \doublevdash e : \tau$

$g[\Gamma] = {\gamma | dom(\gamma) = dom(\Gamma) \and} \forall x \in dom(\Gamma). \gamma(x) \in V[\Gamma(x)]}$

$\gamma$ maps variables to values
domain of gamma is equal to domain of Gamma
and forall x in domain of Gamma it should be that
gamma(x) (values that these variables map to) should belong to the value interpretation of x in Gamma

define notion of semantic type safety
$\Gamma \doublevdash e : \tau = \forall \gamma \in  g [\Gamma]. \gamma(e) \in E[\tau]$
for all gamma in Gamma, gamma e should behave like a type in E.

Fundamental Property of Logical Relations (the Basic Lemma)
If $\Gamma \vdash e : \tau => \Gamma \doublevdash e : \tau$
If e type checks under Gamma with type \tau
then e will semantically behave like it has type \tau in Gamma.

Corollary:
Suppose e is a closed term of type tau and e takes a bunch of steps to get to e prime. Show that e' is a value or there exists e'' such that e' steps to e''.

Under a closed gamma e behaves like it semantically has type tau.

If e' is not irreducible it can take another step. If it is irreducible then it should be a value of type tau.

Case prove true in E[bool]
\\[\\frac{}{\\Gamma \\vdash true : bool}\\]
show that $\Gamma \doublevdash true : bool$
suppose \gamma \in g[\Gamma]
show \gamma(true) \in E[bool] = true \in E[bool]
suppose $true \rightarrow * e' \and irred(e') Show e' \in V [bool]
immediate from the definition.

Case prove lambda
\\[
\\frac{\Gamma,x:\tau_1 , \vdash e : \tau_2}
      {\Gamma \vdash \lambda x : \tau_1. e : \tau_1 \rightarrow \tau_2}
\\]
Show that
$\Gamma \doublevdash \lambda x : \tau_1. e : \tau_1 \rightarrow \tau_2$
suppose $\gamma \in g[\Gamma]$
show $\gamma(\lambda x : \tau_1 . e) \in E[\tau_1 \rightarrow \tau_2]$
equivalent to $\lambda x : \tau_1 . \gamma(e) \in E[\tau_1 \rightarrow \tau_2]$
suppose $\lambda x : \tau_1 . \gamma(e) \rightarrow * e' \and irred(e')$
$\lambda x : \tau_1. \gamma(e) \in V[\tau_1 \rightarrow \tau_2]$
Suppose $v \in V[\tau_1]$
show after beta reduction $\gamma(e)[v/x] \in E[\tau_2]$
by $I \vdash l. \Gamma, x : \tau_1 \vDash e : \tau_2$
\gamma[x \rightarrow v_1] \in g[\Gamma,x : \tau_1]
$\therefore \gamma[x \implies v](e) \in E[\tau_2]$
equivalent to \gamma(e)[v/x] \in E[\tau_2] 

double right arrow \implies
three dots \therefore
\cdots centered dots
\ldots lower dots
\llbracket oxford
\rrbracket
\wedge and
\vee or

Recursive Types  
$V[\tau_1 \times \tau_2 ] = {(v_1,v_2) \; | \; v_1 \in V [ \tau_1 ] \wedge v_2 \in V [ \tau_2 ]}$  

product  
e ::= fst e |
      snd e |
      (e_1, e_2)
v :: = (v_1,v_2)

disjoint union  
e ::= inl e |
      inr e |
      case e ...
      
v ::= inl v|
      inr v

V[\tau_1 + \tau_2] = {inl v_1 | v_1 \in V[\tau_1]}
                 \bigcup {inr v_2 | v_2 \in V[\tau_2]}
                 
types are downward closed. If v in V in k steps , then v in V in j steps, where j is less than or equal to k.                 