//return a internal function that maintains the parent's function environment
function closureCounter() {
  x = 0
  var counter = function(){
    x += 1;
    console.log(x);
  }
  return counter;
}

counter = closureCounter();
counter();
counter();
counter();
counter();