#Asynchronous JavaScript

##Callbacks

Functions are first class citizens. Pass the function as a parameter.

- Code can easily become very confusing.
- Error handling is easy to miss.
- Cannot return values with `return`, cannot use `throw`.

[async](http://caolan.github.io/async/) module makes callbacks easier to handle.


##Promises

`new Promise( /* executor */ function(resolve, reject) { ... } );`

Create a new Promise and return promise object with certain conditions:

- `reject`: return Promise with a given reason for rejection.
- `resolve`: return Promise with a given value.

Functions to handle different Promise results:
 
- `catch`: rejection handler.
- `then` : fulfillment and rejection handler.

##Generators (ES6)

Iterative algorithm and single function which can maintain its own state. Works as a factory of iterators.

```JavaScript
function* idMaker(){
  var index = 0;
  while(true)
    yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
```


##Web Workers 

Cannot access the DOM or global variables, must be in a separate file. Useful for background calculation.

##Async (ES7)

Mark a function as `asyn`, allows you to `await` on a promise. Code is a lot cleaner.

## References

- [JavaScript Goes Asynchronous (and It's Awesome)](https://www.sitepoint.com/javascript-goes-asynchronous-awesome/)
- [RisingStack - Asynchronous JavaScript](https://blog.risingstack.com/asynchronous-javascript/)
- [Introducing HTML 5 Web Workers: Bringing Multi-threading to JavaScript](http://www.htmlgoodies.com/html5/tutorials/introducing-html-5-web-workers-bringing-multi-threading-to-javascript.html#fbid=yn-lJUnN6jn)
- [MDN - Using Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
- [MDN - Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN - Iterators and Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)