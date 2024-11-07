import styled from 'styled-components';
import Platform from '../assets/download4.svg';
const Herofour = () => {
    return (  
        <Container>
            <Leftside>
                <img src={Platform} alt='plat'/>
            </Leftside>

            <Rightside>
                <h2>It's your money, we just <br/>help you manage it.</h2>
                <p>Save it, spend it, send it. It's up to you. Whatever you <br/>choose to do with your money, we'll make sure it's<br/> done better and free of charge. We take responsibility<br/> for that.</p>
            </Rightside>
        
        </Container>
    );
};
 
export default Herofour;


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
   
   img{
    width: 450px;
   }
`

const Rightside = styled.div`
    
   
    h2{
        color: #40196D;
    }

`
