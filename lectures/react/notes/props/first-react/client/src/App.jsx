import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";
import Box from "./components/Box";

const App = () => {

  const styles = [
    {
      backgroundColor: "black",
      color: "white",
      padding: 5 + "px",
      margin: 5 + "px",
      text: "myCloud"
    },
    {
      backgroundColor: "purple",
      color: "white",
      padding: "5px",
      margin: 5,
      textAlign: "center",
      text: "Completed Projects"
    },
    {
      
      backgroundColor: 'skyblue',
      color: 'black',
      padding: '5px',
      margin: '5px',
      textAlign: 'end',
      text: "Contact Us"
}
  ]

  return (
    <div className="none">
{/* 
      <Box theStyle={styles[0]}/>
      <Box theStyle={styles[1]}/>
      <Box theStyle={styles[2]}/> */}

      {styles.map(style => (
        <Box theStyle={style} />
      ))}

    </div>
  )

}

export default App;