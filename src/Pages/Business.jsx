import { useState } from "react";
import styled from "styled-components";

const Business = () => {

    const [firstname, setFirstname] = useState()
    const [lastname, setLastname] = useState()

    const handleSubmit=(e)=>{
        e.preventDefault();

        const Info = {firstname,lastname};
    }
    return ( 
        <Section>
            <form action="">
                <label htmlFor="">First Name:</label>
                <input type="text" name="" id="" 
                value={firstname}
                onChange={(e)=>{setFirstname(e.target.value)}}/>
                <label htmlFor="">Last Name:</label>
                <input type="text" name="" id=""
                value={lastname}
                onChange={(e)=>{setLastname(e.target.value)}}/>
                <br/><br/>

                <button onClick={(e)=>{handleSubmit(e)}}>LOG IN</button>
                

            </form>
        </Section>
     );
}
 
export default Business;

const Section = styled.div`
    background-color: gray;
    color: white;
`