# [Scope and Reassignment](https://login.codingdojo.com/m/754/16713/124464)

<!-- ##  Learning Objectives

- Apply the concept of __scope__ in JavaScript to identify and differentiate between __global scope__ and __local scope__.
- Analyze code examples to determine the accessibility of variables and functions based on their scope.
- Contrast the differences in variable accessibility and reassignment in __block scoping__ using the keywords [`let`] and [`const`] with __function scoping__ using the keyword [`var`] -->


## [Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)


Scope is the visibility or accessibility of information to other code sections throughout an application. 


JavaScript traditionally has two types of scopes: __global__ and __local__.

Note:
- __function-scoped__ - new scopes are created by defining functions.


### Global Scope


>If it's not in a function, it's in the global scope...

note:
- values in the __global scope__ are not inside of any other functions or code blocks.
- any variables or functions defined within the global scope are available throughout a file.


note:
### Local(Function) [Scope]
## [`const`], [`let`] and [Block] Scoping
## What Creates a [Block] Scope?
## `const` vs `let` and Reassignment


[`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
  - allows variable reassignment 
  - It also does not require a value upon declaration:


[`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
  - must assign a value at the time of creation. 
  - may not be reassigned for the life of the variable



note:
## When to Use [`let`] vs [`const`]

- Use [`let`] when you need a variable that can be reassigned with a new value.
- Use [`const`] when you have a variable that won't be reassigned but can have its properties modified (for objects) or elements modified (for arrays). 




<!-- ---

[Scope]: https://developer.mozilla.org/en-US/docs/Glossary/Scope
[Block]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block
[`const`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
[`let`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
[`var`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
[`if...else`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
[`while]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
[`for`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
[`switch`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
[`class`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class -->