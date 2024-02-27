import './App.css';
import MyNewComponent from './components/MyNewComponent';
import MyOldSmellyComponent from './components/MyOldSmellyComponent';

function App() {
  return (
    <div className="App">
        <MyNewComponent header={ "Header Prop" }>
              <MyOldSmellyComponent/>
        </MyNewComponent>  
    </div>
  );
}
    
export default App;


