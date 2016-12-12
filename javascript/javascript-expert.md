what are .bind(), .call(), and .apply() used for? how are they different?

Use a mnemonic device. call() = comma, apply() = array.

(a)pply takes (a)rray! (an array with all the arguments)

(c)all needs (c)ommas! (a comma separated list of arguments, like a normal function call)

(b)ind is for a (b)elated use! (you'll generate a function that you won't call right away, but you need it to use the right context when you do call it later!

 ES6 destructuring and lambdas
 
 such as browser/OS nuances and bugs, repaints/reflows, memory leaks, mobile strategies, what jank is, recent history relating to current trends -- i.e. why do we have build tools? why are some considered 'better' than others? how have libraries and frameworks evolved?
 
http://jankfree.org/

https://www.reddit.com/r/javascript/comments/3f7rx5/been_interviewing_with_a_lot_of_tech_startups_as/

prototype

closure, or $http vs $q promises

dom
dom events

Widgets, lifecycle management.

Dependency management, using AMD, CommonJS, or ES6.

Widgets, lifecycle management.

Unit tested code, and better if there is additionally automated testing

Scope (lexical structure) vs Closure (function "remembering" lexical scope) vs Context ("this" keyword binding, "new" keyword, implicit binding via object literal, .apply() and .call())

What makes OO JavaScript different from more traditional OO languages. (object system vs class system, delegation vs inheritance, "prototypal inheritance")

Asynchronous flow, callbacks, Promise

ES6+ features

Other things you should know like hoisting, patterns like module, and IIFE's or immediately invoked function expressions (anonymous and named), function declaration vs function expression, creating prototype methods..

 .prototype, .__proto__, .constructor, Objects.getOwnPropertyNames(), typeof, instanceof, 
 
 
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
 
 Explain event delegation and why it is useful.
 
 event loop
 
 How does hoisting work in JavaScript?

javascript runtime
javascript concurrency
javascript animation
javascript dependency

websockets







Answers:

hoisting: a variable can be used before it has been declared. Javascript moves all declarations
to the top of the current scope.
x = 5;
elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x;                     // Display x in the element
var x; // declare

initializations are not hoisted
var x = 5; // initialize
var y = 5;

stack, heap, queue


https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop
JavaScript's concurrency model is an event loop

function calls form a stack of frames.

function f(b){
  var a = 12;
  return a+b+35;
}
function g(x){
  var m = 4;
  return f(m*x);
}
g(21);

when you call g, a frame is created containg g arguments and local variables.
g calls f, a second frame is created and pushed on top of the first one. when
f returns, the frame is popped. when g is called, the stack is empty.

objects are allocated in a heap (unstructured memory).

queue: js runtime contains a message queue, list of messages to be processed.
function associated with each message.
when stack is empy, a message is taken out of the queue and processed.
processing consists of calling associated functions.

Event loop
while(queue.waitForMessage()) {
  queue.processNextMessage();
}

wait synchronosouly for a message to arrive if there are none.

run-to-completion, each message is processed completely before the next

add messages at anytime

zero delays

no blocking, IO are events and callbacks. legacy exception are
alert and synchronous XHR.



Objects/Prototypes

each object has an internal link to another object called
prototype. The prototype object has a prototype of its own,
until it reaches null. null has no prototype. This is the prototype chain.

inherit methods

constructor, Object.create() (ECMAScript 5), class

do not extend native prototypes


Strict Mode
"use strict"
convert mistakes into errors

Array is a list like object which has methods to perform traversal and mutation. Data can
be stored in non-contiguous locations.

typed arrays: array like objects for accessing raw binary data. (different from normal 
javascript arrays, Array.isArray() will return false on typed array). buffers and views
, buffer (ArrayBuffer) represents a chunk of data with no method for accessing the content, need a view
to access the memory. view provides data type, starting offset, and number of elements.
FileReader.prototype.readAsArrayBuffer()
XMLHttpRequest.prototype.send()
ImageData.data

JSON JavaScript Object Notation


memory management
values are allocated when things are created
freed when they are not used anymore (garbage collection)

1. allocate the memory you need
2. use the allocated memory (read,write)
3. release the allocated memory when it is not needed anymore

var n = 123;      // allocates memory for a number
var s = "qwerty"; // allocates memory for a string
var o = {
  a : 1
, b : null
}; // allocates memory for an object and contained values

var a = [1, null, "abra"]; // allocates memory for the array and contained values

function f(a) {
  return a + 2;
}; // allocates a function (which as a callable object)

some function calls result in object allocation
new Date();
document.createElement('div'); 


call
calls a function with a given this value and arguments provided individually.
fun.call(thisArg[, arg1[, arg2[, ...]]])
thisArg value of this
arg1,arg2,... arguments for the object

can use call to chain construct an object

apply
calls a function with a given his value and arguments provided as an array
fun.apply(thisArg, [argsArray])
similar to call() except for the type of arguments it supports
fun.apply(this, ['eat', 'bananas']);
fun.apply(this, new Array('eat', 'bananas'));

bind 
create a new function, when called, its this keyword set to the provided value
fun.bind(thisArg[, arg1[, arg2[, ...]]])

this.x = 9;
var module = {x : 81, getX: function() { return this.x; } };

module.getX();
var retrieveX = module.getX;
retrieveX();
// returns 9

var boundGetX = retrieveX.bind(module);
boundGetX(); // 81

partially applied function



this

global context
global object
console.log(this.document === document); // true
console.log(this === window); // true
this.a = 37;
console.log(window.a); // 37

function context
function f1() {
  return this;
}

f1() === window; // in browser

function f2() {
  "use strict";
  return this;
}

f2() === undefined;


promise
new Promise( /* executor */ function(resolve, reject) { ... } );
the executor is a function that gets passed resolve and reject functions.
promise has three states: pending, fulfilled, rejected

DOM document object model
programming interface for HTML, XML and SVG
structured representation of the document as a tree
connect web pages to programming languages
document
element
nodeList
attribute
namedNodeMap