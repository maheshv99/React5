import React from 'react';
import newComponent from './newComponent';

function Comp2(props) {
    let { count, method } = props;
  return (
    <div style={{textAlign:"center"}}>
        <button className='btn btn-outline-secondary' onClick={method}
        style={{textAlign:"center",height:"30px",borderRadius:"10px",backgroundColor:"black",color:"white",cursor:"pointer",margin:"20px"}}>button from component 2 clicked {count} times</button>
    </div>
  )
}

export default newComponent(Comp2);