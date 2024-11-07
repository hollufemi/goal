import styled from 'styled-components';
import Lady from '../assets/download5.svg';
const Herothree = () => {
    return (  
        <Container>
            <Leftdiv>
            <h1> Your phone + <br/> our app +<br/>a debit card =<br/> a simpler life.</h1>
            <p>We designed a money app for your lifestyle, and you<br/> can get a debit card to go with it. That's all you need<br/> to make the right money moves.</p>
            <a>Open An Account in Minutes</a>
            </Leftdiv>

            <Rightdiv>
                <img src={Lady} alt='ladyimg'/>
            </Rightdiv>

            
         </Container>
    );
};
 
export default Herothree;

const Container = styled.div`
    display: flex;
    justify-content:space-around;
    padding: 30px;
    margin: auto;
    max-width: 1280px;
    min-height: calc(100vh - 70px);
    align-items: center


`

const Leftdiv = styled.div`
   
   

   h1{
    color: #40196D;
   }
   a{
    color: #40196D;
   }
`

const Rightdiv = styled.div`
   
   img{
    width: 550px;
    }

`
