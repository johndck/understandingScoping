# understandingScoping

A remind repo on how javascript scoping works

Understanding Scoping

... meaning variable visibility ie where we define variables in javascript, determines where we have access to them ... where we can read their values ...

Note: We have to understand – scoping, scope and scope of a variable.

Scoping

Scoping controls how our programmes variables are organised and accessed by the javascript engine.

So scoping asks the question – where can we access a certain variable and where can we not?

In javascript we have lexical scoping. This means scoping is completely determined by the placement of functions or blocks of code.

The best way to understand this is to think of an inner function nested within a parent function. The inner function has access to any variables inside the parent. The inner function can look up and see the variables. It only works one-way. There is no way for the parent function to see and access variables created within the child functions.

Scope

Scope is the space or environment in our code where a variable is declared.

Every scope has access to all the variables from all its outer scopes – this is the scope chain.

In javascript, we have 3 types of scope: Global, Function and Block (only let & const)

Scoping

Scope of a variable means the entire region of the code where the certain variable can be accessed.

Global

- Declared outside of any block or function

Function

- Declared inside the function – are local to the function – called local scope
- Define a variable in the function, it is scoped to that function!

Block (ES6)

- Everything between {} – let or const .. impacted – restricted to the block
  (if you created with VAR it would be visible outside of the {})
  Let & const are block scoped
  The best way to understand this is to look at real code.

Const myName = ‘John’;

THIS IS GLOBAL SCOPE.

Function first( ){
const age = 40;

If (age>=30 {
const decade = 4
let millennial = true;
};

AGE is first SCOPE

Decade is BLOCK scoped

Function second (){
const job = ‘teacher’;
console.log(`${myName} is a ${age} year old ${job} `);

- Note – myName and job are not declared inside second();
- All nested scopes have access to their parent and variables
- This is the scope chain working – everything looks up (but not down) – the scope chain is the order in which functions are written in the code – nothing to do with how the functions are executed – order of function calls is not relevant to the scope chain
- This means an outer scope function cannot access the inner scope variables
- If we cannot find the scope in the current code, javascript will look up the scope chain to find a value if it exists (variable lookup)
- If something is function scoped, any nested functions will be able to look upwards through the scope chain to access the variable
- It won’t be possible for the blocked scoped variables to access the second scoped variables because of lexical scoping

}
second()

JOB IS 2nd SCOPE

};

first();

Recall this:
