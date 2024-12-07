
function createCounter(init) {
  let current = init; // This stores the current value of the counter

  return {
      increment: function() {
          current += 1; // Increase the current value by 1
          return current; // Return the updated value
      },
      
      decrement: function() {
          current -= 1; // Decrease the current value by 1
          return current; // Return the updated value
      },
      
      reset: function() {
          current = init; // Reset the current value to the initial value
          return current; // Return the reset value
      }
  };
}
const counter1 =createCounter(5);
console.log(counter1.increment());
console.log(counter1.decrement());
console.log(counter1.reset());
const counter2 =createCounter(10);
console.log(counter2.increment());
console.log(counter2.decrement());
console.log(counter2.reset());

