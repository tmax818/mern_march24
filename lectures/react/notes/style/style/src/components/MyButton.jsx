import styles from '../css/MyButton.module.css';

// MyButton.jsx
const btnStyle = {
    padding: '12px 15px',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    background: 'linear-gradient(30deg, rebeccapurple, magenta)', 
    color: '#fff',
    border: 'none'
};
 
const MyButton = (props) => {
    return (
    <>
        <button style={{padding:'12px 15px', fontFamily:'arial sans-serif', fontWeight:'bold', background:'linear-gradient(30deg, rebeccapurple, magenta)', color:'#fff', border: 'none' }}> Button </button>
        <button style={btnStyle}> Button </button>
        <button className={styles.btn}>Button</button>
    </>
        
        );
    }
    
export default MyButton;
