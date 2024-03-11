# Day 6



## API
`useEffect`



### [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)


- pending: initial state, neither fulfilled nor rejected.
<!-- .element: class="fragment" data-fragment-index="1" -->
- fulfilled: operation  successful.
<!-- .element: class="fragment" data-fragment-index="2" -->
- rejected: operation failed.
<!-- .element: class="fragment" data-fragment-index="3" -->


```javascript
const myPromise = new Promise();
```


```javascript
const myPromise = new Promise((resolve, reject) => {
    
    });
```


#### [`.then`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)


#### [`.catch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)


[promise-demo](https://github.com/tmax818/mern_march24/tree/main/lectures/06day/demos/promise-demo)



### [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/fetch)


![](../../reveal/images/so-fetch-thats-amazing.gif)



### [axios](https://axios-http.com/)


```bash
$ npm install axios
```


![](../../reveal/images/fetch.gif)



### [`useEffect`](https://react.dev/reference/react/useEffect)


### [pure function](https://react.dev/learn/keeping-components-pure)

It minds its own business. It does not change any objects or variables that existed before it was called.
<!-- .element: class="fragment" data-fragment-index="1" -->
Same inputs, same output. Given the same inputs, a pure function should always return the same result.
<!-- .element: class="fragment" data-fragment-index="2" -->


### [What about API calls?](https://react.dev/learn/keeping-components-pure#where-you-_can_-cause-side-effects)


```javascript
useEffect(setup, dependencies?)
```