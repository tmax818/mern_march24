# [	Callbacks](https://login.codingdojo.com/m/754/16714/124475)

## Learning Objectives

- Analyze the concept of functions as first-class citizens in JavaScript
- Apply callback functions in JavaScript
- Differentiate and utilize array methods such as `.map()`, `.filter()`, and `.forEach()`.

## Functions and Callbacks

>Remember, a function call is equal to whatever that function returns.


## [`.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

>The `.map()` function is an array method that creates a new array by iterating over each element of the original and applying a callback function to each element.

```javascript
const array1 = [1, 4, 9, 16];
// Pass a function to map
const map1 = array1.map((x) => x * 2);
console.log(map1);
// Expected output: Array [2, 8, 18, 32]
```

## [`.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

>The `.filter()` function is another array method that creates a new array by iterating over each element of the original and applying a callback __test__ for each element. 

```javascript
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6);
console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
```

## [`.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

```javascript
const array1 = ['a', 'b', 'c'];
array1.forEach((element) => console.log(element));
// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
```

## [`.find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)






