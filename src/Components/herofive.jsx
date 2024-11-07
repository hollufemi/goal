import styled from 'styled-components';
import Ladyphone from '../assets/download2.svg';
const Herofive = () => {
    return (  
        <Container>
            <Leftside>
                <h2>Save money as you spend<br/> it, seriously.</h2>
                <p>You can't avoid spending. That's how you pay for your<br/> needs. But we can help you put money away every<br/> time you pay for something. Just set a percentage to<br/> save and watch your money grow.</p>
                <a>See all our Savings</a>
            </Leftside>


        <Rightside>
            <img src={Ladyphone} alt='ladyp'/>
        </Rightside>

        </Container>
        
    );
};
 
export default Herofive;


const Container = styled.div`
    display: flex;
    justify-content:space-around;
    padding: 30px;
    margin: auto;
    max-width: 1280px;
    min-height: calc(100vh - 70px);
    align-items: center


`

const Leftside = styled.div`
    

    h2{
        color: #40196D;
    }
    a{
        color: #40196D;
    }
`

const Rightside = styled.div`
    
    img{
        width: 450px;
        /* height: 30px; */
    }
`