# [Scope and Reassignment](https://login.codingdojo.com/m/754/16713/124464)

##  Learning Objectives

- Apply the concept of __scope__ in JavaScript to identify and differentiate between __global scope__ and __local scope__.
- Analyze code examples to determine the accessibility of variables and functions based on their scope.
- Contrast the differences in variable accessibility and reassignment in block scoping using the keywords `let` and `const` with __function scoping__ using the keyword `var`

## Scope

- Scope is the visibility or accessibility of information to other code sections throughout an application. 
- JavaScript traditionally has two types of scopes: global and local.
- __function-scoped__ - new scopes are created by defining functions.

### Global Scope

- values in the __global scope__ are not inside of any other functions or code blocks.
- any variables or functions defined within the global scope are available throughout a file.