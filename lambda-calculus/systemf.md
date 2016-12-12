#System F
Λ denotes a type level function
λ denotes a value level function

true  = $\Lambda \alpha . \lambda x^\alpha \lambda y^\alpha . x$  
false = $\Lambda \alpha . \lambda x^\alpha \lambda y^\alpha . y$  

these functions take a type $\alpha$ and two expressions of type $\alpha$

and = $\lambda x^{Boolean} \lambda y^{Boolean}.x \; Boolean \; y \; false$  
or  = $\lambda x^{Boolean} \lambda y^{Boolean}.x \; Boolean \; true \; y$   
not = $\lambda x^{Boolean}.x \; Boolean \; false \; true$

$K_1 \rightarrow K_2 \rightarrow \ldots \rightarrow S$

$zero : N$
$succ : N \rightarrow N$

$\forall \alpha . \alpha \rightarrow (\alpha \rightarrow \alpha) \rightarrow \alpha$

0 = $\Lambda \alpha . \lambda x^\alpha . \lambda f^{\alpha \rightarrow \alpha}. x$   
1 = $\Lambda \alpha . \lambda x^\alpha . \lambda f^{\alpha \rightarrow \alpha}. fx$  
2 = $\Lambda \alpha . \lambda x^\alpha . \lambda f^{\alpha \rightarrow \alpha}. f(fx)$   
3 = $\Lambda \alpha . \lambda x^\alpha . \lambda f^{\alpha \rightarrow \alpha}. f(f(fx))$  

[System F](https://en.wikipedia.org/wiki/System_F)