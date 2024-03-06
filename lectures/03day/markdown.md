# Day 3


## Functional Components


## What is a component?


```javascript
const App = () => {
  return (
    <>
        // jsx and/or other components here
    </>
  )
}
export default App;
```


## Props


```javascript
const Header = (parameters) => {
  return (
       // whatever we want to return... 
  )
}
```


```javascript
const Header = (props = {}) => {
  return (
       // whatever we want to return... 
  )
}
```


```javascript
const Header = (props) => {
  return (
      <>
      // our jsx here
      </> 
  )
}
```


```html
<Header name="Dennis" >
```

```javascript
Header({name: "Dennis"})
```

[props-demo]()






