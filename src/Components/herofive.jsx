// import styled from 'styled-components';
import Ladyphone from '../assets/download (2).svg';
const herofive = () => {
    return (  
        <Container>
            <Leftside>
                <h2>Save money as you spend it, seriously.</h2>
                <p>You can't avoid spending. That's how you pay for your needs. But we can help you put money away every time you pay for something. Just set a percentage to save and watch your money grow.</p>
                <a>See all our Savings</a>
            </Leftside>


        <Rightside>
            <img src={Ladyphone} alt='ladyp'/>
        </Rightside>

        </Container>
        
    );
};
 
export default herofive;
