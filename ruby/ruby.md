####dynamic
Execute many common behaviors at runtime that static programming language perform during compilation. Extension of the program (new code) extending objects and definitions or modify the type system. 
  
####reflection
Examin, introspect and modify its own structure and behavior at runtime. 
  
####object-oriented 
objects which may contain data in the form of fields (attributes) and code in the form of procedures (methods).

## Language features

### Inheritance
An object or class is based on another object (prototypal inheritance) or class (class-based inheritance), using the same implementation specifying an implementation to maintain the same behavior. Single inheritance, Multiple inheritance, Multilevel inheritance.

[Inheritance](https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming))

[Mulitple inheritance - The diamond problem](https://en.wikipedia.org/wiki/Multiple_inheritance#The_diamond_problem)

### Mixin (included)

A class that contains methods for use by other classes without having to be the parent class of those other classes. Often described as being "included".

[Mixin](https://en.wikipedia.org/wiki/Mixin)

### Metaclass

A class whose instances are classes. It defines the behavior of certain classes and their instances.

[Metaclass](https://en.wikipedia.org/wiki/Metaclass)

### Dynamic Typing

The process of verifying the type system at runtime. Generally associate each runtime object with a type tag containing its type information. Most type safe languages include some form of dynamic typing.

[Dynamic Typing](https://en.wikipedia.org/wiki/Type_system#DYNAMIC)

### Duck Typing

An object's suitability is determined by the presence of certain methods and properties rather than the acual type. This requires dynamic typing.

[Duck typing](https://en.wikipedia.org/wiki/Duck_typing)

### Everything is an expression

This includes statements. An expression is a combintation fo one or more explicit values, constans, variables, operators and functions that the programming langauge interpretes and computes to produce another value. Generally results in a primitive type. 

[Expression](https://en.wikipedia.org/wiki/Expression_(computer_science))

### Statement

The smallest standalone element of an imperative programming language that expresses some action to be accired out: assignment, for-loop, while-loop, return, etc.

### Everything is executed imperatively

Uses statements to change a program's state. 

[Imperative programming](https://en.wikipedia.org/wiki/Imperative_programming)

### Reflection

### Metaprogramming

### Lexical closure

Lexically scoped name binding in languages with first-class functions. A closure is record storing function with an environemnt

[Closure](https://en.wikipedia.org/wiki/Closure_(computer_programming))

### Iterator

Used to examine all contents of a container.

[Iterator](https://en.wikipedia.org/wiki/Iterator)

### Generator

A special function that can be used to conrol the iteration behaviour of a loop. Generator yields values one at a time which requires less memeory and allows the caller to get started processing the first few values immediately.

[Generator](https://en.wikipedia.org/wiki/Generator_(computer_programming))

### Literal notation

- arrays 
- hashes 
- regular expressions
- symbols

### Interpolation

Evaluate a string literal containing one or more placeholders, yielding a result in which the placeholders are replaced with their corresponding values. `printf` in C.

[String interpolation](https://en.wikipedia.org/wiki/String_interpolation#Ruby)

### Default argument

An argument to a function that a programmer is not required to specify. 

[Default argument](https://en.wikipedia.org/wiki/Default_argument)

### Variable scope

- global
- class
- instance
- local

### Sigil

A symbol attached to a variable name showing the variable's datatype or a scope. Usually a prefix like `$` in `$foo`.

[Sigil](https://en.wikipedia.org/wiki/Sigil_(computer_programming))

### Garbage collection

Automatic memory management. It attempts to reclaim garbage, memeory occupied by objects that are no longer in use by the program. Typically does not handle network sockets, database handles, user interaction windows, and file and device descriptors. Helps reduce dangling pointer bugs, double free bugs, memory leaks.

[Garbage collection](https://en.wikipedia.org/wiki/Garbage_collection_(computer_science))

[GC in Ruby](https://ruby-doc.org/core-2.2.3/GC.html)

[Ruby Hacking Guide - Garbage Collection](https://ruby-hacking-guide.github.io/gc.html)

[Rails Garbage Collection: Tuning Approaches](https://bearmetal.eu/theden/rails-garbage-collection-tuning-approaches/)

[How Ruby Manages Memory and Garbage Collection](http://www.rubyinside.com/how-ruby-manages-memory-and-garbage-collection-3006.html)

### First-class continuations

Gives a language the ability to copmletely control the execution order of instructions. Jump to a function that produced the call to the current function or to a function that has previously exited. It saves the execution state of the program. Useful for coroutines, green threads and exception handling.

[First-class continuations](https://en.wikipedia.org/wiki/Continuation#First-class_continuations)

### Strict boolean coercion

Everything is true execpt `false` and `nil`.

### Exception handling

Exceptions are conditions that require special processing, often changing the normal flow of program execution. Generally save the current state of execution and switch the execution to a specific subroutine known as an execption handler. If exceptions are continuable the handler may resume the execution at the original location using the saved information. For example, floating point divided by zero also the program to be resumed but out of memory might not be resolvable.

[Exception handling](https://en.wikipedia.org/wiki/Exception_handling)

[Implicity type conversion](https://en.wikipedia.org/wiki/Type_conversion#Implicit_type_conversion)

### Operator overloading

Operator ad hoc polymorphism. Different operators have different implementations depending on their arguments. 

[Operator overloading](https://en.wikipedia.org/wiki/Operator_overloading)

### Native threads and fibers

[Thread](https://en.wikipedia.org/wiki/Thread_(computing))

[Fiber](https://en.wikipedia.org/wiki/Fiber_(computer_science))

### Built-in numbers

- rational numbers
- complex numbers
- arbitrary-precision arithmetic

### Custom Dispatch Behavior

`method_missing`

`const_missing`

### Unicode support but no ICU support

### Native Plug-in api in C
Interactive Ruby Shell
Centralized pacakge managaement through RubyGems
large standar library: YAML, JSON, XML, CGI, OpenSSL, HTTP, FTP, RSS, curses, zlib, Tk

### Centralized Package Management

[RubyGmes](https://en.wikipedia.org/wiki/RubyGems)

## Semantics

Object-oriented. Every value is an object including calsses and instances of types that would be primitives in other languages. Variables always hold references to object. Every function is a method and methods are always called on an object. Methods defined at the top level scope become members of the Object class. Every class is an ancestor of every other class. They become visible in all scopes. Does not support multiple inheritance. 


[Ruby](https://en.wikipedia.org/wiki/Ruby_(programming_language))
## Packages

rspec tdd

[Wikipedia - Dynamic programming language](https://en.wikipedia.org/wiki/Dynamic_programming_language)

[Wikipedia - Reflection (computer programmin)](https://en.wikipedia.org/wiki/Reflection_(computer_programming))

[Wikipedia - Object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming)


process image (save program data)
https://en.wikipedia.org/wiki/System_image#Process_images
https://en.wikipedia.org/wiki/Coroutine
https://en.wikipedia.org/wiki/Green_threads
https://en.wikipedia.org/wiki/Exception_handling
https://en.wikipedia.org/wiki/Polymorphism_(computer_science)

https://en.wikipedia.org/wiki/Operator_(computer_programming)

https://en.wikipedia.org/wiki/Syntactic_sugar

https://en.wikipedia.org/wiki/Expressive_power_(computer_science)