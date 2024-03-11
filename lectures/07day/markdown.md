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


### [`<BrowserRouter>`](https://reactrouter.com/en/main/router-components/browser-router)


### [`<Routes>`](https://reactrouter.com/en/main/components/routes)


### [`<Route>`](https://reactrouter.com/en/main/components/route)


### [`useNavigate`](https://reactrouter.com/en/main/hooks/use-navigate)


### [`useParams`](https://reactrouter.com/en/main/hooks/use-params)





