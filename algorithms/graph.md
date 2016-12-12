# Graph Algorithms

## Depth-First Search

DFS used to traverse an entier graph and take Θ(|V| + |E|), linear in the sieze of the graph. IN cases of large or infinite graphs, limit depth.

Start at some arbitrary node.

```
procedure DFS(G,v):
   label v as discovered
   for all edges from v to w in G.adjacentEdges(v) do
       if vertex w is not labeled as discovered then
           recursively call DFS(G,w)
```

https://en.wikipedia.org/wiki/Iterative_deepening_depth-first_search
https://en.wikipedia.org/wiki/Branching_factor

## Breadth-first search

Worst case performance 	O ( | E | ) = O ( b^d )
Worst case space complexity 	O ( | V | ) = O ( b^d )

```
Breadth-First-Search(Graph, root):
  for each node n in Graph:            
    n.distance = INFINITY        
    n.parent = NIL

  create empty queue Q      
  root.distance = 0
  Q.enqueue(root)                      
  
  while Q is not empty:        
    current = Q.dequeue()
    for each node n that is adjacent to current:
      if n.distance == INFINITY:
        n.distance = current.distance + 1
        n.parent = current
        Q.enqueue(n)

```



hash table (hash map) is a data structure used to implement an associative array, a structure that can map keys to values. A hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

In a well-dimensioned hash table, the average cost (number of instructions) for each lookup is independent of the number of elements stored in the table. Many hash table designs also allow arbitrary insertions and deletions of key-value pairs, at (amortized[2]) constant average cost per operation.[3][4]