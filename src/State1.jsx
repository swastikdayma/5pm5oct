import { useState } from "react";

function State1() {

const[count , setCount]=useState(0);

//const[variable, function]= useState(initital state)

//variable that stores current value
//function used to update the current value



    function increment(){
      setCount (count + 1)
    }

    function decrement(){
        setCount ( count -1)
    }
    return ( <>
   <button onClick={increment}>+</button>
    <h1>{count}</h1>
    <button onClick={decrement}>-</button>

    
    </> );
}

export default State1;