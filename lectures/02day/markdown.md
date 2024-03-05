# Day 2


## Functional Programming


### Review


> A function is what it returns!!


```javascript
const func1 = () => null;
console.log(func1())
```
`null`
<!-- .element: class="fragment" data-fragment-index="1" -->


```javascript
const func2 = () => {null};
console.log(func2())
```
`undefined`
<!-- .element: class="fragment" data-fragment-index="1" -->


```javascript
const func3 = () => {
    return [1,2,3,4]
}
console.log(func3())
```
`[1,2,3,4]`
<!-- .element: class="fragment" data-fragment-index="1" -->


```javascript
const func4 = () => {
    return () => 5;
}
console.log(func4())
```
`[Function (anonymous)]`
<!-- .element: class="fragment" data-fragment-index="1" -->

```javascript
const func4 = () => {
    return () => 5;
}
console.log(func4()())
```
<!-- .element: class="fragment" data-fragment-index="2" -->
`5`
<!-- .element: class="fragment" data-fragment-index="3" -->


```javascript
const func5 = par => {
    return par;
}
console.log(func5(func4));
```
`[Function: func4]`
<!-- .element: class="fragment" data-fragment-index="1" -->

```javascript
const func5 = par => {
    return par;
}
console.log(func5(func4)());
```
<!-- .element: class="fragment" data-fragment-index="2" -->
`[Function (anonymous)]`
<!-- .element: class="fragment" data-fragment-index="3" -->



## [callbacks](https://github.com/tmax818/mern_march24/blob/main/lectures/02day/demos/callbacks.js)

[docs](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)

>A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
<!-- .element: class="fragment" data-fragment-index="2" -->


[map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

an array method that executes a callback for each element of the array and returns the result
<!-- .element: class="fragment" data-fragment-index="2" -->


[filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

an array method that executes a boolean returning callback for each element of the array and returns the elements for which the boolean callback is true...
<!-- .element: class="fragment" data-fragment-index="2" -->






## [`.map` and `.filter`](https://github.com/tmax818/mern_march24/blob/main/lectures/02day/demos/mapAndFilter.js)



## [npm](https://www.npmjs.com/)



## [React](https://react.dev/)







