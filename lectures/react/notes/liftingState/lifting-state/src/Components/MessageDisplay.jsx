const MessageDisplay = (props) => {
    const {currentMessage} = props;
    return (
        <>
            <h1>Current Message</h1>
            <p> What will I display? </p>
            <p>The current message, of course: {props.currentMessage}</p>
        </>
    );
};
    
export default MessageDisplay;

