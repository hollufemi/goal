import { useState } from "react";
import styled from 'styled-components'

const Business = () => {
    const [myNum, setMyNum] =useState(0)

    const increaseNum = ()=>{
        setMyNum(myNum + 1)
    }
    return ( 
        <div>
            <br/>
            <br/>
            <br/>
            <h1>React Hook</h1>
            <h1>This is the business</h1>
            <hr/>
            <Holder/>
            <button>Subtrack</button>
            <h1> {myNum} </h1>
            <button onClick={increaseNum}>Add</button>
            <Holder/>
        </div>
     );
}
 
export default Business;