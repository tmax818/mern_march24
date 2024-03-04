# Day 2


## Functional Programming



## [callbacks](https://github.com/tmax818/mern_march24/blob/main/lectures/02day/demos/callbacks.js)


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




## [`.map` and `.filter`]()




## [React](https://react.dev/)







