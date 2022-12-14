// import './App.css';
import PureComponent from './components/PureComponent';
import { useState } from 'react';
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';


function App() {
  let [firstcount, updateFirstCount] = useState(0);

const handleFirstCount = () => {
    updateFirstCount(firstcount+1);
    console.log(firstcount+1);
    return <p>firstCount: {firstcount+1}</p>;
  }

  return (
    <div className="App">
      <h1 style={{textAlign:"center",margin:"10px"}}>Assignment 5</h1>
    
      <PureComponent method={handleFirstCount}></PureComponent>
      <br />
      <div style={{textAlign:"center"}}>
        <button onClick={handleFirstCount} style={{textAlign:"center",height:"30px",borderRadius:"10px",backgroundColor:"black",color:"white",cursor:"pointer"}}>second button</button>
      </div>
      
      
      <br />
      <br />
      <hr />
      <br />
      <h3>Below is the demonstration for Higher order component</h3>
      <ul>
        <li>Both buttons are separate components</li>
        <li>although they are two different components but they share same functional code</li>
        <li>Here we can see the by using the higher order components we can avoid coding same function multiple times</li>
        <li>Note that the higher order function created separate state for each wrapped component passed through them</li>
      </ul>
      <div className='flex-box'>
        <Comp1 />
        <Comp2 />
      </div>
    </div>
  );
}

export default App;
