#Apply, Bind, Call

## apply

Call a function with a provided `this` value and arguments for `fun` in array. Similar to `call()` except for the type of arguments it supports.

`fun.apply(thisArg, [argsArray])`

### thisArg

The value of `this` for the call to `fun`. 

### argsArray

An array-like object of the arguments with which `fun` should be called. May also be `null` or `undefined`.

### Return value

The result of calling `fun` with `this` and arguments.

### examples

```JavaScript
fun.apply(this, ['eat', 'bananas']);
fun.apply(this, new Array('eat', 'bananas'));
```

## call

Call a function with a given `this` value and arguments provided individually.

`fun.call(thisArg[, arg1[, arg2[, ...]]])`

### thisArg

The value of `this` for the call to `fun`. 

### arg1, arg2, ...

Arguments for the object.

### Return value

The result of calling `fun` with `this` and arguments.

## bind

Creates a new function (does not call it) with a set `this` value.

`fun.bind(thisArg[, arg1[, arg2[, ...]]])`

### thisArg

The value to be passed as `this` to the target function when the vound function is called.

### arg1, arg2, ...

Arbuments to prepend to arguemnts provided to the bound function when invoking the target function.

### Return value

A copy of the given function with the specified `this` value and intial arguments

##mnemonic

- apply takes an array (an array with all the arguments).
- call needs commas (separated list of arguments like normal function calls).
- bind is for a belated use (generate a function to be called later).

##References

- [MDN - Function.prototype.apply()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

- [MDN - Function.prototype.call()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
 
- [MDN - Function.prototype.bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)