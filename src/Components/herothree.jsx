// import styled from 'styled-components';
import Lady from '../assets/download (5).svg';
const herothree = () => {
    return (  
        <Container>
            <Leftdiv>
            <h1> Your phone + our app + a debit card = a simpler life.</h1>
            <p>We designed a money app for your lifestyle, and you can get a debit card to go with it. That's all you need to make the right money moves.</p>
            <a>Open An Account in Minutes</a>
            </Leftdiv>

            <Rightdiv>
                <img src={Lady} alt='ladyimg'/>
            </Rightdiv>

            
         </Container>
    );
}
 
export default herothree;
