import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";
import Box from "./components/Box"

const App = () => {
  const texts = ["MyCloud", "Completed Projects", "Contact Us"]

  const colors = ["black", "purple", "skyblue"]

  const styles = [{     backgroundColor: "black",
  color: "white",
  padding: 5 + "px",
  margin: 5 + "px"},{
    backgroundColor: "purple",
    color: "white",
    padding: "5px",
    margin: 5,
    textAlign: "center"
},{

  backgroundColor: 'skyblue',
  color: 'black',
  padding: '5px',
  margin: '5px',
  textAlign: 'end',
}
]

  return (
    <div>
      <Box myAmazingText={texts[0]} theStyle={styles[0]}  />
        {/* <Box1 /> */}
      <Box myAmazingText={texts[1]} theStyle={styles[1]}  />
        {/* <Box2 /> */}
      <Box myAmazingText={texts[2]} theStyle={styles[2]}  />
        {/* <Box3 /> */}
    </div>
  )

}

export default App;