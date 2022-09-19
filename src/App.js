import Box from "./components/Box"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div className ="container">
        <Box 
        text=" im a box 1 " 
        background="red"
        color="grey"
        textClass="boldText"
        />

        <Box 
        text=" im a box 2 " 
        background="blue"
        color="violet"
        textClass="smallText"
        />


        <Box 
        text=" im a box 3 " 
        background="violet"
        color="black"

        />
       </div>
      </header>
    </div>
  );
}

export default App;
