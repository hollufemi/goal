import styled from 'styled-components';
import Blockcard from '../assets/download3.svg';
const Herosix = () => {
    return (  
        <Container>
            <Leftside>
                <img src={Blockcard} alt='block'/>
            </Leftside>


            <Rightside>
                <h2>Turn off access, turn on<br/> safety.</h2>
                <p>Life happens. Milk spills. Debit cards go missing. If that<br/>ever happens, you can block your missing card on the<br/> app so no one can use it. We'd like to see them try.</p>
                <a>Learn more about Cards</a>
            </Rightside>
        </Container>
    );
}
 
export default Herosix;


const Container = styled.div`
    display: flex;
    justify-content:space-around;
    padding: 30px;
    margin: auto;
    max-width: 1280px;
    min-height: calc(100vh - 70px);
    align-items: center;


`

const Leftside = styled.div`
    
    img{
        width: 500px;
    }
`

const Rightside = styled.div`
    

    h2{
        color: #40196D;
    }
    a{
        color: #40196D;
    }
`