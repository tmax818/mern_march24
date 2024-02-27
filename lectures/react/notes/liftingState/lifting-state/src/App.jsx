import {useState} from 'react';
import MessageForm from './Components/MessageForm';
import MessageDisplay from './Components/MessageDisplay';
  
function App() {
    const [currentMessage, setCurrentMessage] = useState("There are no messages...Yet")

    const onNewMessage = (m) => {
      setCurrentMessage(m);
    }
    return (
        <>
            <MessageForm onNewMessage={onNewMessage} />
            <MessageDisplay currentMessage={currentMessage} />
        </>
    );
}
    
export default App;

