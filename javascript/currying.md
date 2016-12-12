#currying

You can curry functions in JavaScript by hand or write some functions to automate it.

## Manually

```JavaScript
var greetCurried = function(greeting) {
  return function(name) {
    console.log(greeting + ", " + name);
  };
};

var greetHello = greetCurried("Hello");
greetHello("World"); 
```

## Naive Automatic Currying

This misses a lot of edge cases, but presents the basic idea of currying in JavaScript.

```JavaScript
var curryIt = function(uncurried) {
  var parameters = Array.prototype.slice.call(arguments, 1);
  return function() {
    return uncurried.apply(this, parameters.concat(
      Array.prototype.slice.call(arguments, 0)
    ));
  };
};

var greetGoodbye = curryIt(greeter, "Goodbye", ", ");
greetGoodbye(".", "World"); // "Goodbye, World."
```

For a more principled and complete approach use [Ramda](http://ramdajs.com/).

## References

- [A Beginner’s Guide to Currying in Functional JavaScript](https://www.sitepoint.com/currying-in-functional-javascript/)