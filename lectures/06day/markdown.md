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


[promise-demo]()



### [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)



### [axios](https://axios-http.com/)


```bash
$ npm install axios
```



### [`useEffect`](https://react.dev/reference/react/useEffect)


```javascript
useEffect(setup, dependencies?)
```