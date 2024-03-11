# Day 7



## [React Router](https://reactrouter.com/en/main)



```javascript
function App() {
  return (
    <BrowserRouter>
      <h1>Routing Example</h1>
      <Routes>
    	<Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
    
export default App
```





