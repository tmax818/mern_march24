# [Destructuring](https://login.codingdojo.com/m/754/16713/124467)

## Learning Objectives
- Analyze the syntax and functionality of the [destructuring] technique using [object]s and [array]s.
- Evaluate the advantages of using the destructuring technique over traditional variable assignment methods.
- Demonstrate an understanding of advanced techniques in destructuring, such as handling name conflicts and nested structures.

## It's Destructuring Time! 

>According to [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment), "destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects into distinct variables." 

```javascript
const person = { 
    firstName: 'Bob', 
    lastName: 'Marley', 
    email: 'bob@marley.com', 
    password: 'sekureP@ssw0rd9', 
    username: 'barley', 
    createdAt: 1543945177623
};
```

>To destructure, the declarations between the curly (object) or square (array) braces must match the value to the right of the equal sign. When you destructure a value from an object, the properties keys must be written exactly as they were initialized in the object. 

```javascript
const {firstName} = person; // 'Bob' is assigned to firstName
```


### Solving Naming Conflicts

```javascript
const {firstName: first} = person; // 'Bob' is assigned to first
```

### Nested Destructuring


## A Deeper Dive - Looking Ahead: Preparing for React

### Destructuring Values from the Props Object

### Destructuring the [`useState`] Hook: An Array... of Functions!

```javascript
const [state, setState] = useState(initialState)
```



[destructuring]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
[array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[`useState`]: https://react.dev/reference/react/useState