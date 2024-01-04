"use strict";

// calc Age function

// The firstName variable is a global variable and can be accessed in the function.

// Global scope variable

const firstName = "John";

// when the function ran, javascript did a look up in the scope chain to find firstName.
// parent scope for the calcAge function is the global scope

function calcAge(birthYear) {
  const age = 2024 - birthYear;
  //console.log(firstName); - this is found by looking up the scope chain

  function printAge() {
    const output = `${firstName} are ${age} born in ${birthYear}`;

    // scope chain in action as the function tried to find the age variable

    console.log(output);

    // create a block scoped variable in the function
    // check if the person is a millenial
    // try and access the variable const str outside
    // it will throw a reference error
    // const and let variables are block scoped so can only be accessed inside the block
    // if we added a var - that would function scoped and available because in the same function
    // function variables are available across the whole function

    if (birthYear >= 1981 && birthYear <= 1995) {
      // we can add a local scope variable which will stop j'script looking up the scope chain to find its value - the value will be locally scoped. This means we can have a global and local variable with different data

      const firstName = "Stephen";
      const str = `Oh your a millenial, ${firstName}`;
      console.log(str);

      // under strict mode functions are block scoped
      function add(a, b) {
        return a + b;
      }
    }

    // add(2, 3);
    // add is block scoped under ES6 in strict mode
    // so we cannot see add outside of the block
  }
  printAge();

  return age;
}

calcAge(1993);
// console.log (age) - this is a function scoped variable and so is not available in the global scope.
//printAge cannot be called for the same reason. It is not global.
// firstName is global so it can be accessed everywhere in the function
