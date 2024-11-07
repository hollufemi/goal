import styled from "styled-components";
import NewImage from '../assets/download6.svg';
const Herothirteen = () => {
    return (  
        <Container>
            <Leftdiv>
                <h1>The money app for<br/> Africans.</h1>
                <p>Save, spend, send and invest money across borders.</p>
                <button>Join Kuda</button>
            </Leftdiv>

            <Rightdiv>
                <img src={NewImage} alt='image'/>
            </Rightdiv>
        </Container>
    );
}
 
export default Herothirteen;


const Container = styled.div`
    display: flex;
    background-color: #EFF1FF;
    width: 1000px;
    margin: auto;
    
    
`

const Leftdiv = styled.div`
    margin-left: 60px;

    h1{
        color: #40196D
    }

    button{
        background-color: #40196D;
        color: white;
        padding:10px;
        border-radius: 6px;
    }
`

const Rightdiv = styled.div`
    

    img{
        width: 450px;
    }
`
